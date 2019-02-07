import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import withContext from '../../WithContext'
import {Button} from 'smbc-react-components'
import { getPageRoute } from '../../../helpers/pagehelper'

export const ErrorPage = ({ history }) => {
    return(
        <Fragment>
            <h1>You can&#39;t start your fostering journey</h1>
            <form onSubmit={event => {
                event.preventDefault()
                history.push(getPageRoute(1))
            }}>
                <fieldset>
                    <h2>Why not?</h2>
                    <p>
                    Follow the lay of the land. It's most important. And that's when it becomes fun - you don't have to spend your time thinking about what's happening - you just let it happen. What the devil. There's not a thing in the world wrong with washing your brush. That's why I paint - because I can create the kind of world I want - and I can make this world as happy as I want it.
                    </p>
                    <Button isValid={true} label="Start again" />
                </fieldset>
            </form>
        </Fragment>
    )
}

ErrorPage.propTypes = {
    context: PropTypes.object,
    history: PropTypes.object
}

export default withContext(ErrorPage)