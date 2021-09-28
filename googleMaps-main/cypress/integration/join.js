describe ('My coding challenge', () =>{
    it('validationMessage', () => {
        cy.visit('https://app.landchecker.com.au/join')

    //Verify fields are displayed
    cy.get('[data-test="signUpForm-form"]').find('[data-test="signUpForm-firstName"]').should('be.visible').scrollIntoView()
    cy.get('[data-test="signUpForm-form"]').find('[data-test="signUpForm-lastName"]').should('be.visible').scrollIntoView()
    cy.get('[data-test="signUpForm-form"]').find('[data-test="signUpForm-email"]').should('be.visible').scrollIntoView()
    cy.get('[data-test="signUpForm-form"]').find('[data-test="signUpForm-password"]').should('be.visible').scrollIntoView()
    cy.get('[data-test="signUpForm-form"]').find('[data-test="signUpForm-company"]').should('be.visible').scrollIntoView()
    cy.get('[data-test="signUpForm-form"]').find('[data-test="signUpForm-occupation"]').should('be.visible').scrollIntoView()
    cy.get('[data-test="signUpForm-form"]') .find('[data-test="signUpForm-state-NSW"]').should('be.visible').scrollIntoView()
    cy.get('[data-test="signUpForm-form"]').find('[data-test="signUpForm-state-VIC"]').should('be.visible').scrollIntoView()
    cy.get('[data-test="signUpForm-form"]').find('[data-test="signUpForm-state-QLD"]').should('be.visible').scrollIntoView()
    cy.get('[data-test="signUpForm-form"]').find('[data-test="signUpForm-state-TAS"]').should('be.visible').scrollIntoView()
    cy.get('[data-test="signUpForm-form"]').find('[data-test="signUpForm-state-SA"]').should('be.visible').scrollIntoView()
    cy.get('[data-test="signUpForm-form"]').find('[data-test="signUpForm-acceptTerms"]').should('be.visible').scrollIntoView()


    //Click Join without entering values in the fields
        cy.get('span[data-test="submitButton-text').scrollIntoView()
        cy.get('button[type="submit"]').contains('Join').click()
        cy.get('[data-test="signUpForm-form"]').scrollIntoView()
        cy.wait(5000)

    
    //Verify validation messages shown for Required fields
        cy.reload()
        //First Name
        cy.get('[data-test="signUpForm-firstName"]').click()
        cy.focused().click({force: true}).should('be.visible', 'First Name is required')
        
        //Last Name
        cy.get('[data-test="signUpForm-lastName"]').click()
        cy.focused().click({force: true}).should('be.visible', 'Last Name is required')

        //Email Address
        cy.get('[data-test="signUpForm-email"]').click()
        cy.focused().click({force: true}).should('be.visible', 'Email is required')

        //Invalid Email Address
        cy.get('[data-test="signUpForm-email"]').type('test')
        cy.focused().click({force: true}).should('be.visible', 'Invalid email')

        //Choose Password
        cy.get('[data-test="signUpForm-password"]').click()
        cy.focused().click({force: true}).should('be.visible', 'Password is required')

        //Company
        cy.get('[data-test="signUpForm-company"]').click()
        cy.focused().click({force: true})

        //Occupation
        cy.get('[data-test="signUpForm-occupation"]').click({force: true}).should('be.visible', 'Occupation is required')

        //States and Terms of Use
        cy.get('[class="jss429"]').check()
        cy.get('[class="jss429"]').uncheck()
        

    }) 
})
