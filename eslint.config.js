import js from "@eslint/js";

export default [
  {
    ...js.configs.recommended,
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      globals: {
        require: "readonly",
        process: "readonly",
        __dirname: "readonly",
        setTimeout: "readonly",
        console: "readonly",
        module: "readonly"
      }
    }
  }
];