const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners her
      return config
    },
    specPattern:"cypress/integration/testspec/*.js"
  },
});
