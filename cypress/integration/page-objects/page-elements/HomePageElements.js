///<reference types="Cypress"/>
const loc = require('../../../fixtures/locators.json')
export default class HomePageElements{
    static customerLoginBtn(){
        return cy.get(loc.homepage.customerLoginBtn)
    }

    static bankManagerLoginBtn(){
        return cy.get(loc.homepage.bankManagerLoginBtn)
    }
}