Feature: Flight Booking QA
 Application regression​
@regression

Scenario: Validatinf the booking the booking Process
    Given I visit the booking website
    When I fill all the necessary fields
    Then I click on Submit
    Then I validate successful booking  