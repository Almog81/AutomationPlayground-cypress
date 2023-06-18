/// <reference types="cypress" /> 

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

  it('Test05: Client Side Delay', () => {
    cy.contains('Client Side Delay').click()
    cy.get('.btn-primary').click()
    cy.get('.bg-success', {timeout:20000}).should('have.text', 'Data calculated on the client side.')
  })

  it('Test06: Click', () => {
    cy.contains('Click').click()
    cy.get('.btn-primary').click()
    cy.get('.btn-success').should('exist')
  })

  it('Test07: Text Input', () => {
    cy.contains('Text Input').click()
    cy.get('.form-control').type('KUKU')
    cy.get('.btn-primary').click()
    cy.get('.btn-primary').should('have.text', 'KUKU')
  })

  it('Test08: Scrollbars', () => {
    cy.contains('Scrollbars').click()
    cy.get('.btn-primary').scrollIntoView().click()
  })

  it.only('Test09: Dynamic Table', () => {
    cy.contains('Dynamic Table').click();
  
    cy.get('.bg-warning')
      .invoke('text')
      .then((text) => {
        const expected = text.split(': ')[1];
        cy.log(expected)
        cy.contains('span[role="columnheader"]', 'CPU')
          .invoke('index')
          .then((x) => {
            cy.log('x = ' + x)
            cy.contains('span[role="cell"]', 'Chrome')
              .invoke('index')
              .then((y) => {
                cy.log('y = ' + y)
                cy.log('x+y = ' + (x+y))
                cy.get('span[role="cell"]').eq(x+y)
                //cy.get(`span[role="cell"]:eq(${y + x})`)
                  .invoke('text')
                  .then((result) => {
                    expect(expected).to.equal(result);
                  });
              });
          });
      });
  });
  

})