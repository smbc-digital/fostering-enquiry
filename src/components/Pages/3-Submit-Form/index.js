import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import withContext from '../../WithContext'

export const SubmitForm = ({context: {onFormSubmission, crmReference}, history}) => {
    return(
        <Fragment>
            <h1>Fostering Enquiry</h1>
        </Fragment>
    )
}

SubmitForm.propTypes = {
	context: PropTypes.object,
    history: PropTypes.object
}

export default withContext(SubmitForm)