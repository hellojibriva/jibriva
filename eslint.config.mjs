import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    // wear_unik/ is a separate, standalone Next.js app (its own package.json,
    // tsconfig.json, node_modules) nested in this repo — not part of this
    // project, so it's excluded from this project's lint run.
    "wear_unik/**",
  ]),
]);

export default eslintConfig;
