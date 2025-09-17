const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  laptop: {
    viewportWidth: 1920,
    viewportHeight: 1080,
  },

  mobile: {
    viewportWidth: 1080,
    viewportHeight: 2400,
  }

  });
