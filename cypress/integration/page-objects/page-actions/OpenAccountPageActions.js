///<reference types="Cypress" />

import Elements from '../page-elements/OpenAccountPageElement'

export default class OpenAccountPageActions{

    static clickOpenAccountBtn(){
        Elements.openAccountBtn().click()
    }

    static selectCustomer(value){
        Elements.customer().select(value)
    }

    static selectCurrency(value){
        Elements.currency().select(value)
    }

    static clickProcessBtn(){
        Elements.processBtn().click()
    }

    static validateAlert(Msg){
        cy.on('window:alert', (alertText) =>{
            expect(alertText).contain(Msg)
        })
    }
}