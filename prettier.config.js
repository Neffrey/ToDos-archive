// prettier.config.mjs

/** @type {import("prettier").Config  & import('prettier-plugin-tailwindcss').options} */
config = {
  arrowParens: "always",
  printWidth: 80,
  singleQuote: false,
  jsxSingleQuote: false,
  semi: true,
  trailingComma: "all",
  tabWidth: 2,
  tailwindFunctions: ["cva", "cn"],
  plugins: ["prettier-plugin-tailwindcss"],
};

module.exports = config;
