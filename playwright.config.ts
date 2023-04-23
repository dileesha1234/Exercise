import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  //testMatch: ["tests/Login.test.ts"]
  testMatch: ["tests/Helakuru.test.ts"],
  use: {headless: false},
  reporter: [["dot"], ["json",{outputFile:"jsonReports/jsonReport.json"}],["html",{open:"always"}]]
};
export default config;




