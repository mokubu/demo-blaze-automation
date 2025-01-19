import HomePage from "../page_objects/HomePage";
import ProductPage from "../page_objects/ProductPage";
import CartPage from "../page_objects/CartPage";

const homePage = new HomePage();
const productPage = new ProductPage();
const cartPage = new CartPage();

export function visitWebsite() {
  cy.log("Visit the website");
  cy.visit("https://www.demoblaze.com");
  cy.screenshot("home-page");
}

export function searchProduct(productName) {
  cy.log(`Search for the product: ${productName}`);
  homePage.searchProduct(productName);
  cy.screenshot("product-page");
}

export function addToCart() {
  cy.log("Add product to cart");
  productPage.addToCart();
}

export function navigateToCart() {
  cy.log("Navigate to the cart");
  cartPage.openCart();
  cy.screenshot("cart-page");
}

export function validateCartProduct(productName) {
  cy.log("Validate product details in the cart");
  cartPage.validateProductDetails(productName);
  cy.screenshot("cart-validation");
}

export function validateTotalPrice() {
  cy.log("Validate total price in the cart");
  cartPage.validateTotalPrice();
  cy.screenshot("total-price-validation");
}

export function proceedToCheckout() {
  cy.log("Proceed to checkout");
  cartPage.proceedToCheckout();
  cy.screenshot("checkout-page");
}

export function completeOrder(orderDetails, isFinalPath = false) {
  cy.log("Complete the order");
  cartPage.fillOrderForm(orderDetails);
  cartPage.confirmPurchase(isFinalPath);
}
