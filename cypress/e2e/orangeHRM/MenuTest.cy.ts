import {LoginPage} from "./pages/loginPage"
import {MenuPage} from "./pages/menuPage"

let loginPage = new LoginPage()
let menuPage = new MenuPage()

describe('Action Test', () => {

  beforeEach(() => {
    loginPage.navigate('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    loginPage.loginAction('admin','admin123')
  })

  it('Goto PIM page', () => {
    menuPage.clickInMenu('PIM')
    cy.get(menuPage.pageName).should('contain', 'PIM')
    })
  
    it('Serch for Page', () => {
      menuPage.search('buzz')
      cy.get(menuPage.menuItems).should('contain', 'Buzz')
    })
    it('Serch for non exsit valeu', () => {
      menuPage.search('KUKU')
      cy.get(menuPage.menuItems).should('not.exist')
    })
})
