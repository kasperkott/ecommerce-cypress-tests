# 🛒 ecommerce-cypress-tests

End-to-end UI and API test suite for a demo e-commerce web application using **Cypress** and **JavaScript**.

## ✅ Features

- 🔐 Login tests with multiple user roles
- 🛍️ Add to cart functionality with validation
- 🌐 API tests using `cy.request`
- 📍 Mock inventory product price using `cy.intercept`
- 📦 Page Object Model (POM) design pattern
- 🧩 Custom Cypress commands
- 🗂️ Test data loaded from fixtures
- 🖥️ Runs in GUI and headless mode
- 🎯 Ready for CI/CD pipelines

---

## 📁 Project Structure

```
ecommerce-cypress-tests/
├── cypress/
│   ├── e2e/                     
│   │   ├── login.cy.js
│   │   ├── add_to_cart.cy.js
│   │   ├── api_user.cy.js
│   │   └── api_user_mock.cy.js
│   ├── fixtures/               
│   │   ├── correct_user.json
│   │   └── wrong_user.json
│   ├── support/
│   │   ├── commands.js         
│   │   ├── e2e.js              
│   │   └── pages/              
│   │       ├── LoginPage.js
│   │       └── CartPage.js
├── cypress.config.js           
├── package.json                
├── README.md                   
```
---

## 🚀 Getting Started

### 🔧 Install dependencies

```bash
npm install
```

### 🧪 Run tests in Cypress GUI

```bash
npx cypress open
```

### ⚙️ Run tests in headless mode (CI/CD)

```bash
npx cypress run
```

---

## 🧪 Test Scenarios

### 🔐 Login test (`login.cy.js`)
- Visit login page
- Enter credentials
- Verify redirection to inventory page

### 🛍️ Add to cart (`add_to_cart.cy.js`)
- Log in
- Add product to cart
- Open cart and validate content

### 🌐 API test (`api_user.cy.js`)
- Send GET request to user API
- Validate status code and response body

---

### 📍 Intercept test (`api_user_mock.cy.js`)
- Intercept a GET request to mock API endpoint
- Returns a custom (manipulated) response using cy.intercept
- Verifies that mocked data is corretly displayed in DOM

---

## 🔗 Demo Website

Tests run against:  
🌍 [`https://www.saucedemo.com`](https://www.saucedemo.com)

---

## 👤 Author

**Kasper Kott**  
[github.com/kasperkott](https://github.com/kasperkott)
