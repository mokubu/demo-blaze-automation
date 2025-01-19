class HomePage {
  // Searches for a product on the homepage by locating it using its name
  searchProduct(productName) {
    cy.contains(productName, { timeout: 10000 }) // Look for the product name on the page with a timeout of 10 seconds
      .should("be.visible") // Ensure the product is visible on the page
      .click(); // Click the product to navigate to its details page

    cy.url().should("include", "prod.html"); // Verify that the URL includes "prod.html," indicating the product page is loaded
  }
}

export default HomePage;
