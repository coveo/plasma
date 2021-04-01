/// <reference types="cypress" />
context('Actions', () => {
  before(() => {
	  cy.visit('http://192.168.0.168:8080//#/components/Checkbox')
  })
	it('Validate checkbox is checked', ()=>{
		cy.get('#checkbox1').should('not.be.checked')
		cy.get('#checkbox1 ~ button').click()
		cy.get('#checkbox1').should('be.checked')
	});
	it('Validate forced unchecked checkbox',()=> {
		cy.get('#checkbox5').should('not.be.checked')
		cy.get('#checkbox5 ~ button').click()
		cy.get('#checkbox5').should('not.be.checked')
	});
	it('Validate checkbox with dirty managment', () => {
		// 1:unchecked, 2:checked
		cy.get('#checkbox-dirty').should('not.be.checked');
		cy.get('div[class="labeled-input"]')
		.eq(1)
		.find('button[class="btn"]').should('not.exist')

		// 1:checked, 2:checked
		cy.get('#checkbox-dirty ~ button').click();
		cy.get('div[class="labeled-input"]')
		.eq(1)
		.find('button[class="btn"]').should('exist');

		// 1:checked, 2:unchecked
		cy.get('#checkbox-dirty-true ~ button').click();
		cy.get('div[class="labeled-input"]')
		.eq(1)
		.find('button[class="btn"]').should('exist');

		// 1:unchecked, 2:unchecked
		cy.get('#checkbox-dirty ~ button').click();
		cy.get('div[class="labeled-input"]')
		.eq(1)
		.find('button[class="btn"]').should('exist');
	});
	it('Validate groupable checkbox',() => {
		cy.get('#parentId1').should('not.be.checked');
		cy.get('#parentId11 ~ button').click();
		cy.get('#parentId13 ~ button').click();
		cy.get('#parentId1').should('not.be.checked');
		cy.get('#parentId1 ~ button').click();
		cy.get('#parentId11').should('be.checked')
		cy.get('#parentId12').should('be.checked')
		cy.get('#parentId13').should('be.checked')
		cy.get('#parentId14').should('be.checked')
		cy.get('#parentId11 ~ button').click();
		cy.get('#parentId1').should('not.be.checked');
		cy.get('#parentId11 ~ button').click();
		cy.get('#parentId1 ~ button').click();
		cy.get('#parentId11').should('not.be.checked')
		cy.get('#parentId12').should('not.be.checked')
		cy.get('#parentId13').should('not.be.checked')
		cy.get('#parentId14').should('not.be.checked')
	});
	it('validate toggleable checkbox',()=> {
		cy.get('#parentId2').should('be.disabled')
		cy.get('#parentId21').should('be.disabled')
		cy.get('#parentId22').should('be.disabled')
		cy.get('#parentId23').should('be.disabled')
		cy.get('#parentId24').should('be.disabled')
		cy.get('div[class="labeled-input"]')
		.eq(4)
		.find('button[class="btn"]').click()
		cy.get('#parentId2').should('not.be.disabled')
		cy.get('#parentId21').should('not.be.disabled')
		cy.get('#parentId22').should('not.be.disabled')
		cy.get('#parentId23').should('not.be.disabled')
		cy.get('#parentId24').should('not.be.disabled')
	});
})