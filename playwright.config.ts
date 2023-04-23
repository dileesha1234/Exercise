import { devices,PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    }

  ],
  
  //testMatch: ["tests/Login.test.ts"]
  testMatch: ["tests/Helakuru.test.ts"],
  use: {headless: false},
  reporter: [["dot"], ["json",{outputFile:"jsonReports/jsonReport.json"}],["html",{open:"always"}]]
};
export default config;




