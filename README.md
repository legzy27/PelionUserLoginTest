Set Protactor Cucumber JS


  Pre-Requisites
* Install Java Development Kit.
* Install Node.js (latest version).
* Install Protractor using the below command:

* npm install -g protractor
* cd in /Users/legzy27/armstest
* Type webdriver-manager update and press enter
* Type webdriver-manager start and press enter

* npm install -g cucumber
* npm install --save-dev protractor-cucumber-framework
* npm install expect

* Run the test
* Type protractor protractor.conf.js     




 Negative Test Case
* Use invalid username but valid password.
* Use valid username but invalid password.
* Use both invalid username and password.
* Keep username and password blank.
* Keep username blank and enter the password.
* Enter username but keep password blank.

Explain what measures you will take to make web automation tests robust?

* Plan continuous integration from the start
* Functional tests should always guide the framework design
* Automated functional tests should be written first
* Make sure you create a definition of done for your function; automated tests
* Create page object model for the test framework, it helps to make the code more readable, maintainable and reusable