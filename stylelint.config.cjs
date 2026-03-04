/** @type {import('stylelint').Config} */
module.exports = {
  extends: ['stylelint-config-standard-scss'],
  plugins: ['stylelint-scss'],
  rules: {
    /* disable naming conventions */
    'selector-id-pattern': null,
    'keyframes-name-pattern': null,
    'scss/at-mixin-pattern': null,
    'scss/dollar-variable-pattern': null,

    /* keep useful sanity rules */
    'no-descending-specificity': null,
    'selector-class-pattern': null,
    'scss/at-rule-no-unknown': true,
  },
  ignoreFiles: ['dist/**/*'],
};
