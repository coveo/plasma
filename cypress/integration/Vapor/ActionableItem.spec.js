/// <reference types="cypress" />

context('Actions', () => {
  before(() => {
    cy.visit('http://192.168.0.143:8080/#/components/ActionableItem')
  })
  it('Validate Actionnable item without onItemClick Method',() => {
    cy.get('#actionable-item-1 div[class*="actionable-item-content"]')
      .should('not.have.class', 'cursor-pointer')
  })
  it('Validate dot menu on Actionnable item without onItemClick', () => {
    const stub = cy.stub();
    cy.on('window:alert', stub)
    cy.get('#actionable-item-1 div[class*="actionable-item-dots"]')
      .click()
    cy.get('div[data-open="true"] li[class="item-box active"]')
      .should('be.visible')
      .click({waitForAnimations: false}).then(() =>{
        expect(stub.getCall(0)).to.be.calledWith('you triggered the first action')
      }) 
  })
  it('Validate Actionnable item with onItemClick Method',() => {
    const stub = cy.stub();
    cy.on('window:alert', stub)
    cy.get('#actionable-item-2 div[class*="actionable-item-content"]')
      .should('have.class', 'cursor-pointer')
      .click().then(() =>{
        expect(stub.getCall(0)).to.be.calledWith('you triggered the onItemClick method')
    }) 
 })
 it('Validate dot menu on Actionnable item with onItemClick', () => {
    const stub = cy.stub();
    cy.on('window:alert', stub)
    cy.get('#actionable-item-2 div[class*="actionable-item-dots"]')
      .click()

    cy.get('div[data-open="true"] li[class="item-box active"]')
      .should('be.visible')
      .click({waitForAnimations: false}).then(() =>{
          expect(stub.getCall(0)).to.be.calledWith('you triggered the first action')
      }) 
  })
})
