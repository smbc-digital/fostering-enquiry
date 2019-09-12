import { React, mount} from '../../../helpers/SetupTest'
import { ContactDetails } from './index'
import { getPageRoute } from '../../../helpers/pagehelper'
import renderer from 'react-test-renderer'

describe('ContactDetails', () => {
    it('should call push on submit', () => {
        //Arrange
        const data = {
            emailAddress: {
                value:'Value',
                isValid: true
            },
            phoneNumber: {
                value:'Value',
                isValid: true
            },
            address: {
                value: {},
                isValid: true
            },
            onChange: jest.fn()
        }

        const history = { push: jest.fn() }
		const wrapper = mount(<ContactDetails context={data} history={history} />)

        //Act
        wrapper.find('form').simulate('submit')


        //Assert
        expect(history.push).toHaveBeenCalledWith(getPageRoute(3))
    })

    describe('snapshot', () => {
		it('should render correctly',() => { 
			// Arrange
			const data = {
                emailAddress: {
                    value:'Value',
                    isValid: true
                },
                phoneNumber: {
                    value:'Value',
                    isValid: true
                },
                address: {
                    value: {},
                    isValid: true
                },
                onChange: jest.fn()
            }
            const history = {
                push: jest.fn()
            }
		
			// Act
			const tree = renderer
			.create(<ContactDetails context={data} history={history} />)
			.toJSON()
		
			// Assert
			expect(tree).toMatchSnapshot()
		})
	})
})
