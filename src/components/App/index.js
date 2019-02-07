import React, { Component } from 'react'
import { Switch, Route } from 'react-router'
import { getPageRoute } from '../../helpers/pagehelper'
import PersonalDetails from '../Pages/1-Personal-Details'
import ContactDetails from '../Pages/2-Contact-Details'
import SubmitForm from '../Pages/3-Submit-Form'
import Success from '../Pages/4-Success'
import FailurePage from '../Pages/5-Error'

class App extends Component {
    render() {
        return (
            <Switch>
                <Route exact path={getPageRoute(1)} component={ PersonalDetails } />
                <Route exact path={getPageRoute(2)} component={ ContactDetails } />
                <Route exact path={getPageRoute(3)} component={ SubmitForm } />
                <Route exact path={getPageRoute(4)} component={ Success } />
                <Route exact path={getPageRoute(5)} component={ FailurePage } />
            </Switch>
        )
    }
}

export default App