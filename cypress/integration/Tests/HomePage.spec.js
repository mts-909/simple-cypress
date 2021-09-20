import homePage from '../page-objects/page-actions/HomePageActions'

describe('Test Suite For Home Page', ()=>{
    beforeEach(()=>{
        homePage.navigateToURL()
    })

    it('Validate Title Page', ()=>{
        homePage.getPageTitle().should('be.eq','Protractor practice website - Banking App')
    })

    it('Verify login as Bank Manager', ()=>{
        homePage.loginAsBankManager()
    })
})