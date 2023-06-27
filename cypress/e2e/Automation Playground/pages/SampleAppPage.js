export class SampleApp{
    //Objects
    txt_userName = 'input[name="UserName"]'
    txt_userPaswwors = 'input[name="Password"]'
    btn_login = '.btn-primary'
    login_Status = '#loginstatus'
    
    //Actions
    loginAction(name,pass){
        cy.get(this.txt_userName).type(name)
        cy.get(this.txt_userPaswwors).type(pass)
        cy.get(this.btn_login).click()
    }

    verifyStatus(massage){
        cy.get(this.login_Status).should('have.text', massage)
    }

    logoutAction(){
        cy.get(this.btn_login).should('have.text', 'Log Out').click()
        this.verifyStatus('User logged out.')
    }

}