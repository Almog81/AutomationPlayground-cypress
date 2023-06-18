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

  it.only('Test11: Verify Text', () => {
    cy.contains('Verify Text').click()
    //TODO import XPath for this test 
    cy.xpath("//span[normalize-space(.)='Welcome UserName!']").then((result) => {
      const val = result.text()
      expect("Welcome UserName!").to.equal(val);
    });
  })
    
});