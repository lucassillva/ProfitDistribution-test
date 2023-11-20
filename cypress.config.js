const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'kucexo',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
