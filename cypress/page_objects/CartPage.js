class CartPage {
  // Opens the cart page by locating and clicking the "Cart" button
  openCart() {
    cy.contains("Cart", { timeout: 10000 }) // Look for the "Cart" button with a timeout of 10 seconds
      .should("be.visible") // Ensure the button is visible
      .click(); // Click to navigate to the cart page
  }

  // Validates that the product name in the cart matches the expected name
  validateProductDetails(productName) {
    cy.get("tr td:nth-child(2)") // Select the second column in the cart table (product name)
      .should("contain.text", productName); // Check that it contains the expected product name
  }

  // Ensures that the total price displayed in the cart is not empty
  validateTotalPrice() {
    cy.get("#totalp") // Locate the element with ID "totalp" (total price)
      .should("not.be.empty"); // Assert that the total price field has a value
  }

  // Proceeds to the checkout process by clicking the "Place Order" button
  proceedToCheckout() {
    cy.contains("Place Order", { timeout: 10000 }) // Look for the "Place Order" button with a timeout of 10 seconds
      .should("be.visible") // Ensure the button is visible
      .click(); // Click the button to start the checkout process
  }

  // Fills out the checkout form with the provided order details
  fillOrderForm(orderDetails) {
    cy.get("#orderModal") // Ensure the checkout modal is visible
      .should("be.visible"); 
    cy.get("#name").type(orderDetails.name); // Enter the customer's name
    cy.get("#country").type(orderDetails.country); // Enter the customer's country
    cy.get("#city").type(orderDetails.city); // Enter the customer's city
    cy.get("#card").type(orderDetails.creditCard); // Enter the credit card details
    cy.get("#month").type(orderDetails.month); // Enter the expiration month
    cy.get("#year").type(orderDetails.year); // Enter the expiration year
  }

  // Completes the purchase and optionally takes screenshots at key steps
  confirmPurchase(isFinalPath = false) {
    if (isFinalPath) {
      cy.screenshot("before-purchase-click"); // Take a screenshot before confirming the purchase
    }

    cy.contains("Purchase", { timeout: 10000 }) // Look for the "Purchase" button
      .should("be.visible") // Ensure the button is visible
      .click(); // Click to confirm the purchase

    // Wait for the success alert and validate the message
    cy.get(".sweet-alert", { timeout: 10000 }) // Locate the success alert modal
      .should("be.visible") // Ensure it is visible
      .within(() => {
        cy.contains("Thank you for your purchase!") // Validate the success message
          .should("be.visible");
      });

    // Ensure the "OK" button in the alert is visible and ready for interaction
    cy.contains("OK", { timeout: 10000 }) 
      .should("be.visible");

    if (isFinalPath) {
      cy.screenshot("before-confirm-modal"); // Take a screenshot before closing the alert
    }

    // Close the success alert by clicking the "OK" button
    cy.contains("OK").click();

    if (isFinalPath) {
      cy.screenshot("after-confirm-modal"); // Take a screenshot after closing the alert
    }
  }
}

export default CartPage;
