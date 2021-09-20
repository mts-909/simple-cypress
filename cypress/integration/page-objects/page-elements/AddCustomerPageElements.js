///<reference types="Cypress"/>
const loc = require('../../../fixtures/locators.json')

export default class AddCustomerPageElements{
    
    static firsNamefield(){
        return cy.get(loc.addCustomer.firstName)
    }

    static lastNamefield(){
        return cy.get(loc.addCustomer.lastName)
    }

    static postCodefield(){
        return cy.get(loc.addCustomer.postCode)
    }

    static addCustomerBtnTab(){
        return cy.get(loc.addCustomer.addCustomerTab)
    }

    static addCustomerBtn(){
        return cy.get(loc.addCustomer.addCustBtn)
    }
}