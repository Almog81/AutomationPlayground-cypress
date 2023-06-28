# Cypress-Projects

This project contains automated test scenarios for the Automation Playground website and OrangeHRM using Cypress. The tests for Automation Playground cover various scenarios, while the tests for OrangeHRM utilize the Page Object pattern.

## Description

The Cypress-Projects repository contains automated test scenarios for two different applications:

1. **Automation Playground**: This section includes test cases for various scenarios on the [Automation Playground website](http://www.uitestingplayground.com). The tests cover dynamic IDs, class attributes, hidden layers, load delays, AJAX data, client-side delay, click interactions, text input, scrollbars, dynamic tables, text verification, progress bar, visibility, mouse over, non-breaking space, overlapped element, and shadow DOM.


2. **OrangeHRM**: This section utilizes the Page Object pattern to automate test scenarios for the OrangeHRM application. The tests are organized into two files:

- **LoginTest.cy.ts**: This file contains tests related to the login functionality of OrangeHRM. The scenarios covered are:
  - Successfully login: Verifies that a user can successfully log in using valid credentials.
  - Fail to login: Verifies the error message when attempting to log in with invalid credentials.

- **MenuTest.cy.ts**: This file contains tests related to menu actions and navigation within OrangeHRM. The scenarios covered are:
  - Go to PIM page: Verifies that the user can navigate to the PIM page from the menu and confirms the page name.
  - Search for a page: Verifies that the search functionality correctly displays the expected page in the menu.
  - Search for a non-existing value: Verifies that searching for a non-existing value in the menu does not display any results.

## Project Structure

The project is organized as follows:

- `[cypress/](https://github.com/Almog81/Cypress-Projects/tree/main/cypress/)`
  - `[fixtures/](https://github.com/Almog81/Cypress-Projects/tree/main/cypress/fixtures/)`
    - Contains test data files if needed.
  - `[e2e/](https://github.com/Almog81/Cypress-Projects/tree/main/cypress/e2e/)`
    - `[Automation Playground/](https://github.com/Almog81/Cypress-Projects/tree/main/cypress/e2e/Automation Playground/)`
      - Contains the test files for Automation Playground scenarios.
          - `[pages/](https://github.com/Almog81/Cypress-Projects/tree/main/cypress/e2e/Automation Playground/pages/)`
            - Contains Page Object classes for Automation Playground.
    - `[orangeHRM/](https://github.com/Almog81/Cypress-Projects/tree/main/cypress/e2e/orangeHRM/)`
      - Contains the test files for OrangeHRM scenarios.
        - `[pages/](https://github.com/Almog81/Cypress-Projects/tree/main/cypress/e2e/orangeHRM/pages/)`
            - Contains Page Object classes for OrangeHRM.
  - `[support/](https://github.com/Almog81/Cypress-Projects/tree/main/cypress/support/)`
    - Contains utility files, custom commands, and other support files for the tests.
  - `[plugins/](https://github.com/Almog81/Cypress-Projects/tree/main/cypress/plugins/)`
    - Contains Cypress plugins configuration files.


## Getting Started

To run the tests locally, make sure you have [Cypress](https://www.cypress.io) installed.

1. Clone this repository: `git clone <repository-url>`
2. Install dependencies: `npm install`
3. Open Cypress: `npx cypress open`
4. Select a test file to run the tests interactively in the Cypress Test Runner.

## Contributing

Contributions to improve this test project are welcome. Feel free to open issues or submit pull requests.

## License

This project is licensed under the [MIT License](LICENSE).
