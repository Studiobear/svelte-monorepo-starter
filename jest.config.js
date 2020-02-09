module.exports = {
  verbose: true,
  transform: {
    '^.+\\.svelte$': 'svelte-jester',
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.([tj]sx?)$',
  moduleFileExtensions: ['js', 'svelte'],
  testPathIgnorePatterns: [
    'node_modules',
    'cypress',
    '.cache',
    'public',
    'dist',
    'dist-esm',
  ],
  transformIgnorePatterns: [
    'node_modules/(?!(gatsby|@ionic|ionicons)/)',
    '<rootDir>/node_modules/(?!(gatsby|@ionic|ionicons)/)',
    '<rootDir>/packages/*/src/*',
  ],
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
}
