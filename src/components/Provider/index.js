import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Context } from '../../context/'

class Provider extends Component{
	constructor(props){
		super(props)
		this.state = {
			firstName: {
				value:'',
				isValid: false
			},
			lastName: {
				value:'',
				isValid: false
			},
			dob: {
				value:'',
				isValid: false
			},
			emailAddress: {
				value:'',
				isValid: false
			},
			phoneNumber: {
				value:'',
				isValid: false
			},
			address: {
				value:'',
				isValid: false
			},
			crmReference: '',
			displayRecaptcha: document.getElementById('displayRecaptcha') != null ? document.getElementById('displayRecaptcha').innerHTML === 'true' ? true : false : false,
			onChange: this.onChange,
			onFormSubmission: this.onFormSubmission
		}
	}
	
	onChange = (event, isValid) => {
		this.setState({
			[event.target.name]: {
				value: event.target.value,
				isValid
			}
		})
	}

	onFormSubmission = (crmReference) => {
		const copyOfState = Object.assign({}, this.state)
		copyOfState.crmCaseReference = crmReference
		
		this.setState(copyOfState)
	}

	render(){
		return <Context.Provider value={ this.state }>{this.props.children}</Context.Provider>
	}
}

Provider.propTypes = {
	history: PropTypes.object,
	context: PropTypes.object,
	children: PropTypes.object,
	mockState: PropTypes.object
}

export default Provider