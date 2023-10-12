// prettier.config.mjs

/** @type {import("prettier").Config} */
config = {
  tailwindFunctions: ["cva", "cn"],
  plugins: ["prettier-plugin-tailwindcss"],
};

module.exports = config;
