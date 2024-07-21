/// <reference types="cypress" />​
/// <reference types="cypress-iframe" />​
import 'cypress-iframe';
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";


Cypress.on('uncaught:exception', (err, runnable) => {
    // Check if the error is the one you want to ignore
    if (err.message.includes('Sys is not defined')) {
        // Return false to prevent Cypress from failing the test
        return false;
    }
    // Let other errors still fail the test
    return true;
});


Given ('I visit the booking website', function(){
    cy.visit("https://rahulshettyacademy.com/dropdownsPractise/")
})
    
When ('I fill all the necessary fields', function(){
    cy.get('#autosuggest').type("India")
    cy.get("#ctl00_mainContent_rbtnl_Trip_1").check();

    cy.get("#ctl00_mainContent_ddl_originStation1_CTXT").click();
    cy.get(":nth-child(1) > :nth-child(11) > a").click(0, 0)


    cy.get("#ctl00_mainContent_ddl_destinationStation1_CTXT").click();
    cy.get("#glsctl00_mainContent_ddl_destinationStation1_CTNR > #citydropdown > tbody > :nth-child(2) > .mapbg > .search_options_menucontent > #dropdownGroup1 > .dropdownDiv > :nth-child(4) > :nth-child(4) > a").click(0, 0)
    
    cy.wait(3000)
    cy.get("#ctl00_mainContent_view_date1").click();
    cy.get(":nth-child(4) > :nth-child(1) > .ui-state-default").click(0, 0)
    cy.get("#view_fulldate_id_1").should("contains.text", "Sun, Jul 21 2024")
   
    cy.wait(3000)
    cy.get("#ctl00_mainContent_view_date2").click();
    cy.get(":nth-child(5) > :nth-child(4) > .ui-state-default").click();
        
    // cy.get("#view_fulldate_id_2").should("contains.text", "Wed, Jul 31 2024")
    cy.get('#view_fulldate_id_2', { timeout: 10000 }).should('contain.text', 'Wed, Jul 31 2024');

    cy.get("#divpaxinfo").click();
    
    cy.get("#ctl00_mainContent_DropDownListCurrency").select("USD");

    cy.get("#ctl00_mainContent_chk_StudentDiscount").check();
})
    
Then ('I click on Submit', function(){
    cy.get("#ctl00_mainContent_btn_FindFlights").click();

    //submitting the form
    // cy.get("#aspnetForm").submit();      
})
