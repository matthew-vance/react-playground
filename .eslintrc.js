module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  extends: [
    "plugin:prettier/recommended",
    "plugin:react/recommended",
    "plugin:jest/style",
    "standard",
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: ["react", "jest"],
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    quotes: [2, "double"],
    semi: [2, "always"],
    "comma-dangle": [2, "always-multiline"],
  },
  ignorePatterns: ["node_modules/", "plop/templates/", "dist/", "coverage/"],
};
