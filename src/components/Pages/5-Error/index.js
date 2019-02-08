import React from 'react'
import PropTypes from 'prop-types'
import withContext from '../../WithContext'
import { ErrorPage } from 'smbc-react-components'

export const FailurePage = ({ history, context }) => {
    return(
        <ErrorPage 
            title={context.formHeader}
            link={{
                location: '/',
                text: 'Start again' 
            }}
            history={history}
        />
    )
}

FailurePage.propTypes = {
    context: PropTypes.object,
    history: PropTypes.object
}

export default withContext(FailurePage)
