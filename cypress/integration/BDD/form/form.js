/// <reference types="cypress" />​
/// <reference types="cypress-iframe" />​
import 'cypress-iframe';
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

// beforeEach( function(){ 
//     cy.fixture('example').then(function(data)
//     {
//         this.data = data
//     })
// });


Given ('I open ProtoCommerce website', function(){
    cy.visit('https://rahulshettyacademy.com/angularpractice/');
}) 

Then ('I filled the form', function(){
    
    cy.get("div[class='form-group'] input[name='name']").type("Khadijat");
    cy.get("input[name='email']").type("muhammadkhadijato@gmail.com");
    cy.get("#exampleInputPassword1").type("khadijat02.");
    cy.get("#exampleCheck1").check();
    cy.get("#exampleFormControlSelect1").select("Female");
    cy.get("#inlineRadio1").check().should('be.checked');
    cy.get("input[name='bday']").type('2000-06-07');
    
})

Then ('I click Submit', function(){
    cy.get("body > app-root > form-comp > div > form").submit();
    // cy.get("input[value='Submit']").click(); //can be used interchangeably with the above
})

Then ('I validate successful submission', function (){
    cy.get(".alert.alert-success").contains("Success! The Form has been submitted successfully!.");
    cy.get("a[aria-label='close']").click();
})