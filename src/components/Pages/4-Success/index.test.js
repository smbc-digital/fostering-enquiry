import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { Success } from './index'

Enzyme.configure({ adapter: new Adapter() })

describe('Success',() => { 
	it('should find elements required',() => { 
		// Arrange
		const context = {
			success: {
				value: '',
			}
		}
		const history = { block: jest.fn() }
		const wrapper = mount(<Success context={context} history={history} />)
		// Act

		// Assert
		expect(wrapper.find('h1','h2','p','a').exists()).toBe(true)
	})

	it('should show non triage success page when theres a receipt number',() => { 
		// Arrange
		const context = {
			success: {
				value: '',
			},
			receiptNumber: '1'
		}
		const history = { block: jest.fn() }
		const wrapper = mount(<Success context={context} history={history}/>)

		// Act

		// Assert
		expect(wrapper.find('h3').exists()).toBe(false)
	})
})