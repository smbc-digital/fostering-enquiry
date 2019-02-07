import { React } from '../../../helpers/SetupTest'
import { FailurePage } from './index'
import renderer from 'react-test-renderer'

describe('FailurePage', () => {
    describe('snapshot', () => {
		it('should render correctly',() => { 
			// Arrange
			const history = { block: jest.fn() }

			// Act
			const tree = renderer
			.create(<FailurePage history={history} />)
			.toJSON()
		
			// Assert
			expect(tree).toMatchSnapshot()
		})
	})
})
