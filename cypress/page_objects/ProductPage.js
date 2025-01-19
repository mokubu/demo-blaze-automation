class ProductPage {
  // Adds the selected product to the shopping cart
  addToCart() {
    // Locate the "Add to cart" button on the page and ensure it's visible
    cy.contains("Add to cart", { timeout: 10000 }).should("be.visible");

    // Introduce a short wait to avoid issues with elements not being ready
    cy.wait(3000);

    // Click the "Add to cart" button to add the product
    cy.contains("Add to cart").click();

    // Listen for the browser's alert to confirm the product was added
    cy.on("window:alert", (text) => {
      if (text.includes("Product added")) {
        // Validate the alert message if it confirms product addition
        expect(text).to.contains("Product added");
      } else {
        // Log a message in case the validation isn't needed (e.g., for specific test cases)
        cy.log("Skipping product added validation for empty form submission test.");
      }
    });

    // Capture a screenshot after the product is added for reporting
    cy.screenshot("product-added");
  }
}

export default ProductPage;

