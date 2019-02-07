import { React, mount} from '../../../helpers/SetupTest'
import { ErrorPage } from './index'
import { getPageRoute } from '../../../helpers/pagehelper'
import renderer from 'react-test-renderer'

describe('ErrorPage', () => {
    it('should call push on submit', () => {
        //Arrange
        const history = { push: jest.fn() }
		const wrapper = mount(<ErrorPage history={history} />)

        //Act
        wrapper.find('form').simulate('submit')

        //Assert
        expect(history.push).toHaveBeenCalledWith(getPageRoute(1))
    })

    describe('snapshot', () => {
		it('should render correctly',() => { 
			// Act
			const tree = renderer
			.create(<ErrorPage />)
			.toJSON()
		
			// Assert
			expect(tree).toMatchSnapshot()
		})
	})
})
