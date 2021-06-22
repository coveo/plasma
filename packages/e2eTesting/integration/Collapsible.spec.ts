const CollapsibleInfoBox = 'div[class="cursor-pointer flex space-between center-align p1"]';
const CollapsibleContainer = 'div[class*="collapsible-container"]';

context('Actions', () => {
    before(() => {
        cy.visit('localhost:8080/#/components/Collapsible');
    });
    it('Validate Collapsible Header', () => {
        let collapsibleHeader = 'div[class="cursor-pointer flex space-between center-align"]';
        cy.get(collapsibleHeader + ' ~ div')
            .should('have.class', 'slide-y-closed')
            .should('not.be.visible');
        cy.get(collapsibleHeader).click();
        cy.get(collapsibleHeader + ' ~ div[class="slide-y"]').should('be.visible');
        cy.get(collapsibleHeader).click();
        cy.get(collapsibleHeader + ' ~ div')
            .should('have.class', 'slide-y-closed')
            .should('not.be.visible');
    });
    it('Validate Collapsible information box', () => {
        cy.get(CollapsibleInfoBox + ' ~ div')
            .eq(0)
            .should('have.class', 'slide-y-closed')
            .should('not.be.visible');
        cy.get(CollapsibleInfoBox)
            .eq(0)
            .find('div[class="inline-flex"]')
            .find('span')
            .should('have.class', 'icon')
            .click();
        cy.get(CollapsibleInfoBox + ' ~ div[class="slide-y"]')
            .eq(0)
            .should('be.visible');
        cy.get(CollapsibleInfoBox).eq(0).click();
        cy.get(CollapsibleInfoBox + ' ~ div')
            .should('have.class', 'slide-y-closed')
            .should('not.be.visible');
    });
    it('Validate collapsible information box for a page section', () => {
        cy.get(CollapsibleInfoBox + ' ~ div')
            .eq(1)
            .should('have.class', 'slide-y-closed')
            .should('not.be.visible');
        cy.get(CollapsibleInfoBox).eq(1).click();
        cy.get(CollapsibleInfoBox + ' ~ div[class="slide-y"]').should('be.visible');
        cy.get(CollapsibleInfoBox).eq(1).click();
        cy.get(CollapsibleInfoBox + ' ~ div')
            .eq(1)
            .should('have.class', 'slide-y-closed')
            .should('not.be.visible');
    });
    it('Validate collapsible information box for a page section with additionnal information', () => {
        cy.get(CollapsibleInfoBox + ' ~ div')
            .eq(2)
            .should('have.class', 'slide-y-closed')
            .should('not.be.visible');
        cy.get(CollapsibleInfoBox).eq(2).click();
        cy.get(CollapsibleInfoBox + ' ~ div[class="slide-y"]', {timeout: 4000}).should('be.visible');
        cy.get(CollapsibleInfoBox).eq(2).click();
        cy.get(CollapsibleInfoBox + ' ~ div')
            .eq(2)
            .should('have.class', 'slide-y-closed')
            .should('not.be.visible');
    });
    it('Validate collapsable container opened on mount', () => {
        cy.get(CollapsibleContainer + ' div[class*="slide-y"]')
            .eq(0)
            .should('not.have.class', 'slide-y-closed')
            .should('be.visible');
        cy.get(CollapsibleContainer + ' div')
            .eq(0)
            .click();
        cy.get(CollapsibleContainer + ' div[class*="slide-y"]')
            .eq(0)
            .should('have.class', 'slide-y-closed')
            .should('not.be.visible');
    });
    it('Validate collapsable container with custom icon', () => {
        cy.get(CollapsibleContainer + ' div[class*="slide-y"]')
            .eq(1)
            .should('have.class', 'slide-y-closed')
            .should('not.be.visible');
        cy.get(CollapsibleContainer + ' div[class*="cursor-pointer"]')
            .eq(1)
            .click();
        cy.get(CollapsibleContainer + ' div[class*="slide-y"]')
            .eq(1)
            .should('not.have.class', 'slide-y-closed')
            .should('be.visible');
        cy.get(CollapsibleContainer + ' div[class*="cursor-pointer"]')
            .eq(1)
            .click();
        cy.get(CollapsibleContainer + ' div[class*="slide-y"]')
            .eq(1)
            .should('have.class', 'slide-y-closed')
            .should('not.be.visible');
    });
    it('Validate disabled collapsible', () => {
        cy.get(CollapsibleContainer + ' div[class*="slide-y"]')
            .eq(2)
            .should('have.class', 'slide-y-closed')
            .should('not.be.visible');
        cy.get(CollapsibleContainer + ' div[class*="cursor-pointer"]')
            .eq(2)
            .click();
        cy.get(CollapsibleContainer + ' div[class*="slide-y"]')
            .eq(2)
            .should('have.class', 'slide-y-closed')
            .should('not.be.visible');
    });
    it('Validate collapsible container closed on mount', () => {
        cy.get(CollapsibleContainer + ' div[class*="slide-y"]')
            .eq(3)
            .should('have.class', 'slide-y-closed')
            .should('not.be.visible');
        cy.get(CollapsibleContainer + ' div[class*="cursor-pointer"]')
            .eq(3)
            .click();
        cy.get(CollapsibleContainer + ' div[class*="slide-y"]')
            .eq(3)
            .should('not.have.class', 'slide-y-closed')
            .should('be.visible');
        cy.get(CollapsibleContainer + ' div[class*="cursor-pointer"]')
            .eq(3)
            .click();
        cy.get(CollapsibleContainer + ' div[class*="slide-y"]')
            .eq(3)
            .should('have.class', 'slide-y-closed')
            .should('not.be.visible');
    });
    it('Validate Toggle collapsible', () => {
        cy.get(CollapsibleContainer + ' div[class*="slide-y"]')
            .eq(4)
            .should('have.class', 'slide-y-closed')
            .should('not.be.visible');
        cy.get('button[class="btn mod-small"]').click();
        cy.get(CollapsibleContainer + ' div[class*="slide-y"]')
            .eq(4)
            .should('not.have.class', 'slide-y-closed')
            .should('be.visible');
        cy.get(CollapsibleContainer + ' div[class*="cursor-pointer"]')
            .eq(4)
            .click();
        cy.get(CollapsibleContainer + ' div[class*="slide-y"]')
            .eq(4)
            .should('have.class', 'slide-y-closed')
            .should('not.be.visible');
    });
    it('Validate Collapsible container with json editor', () => {
        cy.get(CollapsibleContainer + ' div[class*="slide-y"]')
            .eq(5)
            .should('have.class', 'slide-y-closed')
            .should('not.be.visible');
        cy.get(CollapsibleContainer + ' div[class*="cursor-pointer"]')
            .eq(5)
            .click();
        cy.get(CollapsibleContainer + ' div[class*="slide-y"]')
            .eq(5)
            .should('not.have.class', 'slide-y-closed')
            .should('be.visible');
    });
});
