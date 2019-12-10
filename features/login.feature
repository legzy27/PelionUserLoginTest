Feature: Login To Local
    In order to perform successful Login
    As a user
    I want to enter correct username and password

   @dev
   Scenario: In order to access portal user must login 
     Given I go to "https://portal.mbedcloud.com/"
     When user click on login with account.mbed.com
     Then user enter "username" and "password"
     Then user click login button