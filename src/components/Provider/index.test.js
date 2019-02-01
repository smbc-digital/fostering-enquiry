import { React, mount} from '../../helpers/SetupTest'
import Provider from '../Provider'

describe('Provider', () => {
    it('should create the base state with objects', () => {
        //Arrange
        const wrapper = mount(<Provider></Provider>)

        //Assert
        expect(wrapper.state()).not.toBeNull()
        expect(wrapper.state().firstName).not.toBeNull()
        expect(wrapper.state().lastName).not.toBeNull()
        expect(wrapper.state().dob).not.toBeNull()
        expect(wrapper.state().emailAddress).not.toBeNull()
        expect(wrapper.state().phoneNumber).not.toBeNull()
        expect(wrapper.state().address).not.toBeNull()
        expect(wrapper.state().displayRecaptcha).not.toBeNull()
        expect(wrapper.state().crmReference).not.toBeNull()
        expect(wrapper.state().onchange).not.toBeNull()
        expect(wrapper.state().onFormSubmission).not.toBeNull()
    })

    it('should update state when on change is triggered', () => {
        // Arrange
        const wrapper = mount(<Provider></Provider>)
        const event = {
            target : {
                name : 'firstName',
                value : 'testValue'
            }
        }
        //Act
        wrapper.state().onChange(event, true)

        //Assert
        expect(wrapper.state().firstName.value).toEqual('testValue')
        expect(wrapper.state().firstName.isValid).toBeTruthy()
    })

    it('should update case reference onFormSubmission', () =>{
        //Arrange
        const wrapper = mount(<Provider></Provider>)
        const caseReference = '123456'

        //Act
        wrapper.state().onFormSubmission(caseReference)

        //Assert
        expect(wrapper.state().crmCaseReference).toEqual(caseReference)
            
    })

    it('should set displayRecaptcha in state to be false when displayRecaptcha span null',() => { 
        // Arrange
        const wrapper = mount(<Provider></Provider>)
        // Assert
        expect(wrapper.state().displayRecaptcha).toBeFalsy()
    })

    it('should set displayRecaptcha in state to be true when enabled',() => { 
        // Arrange
        document.body.innerHTML = '<span id="displayRecaptcha" class="hidden">true</span>'
        const wrapper = mount(<Provider></Provider>)
        
        // Assert
        expect(wrapper.state().displayRecaptcha).toBeTruthy()
    })

    it('should set displayRecaptcha in state to be false when disabled',() => { 
        // Arrange
        document.body.innerHTML = '<span id="displayRecaptcha" class="hidden">false</span>'
        const wrapper = mount(<Provider></Provider>)
        
        // Assert
        expect(wrapper.state().displayRecaptcha).toBeFalsy()
    })
})