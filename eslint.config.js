import eslint from '@eslint/js'
import tsESLint from 'typescript-eslint'

export default tsESLint.config(
  eslint.configs.recommended,
  ...tsESLint.configs.recommended,
  {
    ignores: ['dist', 'node_modules'],
  },
)
