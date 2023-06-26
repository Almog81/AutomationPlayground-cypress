export class LoginPage{
    //Objects
    txt_userName = 'input[name=username]'
    txt_userPaswwors = 'input[name=password]'
    btn_login = '.oxd-button'
    alrt_massage = '.oxd-alert'
    
    //Actions
    navigate(url: string){
        cy.visit(url)
    }

    loginAction(name: string,pass: string){
        cy.get(this.txt_userName).type(name)
        cy.get(this.txt_userPaswwors).type(pass)
        cy.get(this.btn_login).click()
    }

    verifyAlertMessage(massage: string){
        cy.get(this.alrt_massage).should('have.text', massage)
    }

}