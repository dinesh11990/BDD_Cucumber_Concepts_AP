$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 2,
  "name": "Login",
  "description": "",
  "id": "login",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@SimpleLogin"
    },
    {
      "line": 1,
      "name": "@DataDriven"
    }
  ]
});
formatter.scenario({
  "line": 4,
  "name": "Positive scenario",
  "description": "",
  "id": "login;positive-scenario",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@Positive"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user is on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "the user enters the valid username and password",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "clicks on the login button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "the user should be navigated to home page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.user_is_on_login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginSteps.the_user_enters_the_valid_username_and_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginSteps.clicks_on_the_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginSteps.the_user_should_be_navigated_to_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 11,
  "name": "Negative scenario",
  "description": "",
  "id": "login;negative-scenario",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@Negative"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "user is on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "the user enters the valid username and password",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "clicks on the login button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "the user should be navigated to home page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.user_is_on_login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginSteps.the_user_enters_the_valid_username_and_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginSteps.clicks_on_the_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginSteps.the_user_should_be_navigated_to_home_page()"
});
formatter.result({
  "status": "skipped"
});
});