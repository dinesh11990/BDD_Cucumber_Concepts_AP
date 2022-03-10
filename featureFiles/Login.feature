@SimpleLogin @DataDriven
Feature: Login
@Positive
Scenario: Positive scenario
Given user is on login page
When the user enters the valid username and password
And clicks on the login button
Then the user should be navigated to home page

@Negative
Scenario: Negative scenario
Given user is on login page
When the user enters the valid username and password
And clicks on the login button
Then the user should be navigated to home page
