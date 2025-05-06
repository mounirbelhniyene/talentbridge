import js from "@eslint/js";
import globals from "globals";
import tsEslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import {defineConfig} from "eslint/config";
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';

export default defineConfig([
  {ignores: ['dist']},
  js.configs.recommended,
  ...tsEslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      }
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        {allowConstantExport: true},
      ],
    }
  }
]);
