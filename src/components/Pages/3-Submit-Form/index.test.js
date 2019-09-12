import { React, mount} from '../../../helpers/SetupTest'
import { SubmitForm } from './index'
import * as utilSubmitForm from '../../Util'
import { getPageRoute } from '../../../helpers/pagehelper'
import renderer from 'react-test-renderer'

describe('SubmitForm', () => {

    beforeEach(() => {
        fetch.resetMocks()
    })

	it('should call push on submit with the correct page when response is 200', async () => {

        const context = {
            displayRecaptcha: 'false',
            onFormSubmission: jest.fn()
        }
		const history = { push: jest.fn() }
        utilSubmitForm.default = jest.fn().mockReturnValue({ status: 200, caseId: '12345678' })
    
        const wrapper = mount(<SubmitForm context={context} history={history} />)
    
        // Act
        await wrapper.find('form').simulate('submit')
    
        // Assert
        expect(context.onFormSubmission).toBeCalledWith('12345678')
        expect(history.push).toHaveBeenCalledWith(getPageRoute(4))
    }),

    it('should call push on submit with an error page when reponse is not 200', async () => {
        // Arrange
        const context = {
            displayRecaptcha: 'false',
            onFormSubmission: jest.fn()
        }
        const history = { push: jest.fn() }
        utilSubmitForm.default = jest.fn().mockReturnValue({ status: 400, caseId: '' })

        const wrapper = mount(<SubmitForm context={context} history={history} />)
        
       // Act
		await wrapper.find('form').simulate('submit')

        // Assert
        expect(history.push).toHaveBeenCalledWith(getPageRoute(5))
    })

    it('should not call push on submit when recaptcha is invalid', () => {
        // Arrange
        document.body.innerHTML = '<span id="displayRecaptcha" class="hidden">true</span>'
        const data = {
            displayRecaptcha: true
		}

        let history = { push: jest.fn() }
        let wrapper = mount(<SubmitForm context={data} history={history} />)

        // Act
        wrapper.find('button').simulate('click')

        // Assert
        expect(history.push).not.toBeCalled()
    })

    it('should enable submit button when recaptcha is valid',() => { 

        document.body.innerHTML = '<span id="displayRecaptcha" class="hidden">true</span>'
        // Arrange
		const context = {
            displayRecaptcha: true
        }
        const history = {
            push: jest.fn()
        }

        // Act
        const wrapper = mount(<SubmitForm context={context} history={history} />)

        wrapper.setState({ recaptchaValid: true })

        // Assert
        expect(wrapper.find('button').props().disabled).toBeFalsy()
    })

    it('should enable submit button when displayRecaptcha is false',() => { 

        document.body.innerHTML = '<span id="displayRecaptcha" class="hidden">true</span>'
        // Arrange
		const context = {
            displayRecaptcha: false
        }
        const history = {
            push: jest.fn()
        }

        // Act
        const wrapper = mount(<SubmitForm context={context} history={history} />)

        wrapper.setState({ recaptchaValid: false })

        // Assert
        expect(wrapper.find('button').props().disabled).toBeFalsy()
    })

    it('should set recaptchaValid in state to true', () => {
        // Arrange
        document.body.innerHTML = '<span id="displayRecaptcha" class="hidden">true</span>'
        const data = {
            displayRecaptcha: false,
		}

        let history = { push: jest.fn() }
        let wrapper = mount(<SubmitForm context={data} history={history} />)

        // Act
        wrapper.instance().onChangeRecaptcha('testRecaptchaValue')

        // Assert
        expect(wrapper.state().recaptchaValid).toBe(true)
    })

    it('should set recaptchaValid in state to false', () => {
        // Arrange
        document.body.innerHTML = '<span id="displayRecaptcha" class="hidden">true</span>'
        const data = {
            displayRecaptcha: true,
		}

        let history = { push: jest.fn() }
        let wrapper = mount(<SubmitForm context={data} history={history} />)

        // Act
        wrapper.instance().onChangeRecaptcha(undefined)

        // Assert
        expect(wrapper.state().recaptchaValid).toBe(false)
    })

    describe('snapshot', () => {
        it('renders correctly', () => {
            const context = {
                recaptchaValid: false,
                isLoading: false
            }
            const history = {
                push: jest.fn()
            }
    
            const tree = renderer
                .create(<SubmitForm context={context} history={history} />)
                .toJSON()
            expect(tree).toMatchSnapshot()
        })
    })
})
