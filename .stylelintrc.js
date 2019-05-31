module.exports = {
  plugins: ['stylelint-order', 'stylelint-scss'],
  extends: [
    './node_modules/prettier-stylelint/config.js',
    'stylelint-config-standard'
  ],
  rules: {
    indentation: 2,
    'string-quotes': 'single',
    'order/properties-alphabetical-order': true,
    'declaration-colon-newline-after': null,
    'value-list-comma-newline-after': 'never-multi-line',
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': true,
    'scss/at-else-empty-line-before': 'never',
    'at-rule-empty-line-before': [
      'always',
      {
        except: ['blockless-after-same-name-blockless', 'first-nested'],
        ignore: ['after-comment'],
        ignoreAtRules: ['else']
      }
    ],
    'block-closing-brace-newline-after': [
      'always',
      {
        ignoreAtRules: ['if', 'else']
      }
    ]
  }
}
