Feature: Flight Booking QA
 Application regression​
@regression

Scenario: Validating the booking the booking Process
    Given I visit the booking website
    When I fill all the necessary fields
    Then I click on Submit
    