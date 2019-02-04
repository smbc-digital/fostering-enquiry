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
                <h2>Submit your form</h2>
                <p>Now that you&apos;ve completed the form, use the button below to submit it.</p>
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