/// <reference types="Cypress" />
const loc = require('../../../fixtures/locators.json')

export default class OpenAccountPageElements{

    static openAccountBtn(){
        return cy.get(loc.openAccount.openAccountBtn)
    }

    static customer(){
        return cy.get(loc.openAccount.customer)
    }

    static currency(){
        return cy.get(loc.openAccount.currency)
    }

    static processBtn(){
        return cy.get(loc.openAccount.processBtn)
    }
}