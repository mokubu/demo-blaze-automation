

# Cypress E-Commerce Automation

## Overview

The following project automates the end-to-end testing of the e-commerce checkout process on the Demo Blaze website using **Cypress**. It validates critical functionalities like searching for a product, adding it to the cart, and completing the checkout process.

The solution follows **best practices** for test automation, including a modular design, the Page Object Model (POM), and reusable helper functions for scalability and maintainability.



## Features

- **End-to-End Testing**: Automates the entire checkout process.
- **Modular Design**: Uses helper functions and POM for better organization.
- **Error Handling**: Includes exception handling and retries to ensure robustness.
- **Screenshots**: Captures screenshots at key steps for debugging and reporting.
- **Scalable**: Easily extendable for additional test cases or functionalities.



## Folder Structure

```
cypress/
├── e2e/
│   └── demobilize.cy.js      # Main test file
├── helpers/
│   └── ecommerceHelpers.js   # Reusable helper functions
├── page_objects/
│   ├── CartPage.js           # Page object for the Cart page
│   ├── HomePage.js           # Page object for the Home page
│   └── ProductPage.js        # Page object for the Product page
└── cypress.config.js         # Cypress configuration
```

---

## Test Flow

The test suite is divided into logical steps, with each step automated and validated:

1. **Visit the Website**  
   Navigate to the homepage and verify its availability.

2. **Search for a Product**  
   Search for a specific product (e.g., "Samsung galaxy s6") and verify the product page.

3. **Add to Cart**  
   Add the selected product to the cart and validate success alerts.

4. **Validate Cart**  
   Confirm the product is correctly added to the cart, and verify the total price.

5. **Complete Checkout**  
   Fill out the checkout form, confirm the purchase, and validate success messages.

---

## Key Technologies

- **Cypress**: End-to-end testing framework.
- **JavaScript (ES6+)**: Programming language for test scripts and helper functions.
- **Page Object Model (POM)**: Design pattern to encapsulate page-specific logic.

---

## How to Run the Tests

### Prerequisites
- Node.js installed (version 12+ recommended)
- Cypress installed (`npm install cypress`)

### Steps
1. Clone the repository:
   ```bash
   git clone <repository_url>
   ```
2. Navigate to the project directory:
   ```bash
   cd cypress-ecommerce-automation
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Open Cypress Test Runner:
   ```bash
   npx cypress open
   ```
5. Run the tests:
   - Select the `demobilize.cy.js` file from the Cypress Test Runner.

---

## Configuration

### Cypress Configuration (`cypress.config.js`)
- **Test Pattern**: Ensures only test files under `cypress/e2e/**/*.cy.js` are picked up.
- **Custom Commands**: Add global configurations or commands in the `cypress/support` folder as needed.

---

## Error Handling and Debugging

- **Uncaught Exceptions**: Known exceptions (e.g., "showcart is not defined") are handled gracefully in the test suite.
- **Screenshots**: Automatically taken at key checkpoints to help with debugging.
- **Timeouts and Retries**: Used to prevent flaky tests due to slow loading elements.

---

## Extending the Solution

1. **Add New Tests**: Create a new `.cy.js` file under `cypress/e2e` for additional scenarios.
2. **New Pages**: Add a new page object under `cypress/page_objects` for any new UI pages.
3. **Helper Functions**: Add reusable logic to `cypress/helpers` for cross-functional tasks.

---

## Contributing

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your message here"
   ```
4. Push to the branch:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Create a Pull Request.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Contact

For questions or collaboration, feel free to reach out:

- **Name**: [Mokubu]
- **Email**: [Moropapoulos@gmail.com]
- **GitHub**: [Your GitHub Profile URL]

---

