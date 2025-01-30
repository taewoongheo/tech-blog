import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginReact from 'eslint-plugin-react';
import eslintConfigPrettier from 'eslint-config-prettier';
import { FlatCompat } from '@eslint/eslintrc';
import path from 'path';
import { fileURLToPath } from 'url';
import tseslint from 'typescript-eslint';

// mimic CommonJS variables -- not needed if using CommonJS
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

/** @type {import('eslint').Linter.Config[]} */
export default [
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  pluginReact.configs.flat.recommended,
  pluginReact.configs.flat['jsx-runtime'],
  eslintConfigPrettier,
  ...compat.extends('eslint-config-airbnb'),
  {
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.node,
        ...globals.browser,
      },
    },
  },
  { ignores: ['out/', '.next/', 'postcss.config.js'] },
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    rules: {
      'import/no-extraneous-dependencies': 'off',
      'react/jsx-filename-extension': [
        1,
        { extensions: ['.js', '.jsx', '.tsx'] },
      ],
      'import/no-unresolved': 'off',
      'import/extensions': ['error', { tsx: 'always', ts: 'always' }],
      'no-shadow': 'off',
      'object-curly-newline': 'off',
      'react/jsx-one-expression-per-line': 'off',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    plugins: {
      pluginReact,
    },
  },
  {
    files: ['eslint.config.mjs'],
    rules: {
      'no-underscore-dangle': 'off',
    },
  },
];
