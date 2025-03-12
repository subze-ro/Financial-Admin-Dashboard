import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // Disable or adjust specific rules
      "@typescript-eslint/no-unused-vars": "warn", // Change to "off" to disable
      "@next/next/no-img-element": "warn", // Change to "off" to disable
    },
  },
];

export default eslintConfig;