/// <reference types="cypress" />​
/// <reference types="cypress-iframe" />​
import 'cypress-iframe';
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given ('I visit the booking website', function(){
    cy.visit("")
         .scrollIntoView
})
    
When ('I fill all the necessary fields', function(){
    cy.get("")
    cy.get("")
    cy.get("")
    cy.get("")
    cy.get("")
    cy.get("")
})
    
Then ('I click on Submit', function(){

})

Then ('I validate successful booking', function (){

})  