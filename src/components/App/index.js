import React, { Component } from 'react'
import { Switch, Route } from 'react-router'
import { getPageRoute } from '../../helpers/pagehelper'
import { ErrorPage } from 'smbc-react-components'
// import PersonalDetails from '../Pages/1-Personal-Details'
import ContactDetails from '../Pages/2-Contact-Details'
import SubmitForm from '../Pages/3-Submit-Form'

class App extends Component {
    render() {
        return (
            <Switch>
                {/* <Route exact path={getPageRoute(1)} component={ PersonalDetails } /> */}
                <Route exact path={getPageRoute(2)} component={ ContactDetails } />
                <Route exact path={getPageRoute(3)} component={ SubmitForm } />
                <Route exact path="/error" component={ ErrorPage } />
            </Switch>
        )
    }
}

export default App