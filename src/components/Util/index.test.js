import submitForm from './index'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'


Enzyme.configure({ adapter: new Adapter() })

describe('submitForm', () => {
    beforeEach(() => {
		fetch.resetMocks()
    })
    

    it('should call frontend with sanitized context', async () => {

        let expectedResult = {status: 200}

        const expectedContext = {
            doYouRecycle : 'true',
			whyMoreSpace : 'other',
			whyMoreSpaceOther : 'Othertextbox value'
        }

        let data = {
            doYouRecycle : {
				value: 'true',
				isValid: false
			},
			whyMoreSpace : {
				value: 'other',
				isValid: false
			},
			whyMoreSpaceOther : {
				value: 'Othertextbox value',
				isValid: false
            }
        }

        let expectedFetch = {
            method: 'POST',
            headers: {
                Accept: 'application/json; charset=utf-8',
                'Content-Type': 'application/json; charset=utf-8'
            },
            body: JSON.stringify(expectedContext)
        }

        fetch.mockResponse(JSON.stringify(expectedResult))

        await expect(submitForm(data))
        expect(fetch).toHaveBeenCalledWith(expect.anything(), expectedFetch)
    })

    it('should remove undefined from sanitized context', async () => {

        let expectedResult = {status: 200}

        const expectedContext = {
            doYouRecycle : 'true'
        }

        let data = {
            doYouRecycle : {
				value: 'true',
				isValid: false
			},
            undefined
        }
        
        let expectedFetch = {
            method: 'POST',
            headers: {
                Accept: 'application/json; charset=utf-8',
                'Content-Type': 'application/json; charset=utf-8'
            },
            body: JSON.stringify(expectedContext)
        }

        fetch.mockResponse(JSON.stringify(expectedResult))

        await expect(submitForm(data))
        expect(fetch).toHaveBeenCalledWith(expect.anything(), expectedFetch)
    })

    
    it('should call frontend', async () => {

        let expectedResult = {status: 200}

        let data = {
            doYouRecycle : {
				value: 'true',
				isValid: false
			}
        }

        fetch.mockResponse(JSON.stringify(expectedResult))

        await expect(submitForm(data))
        expect(fetch).toHaveBeenCalledWith('/fostering-enquiry/submit', expect.anything())
    })


    it('should remove script from content when submitting to frontend', async () => {

        let expectedResult = {status: 200}

        const expectedContext = {
            whyMoreSpace : '',
            firstName : 'shdshdshtextetxetxtexte more text helpim stuckinahere',
            lastName: 'valid'
        }

        let data = {
            whyMoreSpace : {
				value: '<script>alert(\'alert\')</script>',
				isValid: true
            },
            firstName : {
				value: 'shdshdshtextetxetxtexte more text<script>alert(\'alert\')</script> helpim stuckinahere',
				isValid: true
            },
            lastName: {
                value: 'valid',
				isValid: true
            }
        }
        
        let expectedFetch = {
            method: 'POST',
            headers: {
                Accept: 'application/json; charset=utf-8',
                'Content-Type': 'application/json; charset=utf-8'
            },
            body: JSON.stringify(expectedContext)
        }

        fetch.mockResponse(JSON.stringify(expectedResult))

        await expect(submitForm(data))
        expect(fetch).toHaveBeenCalledWith(expect.anything(), expectedFetch)
    })

    it('should remove html tag from content when submitting to frontend', async () => {

        let expectedResult = {status: 200}

        const expectedContext = {
            whyMoreSpace : 'foo',
            firstName: 'valid',
            lastName: 'valid'
        }

        let data = {
            whyMoreSpace : {
				value: '<h1>foo</h1>',
				isValid: true
            },
            firstName: {
                value: '<p>valid</p>',
				isValid: true
            },
            lastName: {
                value: 'valid',
				isValid: true
            }
        }
        
        let expectedFetch = {
            method: 'POST',
            headers: {
                Accept: 'application/json; charset=utf-8',
                'Content-Type': 'application/json; charset=utf-8'
            },
            body: JSON.stringify(expectedContext)
        }

        fetch.mockResponse(JSON.stringify(expectedResult))

        await expect(submitForm(data))
        expect(fetch).toHaveBeenCalledWith(expect.anything(), expectedFetch)
    })
})