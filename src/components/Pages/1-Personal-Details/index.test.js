import { React, mount} from '../../../helpers/SetupTest'
import { PersonalDetails } from './index'
import { getPageRoute } from '../../../helpers/pagehelper'
import renderer from 'react-test-renderer'

describe('PersonalDetails', () => {
    it('should call push on submit', () => {
        //Arrange
        const data = {
            firstName: {
				value:'Harry',
				isValid: true
			},
			lastName: {
				value:'Potter',
				isValid: true
			},
			dob: {
				value: '1980-07-31 00:00:00',
				isValid: true
            },
            onChange: jest.fn()
        }

        const history = { push: jest.fn() }
		const wrapper = mount(<PersonalDetails context={data} history={history} />)

        //Act
        wrapper.find('form').simulate('submit')


        //Assert
        expect(history.push).toHaveBeenCalledWith(getPageRoute(2))
    })

    describe('snapshot', () => {
		it('should render correctly',() => { 
			// Arrange
			const data = {
                firstName: {
                    value:'Harry',
                    isValid: true
                },
                lastName: {
                    value:'Potter',
                    isValid: true
                },
                dob: {
                    value: '1980-07-31 00:00:00',
                    isValid: true
                },
                onChange: jest.fn()
            }
            const history = {
                push: jest.fn()
            }
		
			// Act
			const tree = renderer
			.create(<PersonalDetails context={data} history={history} />)
			.toJSON()
		
			// Assert
			expect(tree).toMatchSnapshot()
		})
	})
})
