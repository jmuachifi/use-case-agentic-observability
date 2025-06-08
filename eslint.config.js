import js from "@eslint/js";

export default [
  {
    ...js.configs.recommended,
    languageOptions: {
      env: { node: true, es2022: true },
    },
  },
];