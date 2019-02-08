import React, { Fragment } from 'react'
import { AddressPicker, TextInputContainer, Button, Anchor } from 'smbc-react-components'
import PropTypes from 'prop-types'
import withContext from '../../WithContext'
import { getPageRoute } from '../../../helpers/pagehelper'

export const ContactDetails = ({context: {onChange, emailAddress, phoneNumber, address, formHeader}, history}) => {
    return(
        <Fragment>
            <h1>{formHeader}</h1>
            <h2>Your contact information</h2>
            <p>We&#x27;ll use this contact information to get in touch about your enquiry</p>
            <form onSubmit={event => {
                event.preventDefault()
                history.push(getPageRoute(3))
                }}>
                <TextInputContainer
                    label='Email address'
                    value={emailAddress.value}
                    id='emailAddress' 
                    type='email'
                    onChange={onChange}
                />
                <TextInputContainer 
                    label='Phone number'
                    value={phoneNumber.value}
                    id='phoneNumber' 
                    type='tel'
                    onChange={onChange}
                />
                <AddressPicker
                    name={'address'}
                    address={address.value}
                    automaticLabel={'Enter the postcode'}
                    automaticTextLabel={'Select the address below'}
                    useStockportPostcode={true}
                    enableHeading={false}
                    onChange={onChange}
                    useVerintLookup={true}
                    shouldDisplayManualSearch={false}
                    showManualOption={true}
                />
                <Button 
                    isValid={ address.isValid && address.isValid && phoneNumber.isValid && emailAddress.isValid } 
                    label='Next step' 
                />
            </form>
            <Anchor label='Back' history={history} />
        </Fragment>
    )
}

ContactDetails.propTypes = {
	context: PropTypes.object,
    history: PropTypes.object
}

export default withContext(ContactDetails)