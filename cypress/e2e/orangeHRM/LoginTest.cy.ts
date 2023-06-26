
import {LoginPage} from "./pages/loginPage"
import {MenuPage} from "./pages/menuPage"

let loginPage = new LoginPage()
let menuPage = new MenuPage()

describe('Login Test', () => {
    beforeEach('Stat Senerio', ()=> {
        loginPage.navigate('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    })
    it('Successfully login', () => {
        loginPage.loginAction('admin', 'admin123')
        cy.get(menuPage.pageName).should('contain', 'Dashboard')
    })

    it('Fail to login', () => {
        loginPage.loginAction('kuku', 'LOLO')
        loginPage.verifyAlertMessage('Invalid credentials')
    })

})
