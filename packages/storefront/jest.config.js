module.exports = {
    collectCoverage: true,
    coverageDirectory: "coverage",
    collectCoverageFrom: [
      "**/*.{ts,tsx}",
      "!**/*.d.ts",
      "!**/node_modules/**",
    ],
    testEnvironment: "jsdom",
    setupFilesAfterEnv: ["<rootDir>/setupTests.ts"],
    testPathIgnorePatterns: ["/node_modules/", "/.next/"],
    transform: {
      "^.+\\.(ts|tsx)$": "babel-jest"
    },
    transformIgnorePatterns: ["/node_modules/"],
    moduleNameMapper: {
        ".+\\.(css|styl|less|sass|scss|png|jpg|jpeg|ttf|woff|woff2)$": "<rootDir>/__mocks__/fileMock.js"
    },
  };