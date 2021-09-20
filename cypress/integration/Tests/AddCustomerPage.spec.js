
import addCustomer from '../page-objects/page-actions/AddCustomerPageActions'
import homePage from '../page-objects/page-actions/HomePageActions'

const data = require('../../fixtures/testdata.json')
describe('Add Customer Page Test Suite', ()=>{
  
    beforeEach(()=>{
        homePage.navigateToURL()
        homePage.loginAsBankManager()
        addCustomer.getURL().should('include',data.addCustomer.bankManagerUrl)

    })
    it('Verify that the "Add Name" form can be sent', ()=>{
        addCustomer.clickAddCustomerTab()
        addCustomer.fillForm(data.addCustomer.fistName,data.addCustomer.lastName,data.addCustomer.postCode)
        addCustomer.addCustomer()
        addCustomer.validateAlert(data.addCustomer.alertMsg)
    })
})