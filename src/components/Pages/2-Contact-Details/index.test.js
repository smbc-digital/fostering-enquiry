import { React, mount} from '../../../helpers/SetupTest'
import { ContactDetails } from './index'
import { getPageRoute } from '../../../helpers/pagehelper'
import renderer from 'react-test-renderer'

describe('ExamplePage', () => {
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
                value:'Value',
                isValid: true
            },
            onChange: null
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
                    value:'Value',
                    isValid: true
                },
                onChange: null
			}
		
			// Act
			const tree = renderer
			.create(<ContactDetails context={data} />)
			.toJSON()
		
			// Assert
			expect(tree).toMatchSnapshot()
		})
	})
})
