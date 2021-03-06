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
		return (
			<Fragment>
				<section className="header-container">
					<h1>We&#39;ve received your contact details</h1>
					<p className="h2">Thank you for contacting our fostering team</p>
				</section>
				<section className="body-container">
					<h2>What happens next</h2>
					<p>You will receive our information pack sent from <a href="mailto:fosteringenquiries@stockport.gov.uk">fosteringenquiries@stockport.gov.uk</a> – 
					<strong> please check your junk email</strong> if you do not receive it in your mailbox.</p>
					{/* <p>You&#39;ll receive a confirmation email with a link to our fostering information booklet. </p> */}
					<p>
						Our fostering team will call you within 1 to 2 working days. You&#39;ll be able to tell them a bit
						more about yourself and they&#39;ll answer any questions that you might have.
					</p>
					<h2>Come to a fostering event</h2>
					<p>
						To find out more about fostering with us, you can come to one of our regular information sessions. These are a great opportunity to:
					</p>
					<p>
						<ul>
							<li>talk to us and ask questions</li>
							<li>meet our fostering recruitment team and local foster carers</li>
							<li>meet other people who are starting their fostering journey</li>
						</ul>
					</p>
					<p>Use the button below to find information about our fostering events.</p>
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
