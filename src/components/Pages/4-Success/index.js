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
  };

  render() {
    const { crmCaseReference, formHeader } = this.props.context

    return (
      <Fragment>
        <section className="header-container">
          <h1>{formHeader}</h1>
          <p className="h2">Thanks for getting in touch</p>        
          <p><strong>Your reference number is:</strong> {crmCaseReference}</p>
        </section>

        <p>
          Please keep this number safe as you&apos;ll need it for the next step.
          You&apos;ll also receive an email with this information.
        </p>
        <h2>What happens next</h2>
        <p>
          We start with a vision in our heart, and we put it on canvas. Maybe,
          just to play a little, we&#39;ll put a little tree here. Everything is
          happy if you choose to make it that way. Let the paint work. Maybe
          there&#39;s a happy little bush that lives right there.
        </p>
        <p>
          See there, told you that would be easy. Let&#39;s build an almighty
          mountain. If you don&#39;t think every day is a good day - try missing
          a few. You&#39;ll see. It&#39;s important to me that you&#39;re happy.
        </p>
        <p>
          <a
            className="button-primary"
            href="https://myaccount.stockport.gov.uk/"
          >
            Find more fostering events
          </a>
        </p>
        <p>
          <a className="button-secondary" href="https://www.stockport.gov.uk/">
            Back to fostering pages
          </a>
        </p>
      </Fragment>
    )
  }
}

Success.propTypes = {
  context: PropTypes.object,
  history: PropTypes.object
}

export default withContext(Success)
