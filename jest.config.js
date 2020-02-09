module.exports = {
  verbose: true,
  transform: {
    "^.+\\.svelte$": "svelte-jester"
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.([tj]sx?)$',
  "moduleFileExtensions": ["js", "svelte"]
  testPathIgnorePatterns: ['node_modules', 'cypress', '.cache', 'public', 'dist', 'dist-esm'],
  transformIgnorePatterns: [
    'node_modules/(?!(gatsby|@ionic|ionicons)/)',
    '<rootDir>/node_modules/(?!(gatsby|@ionic|ionicons)/)',
    '<rootDir>/packages/*/src/*',
  ],
  globals: {
    __PATH_PREFIX__: '',
  },
  setupFiles: [`<rootDir>/config/jest/loadershim.js`],
  setupFilesAfterEnv: ['<rootDir>/config/jest/setup.ts'],
}
