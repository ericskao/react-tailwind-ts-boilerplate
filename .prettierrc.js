module.exports = {
  printWidth: 100,
  tabWidth: 2,
  singleQuote: true,
  semi: true,
  trailingComma: "all",
  arrowParens: "always",
  overrides: [
    {
      files: "*.{scss,json}",
      options: {
        tabWidth: 2,
      },
    },
  ],
};
