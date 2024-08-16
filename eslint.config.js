// https://eslint.org/docs/latest/use/configure/configuration-files

import eslintConfigPrettier from 'eslint-config-prettier'
import globals from 'globals'
import js from '@eslint/js'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tsEsLintPlugin from '@typescript-eslint/eslint-plugin'
import tsEsLintParser from '@typescript-eslint/parser'

export default [
  { ignores: ['dist'] },
  js.configs.recommended,
  eslintConfigPrettier,
  {
    plugins: {
      '@typescript-eslint': tsEsLintPlugin,
    },
  },
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.cts', '**/*.mts'],
    languageOptions: {
      parser: tsEsLintParser,
      parserOptions: {
         project: "./tsconfig.json"
      },
    },
    rules: {
      // ...reactHooks.configs.recommended.rules,
      // 'react-refresh/only-export-components': [
      //   'warn',
      //   { allowConstantExport: true },
      // ],
    },
  },

  // {
  //   files: ['**/*.{js,jsx,ts,tsx}'],
  //   languageOptions: {
  //     ecmaVersion: 2020,
  //     globals: globals.browser,
  //     parser: typescriptEslintParser,
  //   },
  //   plugins: {
  //     'react-hooks': reactHooks,
  //     'react-refresh': reactRefresh,
  //   },
  //   rules: {
  //     ...reactHooks.configs.recommended.rules,
  //     'react-refresh/only-export-components': [
  //       'warn',
  //       { allowConstantExport: true },
  //     ],
  //     ...typescriptEslint.configs.recommended.rules,
  //   },
  // },
]
