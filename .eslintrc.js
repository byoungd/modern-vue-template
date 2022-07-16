module.exports = {
  root: true,
  env: {
    node: true,
    es2021: true,
    browser: true,
    // defineProps and defineEmits generate no-undef warnings
    'vue/setup-compiler-macros': true,
  },
  parser: 'vue-eslint-parser',
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-essential',
    'plugin:vue/vue3-strongly-recommended',
    'prettier',
  ],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    ecmaVersion: 2020,
  },
  plugins: ['vue', 'prettier'],
  // add your custom rules here
  rules: {
    'no-unused-vars': ['error', { vars: 'all', args: 'none', ignoreRestSiblings: true }],
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'no-undef': 'off',
    'vue/multi-word-component-names': 'off',
  },
}
