Feature: ProtoCommerce website form Validation
 Application regression​
@regression

Scenario: Submit form
    Given I open ProtoCommerce website
    Then I filled the form
    Then I click Submit
    Then I validate successful submission