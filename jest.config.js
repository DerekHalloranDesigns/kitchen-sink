module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    '\.(scss)$': 'identity-obj-proxy',
  },
  transform: {
    '^.+\.tsx?$': 'ts-jest',
  },
  testRegex: '(/tests/.*|(\.|/)(test|spec))\.tsx?$',
  testPathIgnorePatterns: ['/node_modules/'],
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json',
    },
  },
};
