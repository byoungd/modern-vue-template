module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-essential',
    'plugin:vue/vue3-strongly-recommended',
    '@vue/typescript/recommended',
    '@vue/eslint-config-prettier',
    '@vue/eslint-config-typescript',
    'prettier',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  plugins: ['vue', 'prettier'],
  // add your custom rules here
  rules: {
    'prettier/prettier': [
      'error',
      {},
      {
        usePrettierrc: true,
      },
    ],
    eqeqeq: 2,
    'prefer-const': 2,
    // 注释加空格
    'spaced-comment': 2,
    'no-undef': 'off',
    'no-console': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-tabs': 'off',
    'prefer-rest-params': 'off',
    'space-before-function-paren': 'off',
    'vue/script-setup-uses-vars': 1,
    'vue/order-in-components': 'off',
    'vue/no-v-html': 'off',
    'vue/component-definition-name-casing': 'off',
    'vue/attribute-hyphenation': 'off',
    'vue/v-on-event-hyphenation': 'off',
    // TO DELETE 以下几条规则主要是由于技术负债或者是vue版本更新导致 --start--
    'vue/require-prop-types': 'warn',
    'vue/require-default-prop': 'warn',
    'vue/multi-word-component-names': 'warn',
    'vue/no-template-shadow': 'warn',
    '@typescript-eslint/no-explicit-any': 'warn',
    // TO DELETE --end--
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-this-alias': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-var-requires': 'off',
  },
}
