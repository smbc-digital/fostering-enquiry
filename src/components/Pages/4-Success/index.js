import React, { Fragment, Component } from 'react'
import PropTypes from 'prop-types'
import withContext from '../../WithContext'
import showBreadCrumbs from '../../../helpers/breadcrumbHelper'

export class Success extends Component {
	constructor(props) {
		super(props)
		props.history.block()
		props.context
	}

	componentDidMount = () => {
		showBreadCrumbs(true)
	}

	render() {
		const { crmCaseReference, formHeader } = this.props.context

		return (
			<Fragment>
				<section className="header-container">
					<h1>{formHeader}</h1>
					<p className="h2">Thanks for getting in touch</p>
					<p>
						<strong>Your case number is {crmCaseReference}</strong>
					</p>
				</section>
				<section className="body-container">
					<p>Keep this number safe as you might need it if you want to contact us.</p>
					<h2>What happens next</h2>
					<p>
						Our fostering team will call you within 1 to 2 working days. You&#39;ll be able to tell them a bit
						more about yourself and they&#39;ll answer any questions that you might have.
					</p>
					<p>
						To find out more about fostering with us, you can come to one of our open evenings which take place
						each month. Open evenings are a great opportunity to:
					</p>
					<p>
						<ul>
							<li>talk to us and ask questions</li>
							<li>meet our fostering champions</li>
							<li>meet other people who are starting their fostering journey</li>
						</ul>
					</p>
					<p>You can find information about our open evenings using the button below.</p>
					<p>
						<a className="button-primary" href="https://www.stockport.gov.uk/events/?tag=Fostering">
							Find fostering events
						</a>
					</p>
				</section>
			</Fragment>
		)
	}
}

Success.propTypes = {
	context: PropTypes.object,
	history: PropTypes.object
}

export default withContext(Success)
