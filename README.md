# Automation Playground

This project contains automated test scenarios for the Automation Playground website using Cypress.

## Description

The Automation Playground project automates various scenarios on the [Automation Playground website](http://www.uitestingplayground.com) using Cypress. It includes test cases for dynamic IDs, class attributes, hidden layers, load delays, AJAX data, client-side delay, click interactions, text input, scrollbars, dynamic tables, and text verification.

## Test Scenarios

The project includes the following test scenarios:

- **Test01: Dynamic ID**: Verifies the presence of a button with a dynamic ID.
- **Test02: Class Attribute**: Presses a button and verifies an alert message.
- **Test03: Hidden Layers**: Clicks on a button and verifies its clickability.
- **Test04: Load Delay**: Verifies the appearance of a button after a delay.
- **Test05: AJAX Data**: Clicks on a button and verifies the loading of data via an AJAX GET request.
- **Test06: Client Side Delay**: Clicks on a button and verifies data calculated on the client side.
- **Test07: Click**: Clicks on a button and verifies the existence of a success button.
- **Test08: Text Input**: Types input into a text field, clicks on a button, and verifies the input value.
- **Test09: Scrollbars**: Scrolls to a button and clicks on it.
- **Test10: Dynamic Table**: Locates the Chrome process row, gets the CPU load value, and verifies it against a yellow label value.
- **Test11: Verify Text**: Verifies the presence of the text "Welcome UserName!" using XPath.

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
