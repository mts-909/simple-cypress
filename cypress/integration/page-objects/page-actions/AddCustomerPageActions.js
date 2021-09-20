///<reference types="Cypress"/>
import Elements from '../page-elements/AddCustomerPageElements'

export default class AddCustomerPageActions{

    static fillForm(firstName,lastName,postCode){
        Elements.firsNamefield().type(firstName)
        Elements.lastNamefield().type(lastName)
        Elements.postCodefield().type(postCode)
    }

    static addCustomer(){
        Elements.addCustomerBtn().click()
    }

    static clickAddCustomerTab(){
        Elements.addCustomerBtnTab().click()
    }

    static getURL(){
        return cy.url()
    }

    static validateAlert(Msg){
        cy.on('window:alert',(alertText)=>{
            expect(alertText).contains(Msg)
        })
    }

}