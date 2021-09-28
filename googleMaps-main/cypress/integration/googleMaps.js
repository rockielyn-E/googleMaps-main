/// <reference types="cypress" />

describe ('My coding challenge', () =>{
    it('Go to google maps', () => {
      cy.visit ('https://www.google.com/maps/@-37.9074157,145.0445587,11.94z')
    
    //Search Bunnings
    cy.get('input[id="searchboxinput"]').type('Bunnings', {force:true})
    cy.get('[aria-label="Search"]').click({timeout: 10000});
   {
     //Search Bunnings Coburg
     cy.get('a[class="gsst_a"]').click({force: true})
     cy.url().should('be.equal', 'https://www.google.com/maps/@-37.9074157,145.0445587,11.94z')
     cy.wait(5000);

     cy.get('input[id="searchboxinput"]').type('Bunnings Coburg', {force: true})
     cy.get('[aria-label="Search"]').click({force: true})
     cy.wait(5000)
   }
   {
      //Actions for Bunnings Coburg
      cy.get('[aria-label="Actions for Bunnings Coburg"]').click('button.S9kvJb')

  }
})
})