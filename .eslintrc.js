module.exports = {
  extends: 'react-tools',
  "rules": {
    "at-rule-no-unknown": [true, {
      "ignoreAtRules": ["function", "if", "each", "include", "mixin"]
    }]
  }
}
