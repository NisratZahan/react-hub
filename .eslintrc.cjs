module.exports = {
  env: {
    browser: true,
    es2021: true,
    node:true
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    // Example rules:
    "react/prop-types": "off",
    "no-unused-vars": "warn",
    "react/react-in-jsx-scope": "off",
  },
};
