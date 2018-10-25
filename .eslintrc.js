module.exports = {
  extends: 'react-tools',
  "rules": {
    "at-rule-no-unknown": [true, {
      "ignoreAtRules": ["function", "if", "each", "include", "mixin"]
    }],
    "max-len": [0, { "ignoreStrings": true, "ignoreTemplateLiterals": true }]
  }
}
