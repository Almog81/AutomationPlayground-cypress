export class MenuPage{
    //Objects
    txt_search = 'input[placeholder=Search]'
    menuItems = '.oxd-main-menu-item'
    pageName = '.oxd-text--h6'

    //Actions
    search(val: string){
        cy.get(this.txt_search).type(val)
    }

    clickInMenu(menuOption: string){
        cy.contains(menuOption).click()
    }
}