///<reference types="Cypress" />
import Elements from '../page-elements/HomePageElements'

export default class HomePageActions{

    static navigateToURL(){
        cy.visit('/')
    }

    static getPageTitle(){
        return cy.title()
    }

    static clickCusomerLoginBtn(){
        
    }

    static loginAsBankManager(){
        Elements.bankManagerLoginBtn().click()
    }

    static loginAsCustomer(){
        Elements.customerLoginBtn().click()
    }
}