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
    // Input Country location
    cy.get('#autosuggest').type("India")

    // Selects Trip type: Rount Trip
    cy.get("#ctl00_mainContent_rbtnl_Trip_1").check();

    // Selects depature state/location
    cy.get("#ctl00_mainContent_ddl_originStation1_CTXT").click();
    // Select depature city  
    cy.get(":nth-child(1) > :nth-child(11) > a").click(0, 0)

    // Select destination state/location
    cy.get("#ctl00_mainContent_ddl_destinationStation1_CTXT").click();
    // Select destination city
    cy.get("#glsctl00_mainContent_ddl_destinationStation1_CTNR > #citydropdown > tbody > :nth-child(2) > .mapbg > .search_options_menucontent > #dropdownGroup1 > .dropdownDiv > :nth-child(4) > :nth-child(4) > a").click(0, 0)
    
    // Select Depature Date
    cy.wait(3000);
    cy.get("#ctl00_mainContent_view_date1").click();
    cy.get(".ui-datepicker-days-cell-over > .ui-state-default").click(0, 0);
    cy.get("#view_fulldate_id_1").should("contains.text", "Thu, Aug 22 2024");
    // const currentDate = new Date();
    // cy.get("#view_fulldate_id_1", {force: true} ).find( `${currentDate}`).select();
   
    // Select Return Date
    cy.wait(3000);
    cy.get("#ctl00_mainContent_view_date2").click();
    cy.get("#view_fulldate_id_2").contains("15").click();
    // cy.get('#view_fulldate_id_2', { timeout: 10000 }).should('contain.text', 'Wed, Jul 31 2024');

    cy.get("#divpaxinfo").click();
    
    cy.get("#ctl00_mainContent_DropDownListCurrency").select("USD");

    cy.get("#ctl00_mainContent_chk_StudentDiscount").check();
})
    
Then ('I click on Submit', function(){
    cy.get("#ctl00_mainContent_btn_FindFlights").click();

    // can also be used for submitting the form
    // cy.get("#aspnetForm").submit();      
})
