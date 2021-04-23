const actonableItemContent = 'div[class*="actionable-item-content"]'
const openedActionnableItem = 'div[data-open="true"] li[class="item-box active"]'
context('Actions', () => {
    before(() => {
      cy.visit('localhost:8080/#/components/ActionableItem')
    })
    it('Validate Actionnable item without onItemClick Method',() => {
      cy.get(actonableItemContent)
        .eq(0)
        .should('not.have.class', 'cursor-pointer')
    })
    it('Validate dot menu on Actionnable item without onItemClick', () => {
      const stub = cy.stub();
      cy.on('window:alert', stub)
      cy.get(actonableItemContent+' ~ div')
        .eq(0)
        .click()
      cy.get(openedActionnableItem)
        .should('be.visible')
        .click({waitForAnimations: false}).then(() =>{
          expect(stub.getCall(0)).to.be.calledWith('you triggered the first action')
        }) 
    })
    it('Validate Actionnable item with onItemClick Method',() => {
      const stub = cy.stub();
      cy.on('window:alert', stub)
      cy.get(actonableItemContent)
        .eq(1)
        .should('have.class', 'cursor-pointer')
        .click().then(() =>{
          expect(stub.getCall(0)).to.be.calledWith('you triggered the onItemClick method')
      }) 
   })
   it('Validate dot menu on Actionnable item with onItemClick', () => {
      const stub = cy.stub();
      cy.on('window:alert', stub)
      cy.get(actonableItemContent+' ~ div')
        .eq(1)
        .click()
      cy.get(openedActionnableItem)
        .should('be.visible')
        .click({waitForAnimations: false}).then(() =>{
            expect(stub.getCall(0)).to.be.calledWith('you triggered the first action')
        }) 
    })
  })