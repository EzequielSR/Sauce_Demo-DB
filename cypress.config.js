const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
       setupNodeEvents(on,config){
         require('cypress-mochawesome-reporter/plugin')(on);
       },
    baseUrl: 'https://www.saucedemo.com/v1',
    reporter:"cypress-mochawesome-reporter",
    reporterOptions: {
        charts:"true",
        reportDir:"cypress/reports",
        reportPageTitle:"custom-title",
        reporterFilename: "[status]_[datetime]-[name]-reports",
        timestamp:"longDate",
        embeddedScreenshots: true,
        inlineAssets: true,
        saveAllAttempts: true,
    },
  },
});
