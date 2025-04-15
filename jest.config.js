module.exports = {
    moduleDirectories: ['node_modules', 'src'],
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
    moduleNameMapper: {
      '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/__mocks__/fileMock.js',
      '\\.(css|less|scss|sass)$': '<rootDir>/__mocks__/styleMock.js'
    },
    transform: {
      '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['react-app'] }]
    },
    transformIgnorePatterns: [
      '/node_modules/(?!(@?react|react-dom|react-router-dom|framer-motion)/)'
    ],
    collectCoverageFrom: [
      "src/**/*.{js,jsx,ts,tsx}",
      "!src/**/*.d.ts",
      "!src/index.{js,jsx,ts,tsx}",
      "!src/serviceWorker.{js,jsx,ts,tsx}",
      "!src/reportWebVitals.{js,jsx,ts,tsx}",
      "!src/setupTests.{js,jsx,ts,tsx}",
      "!src/**/*.stories.{js,jsx,ts,tsx}",
      "!src/mocks/**"
    ],
    coverageThreshold: {
        global: {
          branches: 40,
          functions: 50,
          lines: 55,
          statements: 55
        }
      }
  };
  export default {
    transform: {
      "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
    },
    extensionsToTreatAsEsm: [".jsx", ".js"],
    testEnvironment: "jsdom",
    moduleNameMapper: {
      "\\.(css|less|scss|sass)$": "identity-obj-proxy"
    }
  };
  