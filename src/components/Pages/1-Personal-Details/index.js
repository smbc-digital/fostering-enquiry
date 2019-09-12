import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import withContext from '../../WithContext'
import { TextInputContainer, MemorableDateInputContainer, Button } from 'smbc-react-components'
import { getPageRoute } from '../../../helpers/pagehelper'
import moment from 'moment'

export const PersonalDetails = props => {
	const { context, history } = props
	
	const onSubmit = (event) => {
		event.preventDefault()
			history.push(getPageRoute(2))
		}
	

	return (
		<Fragment>
			<form onSubmit={onSubmit}>
				<h1>{context.formHeader}</h1>
				<h2>Tell us about yourself</h2>
				<TextInputContainer onChange={context.onChange} value={context.firstName.value} optional={false} maxLength={35} id='firstName' type='text' label='First name' />
                <TextInputContainer onChange={context.onChange} value={context.lastName.value} optional={false} maxLength={60} id='lastName' type='text' label='Last name' />
				<MemorableDateInputContainer
						heading="Date of birth"
						description="For example, 23 7 1987"
						onChange={context.onChange}
						name="dob"
						optional={false}
						value={context.dob.value}
						customValidation={{
							invalidAfterDate: moment().subtract(21, 'years'),
							customValidationMessage: 'You must be over 21 to complete this form'
						}}
					/>

				<Button label="Next step" isValid={context.firstName.isValid && context.lastName.isValid && context.dob.isValid} />
			</form>
		</Fragment>
	)
}

PersonalDetails.propTypes = {
	context: PropTypes.object,
	history: PropTypes.object
}

export default withContext(PersonalDetails)
