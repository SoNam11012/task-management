import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // Base configurations
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  
  // Global settings to ignore ESLint
  {
    ignores: [
      // Add files or directories you want to completely ignore
      '**/*.test.js',
      'node_modules/**',
      '.next/**',
      'public/**',
      // Add any other patterns you want to ignore
    ],
    rules: {
      // Disable rules that are causing problems
      'react/no-unescaped-entities': 'off',
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',
      'react-hooks/exhaustive-deps': 'warn', // Downgrade from error to warning
      'no-unused-vars': 'off', // Turn off completely
      '@typescript-eslint/no-unused-vars': 'off', // Turn off completely
      '@next/next/no-img-element': 'off',
      // Add more rules to disable as needed
    },
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        // Add globals that should be recognized
        React: 'readonly',
        process: 'readonly',
      },
    },
  },
];

export default eslintConfig;
