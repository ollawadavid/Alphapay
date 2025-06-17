Alphapay Automation
A test automation framework for KoraPay's web application and API endpoints using Cypress.

Technologies Used
Cypress
Postman/Newman
Node.js
Faker.js
dotenv

Project Structure
├── cypress/
│ ├── e2e/ # Test files
│ ├── fixtures/ # Test data
│ ├── pages/ # Page Object Models
│ └── support/ # Helper functions and commands
├── postmanAutomation/
│ ├── collections/ # Postman collections
│ ├── environments/ # Environment variables
│ ├── reports/ # Test execution reports
│ └── scripts/ # Newman automation scripts

Getting Started
Prerequisites
Node.js (v14 or higher)
npm (v6 or higher)
Installation
Clone the repository
git clone https://github.com/EmekaKalu/korapay-assessment.git
cd korapay-assessment
Install dependencies
npm install
Create a .env file in the root directory with the following variables:
KORA_PASSWORD=your_password
KORA_NEW_PASSWORD=your_new_password
KORA_MOBILE_PIN=your_pin
KORA_API_URL=your_api_url
ALPHA_PAY_URL=your_alphapay_url
ALPHA_PAY_PASSWORD=your_password
ALPHA_PAY_NEW_PASSWORD=your_new_password
CHECKOUT_URL=your_checkout_url

Running Tests

Cypress Tests
The framework includes tests for:
Sign Up
Sign In
Profile Updates
Password Changes
Logout
Checkout Process

To run Cypress tests:
npx cypress open   # Opens Cypress Test Runner
npx cypress run    # Runs tests headlessly

Test Reports
Cypress: Screenshots and videos are stored in cypress/screenshots and cypress/videos

Framework Features
Page Object Model design pattern
Environment variable management
Custom commands
Faker.js for test data generation
Reusable test components
HTML reporting


Contributing
Fork the repository
Create your feature branch (git checkout -b feature/AmazingFeature)
Commit your changes (git commit -m 'Add some AmazingFeature')
Push to the branch (git push origin feature/AmazingFeature)
Open a Pull Request

License
This project is licensed under the ISC License.
