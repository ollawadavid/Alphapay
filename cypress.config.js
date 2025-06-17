const { defineConfig } = require("cypress");
require('dotenv').config()  // Load .env file at the start

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
