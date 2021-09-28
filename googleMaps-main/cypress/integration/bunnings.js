describe ('My coding challenge', () =>{
    cy.enterText('[id="searchbox_form"]', value.Bunnings);
    cy.get('[id="searchbox_form', { timeout: 10000 }).should('be.visible');
    cy.enterText(enterLocationInput, '{downarrow}');
    cy.enterText(enterLocationInput, '{enter}');
  }
)