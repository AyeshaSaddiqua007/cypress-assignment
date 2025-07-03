# Cypress Assignment - Automated E2E Tests

## Project Overview

This project automates end-to-end tests on the https://shop.kollex.de e-commerce site using Cypress with a Page Object Model pattern.

---

## Project Structure

cypress/
├── e2e/
│ ├── Place-order.cy.js # Test suite for login, selecting list, ordering Coca-Cola, and logout
│ ├── Add-merchant.cy.js # Test suite for login and adding a test merchant
├── pages/
│ ├── LoginPage.js # Login page object
│ ├── ListPage.js # List page object (selecting lists)
│ ├── ProductPage.js # Product page object (adding products, cart, order)
│ ├── UserMenuPage.js # User menu page object (logout)
│ ├── MerchantPage.js # Merchant page object (add merchant workflow)
├── support/
│ ├── commands.js # Custom Cypress commands (e.g., close popups)
│ ├── e2e.js # Support setup file
├── fixtures/
│ └── user.json # User credentials (email, password, customerNumber)

---

## Test Descriptions

### 1. Place Order and Logout

- Logs in using credentials from `user.json`
- Waits for login to complete and dismisses popups
- Selects a list by name (`'q w e r t y l i m i'`)
- Adds Coca-Cola to cart, places order, and logs out

### 2. Add Test Merchant

- Logs in using credentials from `user.json`
- Dismisses popups
- Navigates to Merchant page
- Searches for merchant named "Lennard"
- Selects merchant and enters test customer number
- Submits form and verifies success

---

## How to Run Tests

1. Install dependencies:

   ```bash
   npm install
Run tests with Cypress UI:

bash
npx cypress open
Or run tests headlessly:

bash
npx cypress run