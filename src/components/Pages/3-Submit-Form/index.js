import React, { Component } from 'react'
import PropTypes from 'prop-types'
import withContext from '../../WithContext'
import ReCAPTCHA from 'react-google-recaptcha'
import { Button, Anchor } from 'smbc-react-components'
import SubmitUtil from '../../Util'
import { getPageRoute } from '../../../helpers/pagehelper'

export class SubmitForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            recaptchaValid: false,
            isLoading: false
        }
    }

    onChangeRecaptcha = value => {
        this.setState({
            recaptchaValid: value ? true : false
        })
    }

    onSubmit = async (event) => {
        event.preventDefault()
        const { context, history } = this.props

        this.setState({ isLoading: true })
        let rawResponse = await SubmitUtil(context)
        if (rawResponse.status === 200) {
            context.onFormSubmission(rawResponse.caseId)
            history.push(getPageRoute(4))
        } else {
            history.push(getPageRoute(5))
        }
    }

    render() {
        const { isLoading, recaptchaValid, } = this.state
        const { context: { displayRecaptcha }, history } = this.props
        return (
            <form onSubmit={this.onSubmit}>
                <h1>Fostering Enquiry</h1>
                <h2>Submit you form</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#x27;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                {displayRecaptcha &&
                    <div className="recaptcha">
                        <ReCAPTCHA
                            sitekey="6LfAeSIUAAAAAGsx6tYHz4MIvhP0pSx9Tq7Hf8Yx"
                            onChange={this.onChangeRecaptcha}
                            name="recaptcharesult"
                        />
                    </div>}
                <Button
                    id='submit-your-form'
                    label='Submit'
                    isLoading={isLoading}
                    isValid={recaptchaValid || !displayRecaptcha}
                />
                <Anchor label='Previous' history={history} />
            </form>
        )
    }
}

SubmitForm.propTypes = {
    context: PropTypes.object,
    history: PropTypes.object
}

export default withContext(SubmitForm)