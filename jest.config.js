module.exports = {
  testEnvironment: 'node',
  testTimeout: 60000, // Extend timeout for Selenium tests
  coverageProvider: "v8",
  maxConcurrency: 5,
  maxWorkers: 5,
  testPathIgnorePatterns: ["/node_modules/"]
};
