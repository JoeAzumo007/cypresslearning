const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'e985xw',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
