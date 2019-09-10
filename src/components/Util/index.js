import 'isomorphic-fetch'
import sanitizeHtml from 'sanitize-html'

async function submitForm(context) {
    const convertedContext = {}
    
    Object.keys(context).map(key => {
        if (context[key] !== undefined && context[key].value !== undefined) {
            if(typeof context[key].value === 'object'){
                convertedContext[key] = context[key].value
            } else {
                convertedContext[key] = sanitizeHtml(context[key].value, {
                    allowedTags: [],
                    allowedAttributes: {}
                  })
            }
        }
    })

    var doneConvertedContext = JSON.stringify(convertedContext)
    try {
        const result = await Promise.race([
            await fetch('/contact-the-fostering-team/submit', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json; charset=utf-8',
                    'Content-Type': 'application/json; charset=utf-8'
                },
                body: doneConvertedContext
            }),
            new Promise((resolve, reject) => {
                setTimeout(() => reject(new Error('Timeout')), 10000)
            })
        ])

        const responseObject = await result.text()
        const jsonResponse = JSON.parse(responseObject)
        const paymentUrl = jsonResponse.url
        const caseId = jsonResponse.caseID

        return {
            status: result.status,
            url: paymentUrl,
            caseId: caseId
        }
    }
    catch (error) {
        return {
            status: 400
        }
    }
}

export default submitForm