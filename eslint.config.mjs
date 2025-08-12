import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
    baseDirectory: __dirname,
});

// Convert parser functions to string to avoid serialization issues on Vercel
const eslintConfig = [...compat.extends("next/core-web-vitals")].map(config => ({
    ...config,
    parser: typeof config.parser === "function" ? "@typescript-eslint/parser" : config.parser,
}));

export default eslintConfig;
