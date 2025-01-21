import {
    visitWebsite,
    searchProduct,
    addToCart,
    navigateToCart,
    validateCartProduct,
    validateTotalPrice,
    proceedToCheckout,
    completeOrder,
  } from "../helpers/ecommerceHelpers";
  
  // Defining constants to keep the test data consistent and organized
  const PRODUCT_NAME = "Samsung galaxy s6"; // Product to be searched and added to the cart
  const ORDER_DETAILS = {
    name: "Moropa Lehlogonolo", // Customer's name for checkout form
    country: "South Africa",    // Country field value
    city: "Cape Town",          // City field value
    creditCard: "4769987659989",// Placeholder for credit card details
    month: "9",                 // Card expiry month
    year: "2010",               // Card expiry year
  };
  
  describe("E-commerce Automation on Demo Blaze", () => {
    // Handle specific exceptions globally to prevent unnecessary test failures
    beforeEach(() => {
      cy.on("uncaught:exception", (err) => {
        if (err.message.includes("showcart is not defined")) {
          return false; // Skip this specific error as it doesn't affect test execution
        }
        throw err; // Let Cypress handle any unexpected errors
      });
    });
  
    // Test 1: Ensure the homepage loads successfully
    it("Test 1: Visit the website and validate homepage", () => {
      visitWebsite(); // Open the Demo Blaze website
      cy.url().should("eq", "https://www.demoblaze.com/"); // Check if the URL is correct
    });
  
    // Test 2: Verify product search functionality
    it("Test 2: Search for a product", () => {
      visitWebsite(); // Start with the homepage
      searchProduct(PRODUCT_NAME); // Locate the product based on its name
    });
  
    // Test 3: Test adding a product to the shopping cart
    it("Test 3: Add the product to the cart", () => {
      visitWebsite(); // Reload the homepage to start fresh
      searchProduct(PRODUCT_NAME); // Find the specified product
      addToCart(); // Add the product to the shopping cart
    });
  
    // Test 4: Validate cart contents and pricing details
    it("Test 4: Validate cart details", () => {
      visitWebsite(); // Start fresh by visiting the homepage
      searchProduct(PRODUCT_NAME); // Locate the product by name
      addToCart(); // Add the product to the cart
      navigateToCart(); // Go to the cart page
      validateCartProduct(PRODUCT_NAME); // Confirm that the correct product is displayed in the cart
      validateTotalPrice(); // Check if the total price matches expectations
    });
  
    // Test 5: Test the complete checkout process from cart to order completion
    it("Test 5: Complete the checkout process", () => {
      visitWebsite(); // Begin the test by visiting the homepage
      searchProduct(PRODUCT_NAME); // Search for the desired product
      addToCart(); // Add the product to the cart
      navigateToCart(); // Go to the cart page to review items
      proceedToCheckout(); // Start the checkout process
      completeOrder(ORDER_DETAILS, true); // Fill in the checkout form and confirm the purchase
    });
  });
  
  
  