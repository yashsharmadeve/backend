const tsParser = require("@typescript-eslint/parser");

module.exports = [
  {
    files: ["**/*.{js,cjs,mjs}"],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: "commonjs"
    }
  },
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parser: tsParser,
      ecmaVersion: 2020,
      sourceType: "commonjs"
    }
  }
];
