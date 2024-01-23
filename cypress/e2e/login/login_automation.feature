Feature: automationexercise.com login
    Scenario: login with right credentials
        Given I am visiting automationexercise.com
        When I fill my login credentials
        Then I should see a login message

    Scenario: login with incorrect credentials
        Given I am visiting automationexercise.com
        When I fill my credentials with incorrect data
        Then I can not login