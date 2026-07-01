import globals from "globals";
import js from "@eslint/js";
import jsdoc from "eslint-plugin-jsdoc";

export default [
  js.configs.recommended,
  {
    plugins: {
      jsdoc: jsdoc,
    },
    languageOptions: {
      globals: { ...globals.node },
    },
    rules: {
      "no-console": "off",
      "semi": ["error", "always"],
      "curly": ["error", "all"],
      "indent": ["error", 2],
      "jsdoc/require-jsdoc": ["error", {
        "publicOnly": false,
        "require": {
          "FunctionDeclaration": true,
          "MethodDefinition": true,
          "ClassDeclaration": true }
      }],
    },
  },
];
