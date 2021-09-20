///<reference types="Cypress" />

import openAccount from '../page-objects/page-actions/OpenAccountPageActions'
import homePage from '../page-objects/page-actions/HomePageActions'

const data = require('../../fixtures/testdata.json')

describe('Open Account Test Suite', ()=>{
    beforeEach(()=>{
        homePage.navigateToURL()
        homePage.loginAsBankManager()
    })

    it('Verify that an account can be created', () =>{
        openAccount.clickOpenAccountBtn()
        openAccount.selectCustomer(data.openAccount.customer)
        openAccount.selectCurrency(data.openAccount.currency)
        openAccount.clickProcessBtn()
        openAccount.validateAlert(data.openAccount.alertMsg)
    })
})