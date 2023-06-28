/// <reference types="cypress" /> 

import {SampleApp} from "./pages/SampleAppPage"
let sampleApp = new SampleApp

describe('Automation Playground', () => {
  beforeEach('Start Scenario', ()=> {
    cy.visit('http://www.uitestingplayground.com')
  })
  it('Test01: Dynamic ID', () => {
    cy.contains('Dynamic ID').click()
    cy.get('.btn-primary').should('have.text', 'Button with Dynamic ID')
  })

  it('Test02: Class Attribute', () => {
    cy.contains('Class Attribute').click()
    cy.get('.btn-primary').click()
    cy.on('window:alert', (text) => {
      expect(text).to.equal('Primary button pressed')
    });
  })

  it('Test03: Hidden Layers', () => {
    cy.contains('Hidden Layers').click()
    cy.get('#greenButton').click()
    cy.get('#greenButton').should('not.be', 'isClickable()')
  })

  it('Test04: Load Delay', () => {
    cy.contains('Load Delay').click()
    cy.get('.btn-primary').should('have.text', 'Button Appearing After Delay')
  })

  it('Test05: AJAX Data', () => {
    cy.contains('AJAX Data').click()
    cy.get('.btn-primary').click()
    cy.get('.bg-success', {timeout:20000}).should('have.text', 'Data loaded with AJAX get request.')
  })

  it('Test06: Client Side Delay', () => {
    cy.contains('Client Side Delay').click()
    cy.get('.btn-primary').click()
    cy.get('.bg-success', {timeout:20000}).should('have.text', 'Data calculated on the client side.')
  })

  it('Test07: Click', () => {
    cy.contains('Click').click()
    cy.get('.btn-primary').click()
    cy.get('.btn-success').should('exist')
  })

  it('Test08: Text Input', () => {
    cy.contains('Text Input').click()
    cy.get('.form-control').type('KUKU')
    cy.get('.btn-primary').click()
    cy.get('.btn-primary').should('have.text', 'KUKU')
  })

  it('Test09: Scrollbars', () => {
    cy.contains('Scrollbars').click()
    cy.get('.btn-primary').scrollIntoView().click()
  })

  it('Test10: Dynamic Table', () => {
    cy.contains('Dynamic Table').click();
    
    // Locate the Chrome process row
    cy.get('[role="row"]').contains('[role="cell"]', 'Chrome').parents('[role="row"]').as('chromeRow');
    
    // Get the CPU load value for the Chrome process
    cy.contains('span[role="columnheader"]', 'CPU').invoke('index').then((cpuIndex) => {
      cy.get('@chromeRow').find('[role="cell"]').eq(cpuIndex).invoke('text').then((cpuValue) => {      
        // Get the value from the yellow label
        cy.get('.bg-warning').invoke('text').then((expectedValue) => {
          const expected = expectedValue.split(': ')[1];
          //Assert The Answer
          expect(expected.trim()).to.equal(cpuValue.trim());
        });
      });
    });
  });

  it('Test11: Verify Text', () => {
    cy.contains('Verify Text').click()
    cy.xpath("//span[normalize-space(.)='Welcome UserName!']").should('contain' , 'Welcome UserName!')
  })

  it('Test12: Progress Bar', () => {
    cy.contains('Progress Bar').click()
    cy.get('#startButton').click()
    cy.get('#progressBar').contains('75%', {timeout:25000}).should('have.text', '75%')
    cy.get('#stopButton').click()
  })
    
  it('Test13: Visibility', () => {
    cy.contains('Visibility').click()
    cy.get('button').as('buttons')
    cy.get('@buttons').should('be.visible')
    cy.get('.btn-primary').click()
    cy.get('@buttons').should('be.visible')
  })

  it('Test14: Sample App', ()=>{
    cy.contains('Sample App').click()
    //Login Action
    sampleApp.loginAction('Almog81','pwd')
    sampleApp.verifyStatus('Welcome, Almog81!')

    //Logout Action
    sampleApp.logoutAction()
    
    //Fail to login
    sampleApp.loginAction('Almog81','KUKU')
    sampleApp.verifyStatus('Invalid username/password')
  })

  it('Test15: Mouse Over', ()=> {
    cy.contains('Mouse Over').click()
    cy.contains('Click me').click()
    cy.contains('Click me').click()
    cy.get('#clickCount').should('have.text', '2')
  })

  it('Test16: Non-Breaking Space', ()=>{
    cy.contains('Non-Breaking Space').click()
    cy.xpath('//button[text()="My\u00A0Button"]').should('be.visible').click()
    cy.contains('My Button').should('be.visible').click()
  })

  it('Test17: Overlapped Element', ()=>{
    cy.contains('Overlapped Element').click()
    cy.get('#id').type('1234')
    cy.get('#name').scrollIntoView().type('KUKU').should('be.visible')
  })

  it('Test18: Shadow DOM', ()=>{
    cy.contains('Shadow DOM').click()
    cy.get('guid-generator')
      .shadow()
      .find('.button-generate')
      .should('be.enabled')
      .click()
  })
  
});