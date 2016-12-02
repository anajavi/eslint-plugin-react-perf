'use strict'

var allRules = {
  'jsx-no-new-object-as-prop': require('./lib/rules/jsx-no-new-object-as-prop'),
  'jsx-no-new-array-as-prop': require('./lib/rules/jsx-no-new-array-as-prop')
}

function configureAsError (rules) {
  var result = {}
  for (var key in rules) {
    if (!rules.hasOwnProperty(key)) {
      continue
    }
    result['react-perf/' + key] = 2
  }
  return result
}

module.exports = {
  rules: allRules,
  configs: {
    recommended: {
      plugins: [
        'react-perf'
      ],
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      },
      rules: {
        'react-perf/jsx-no-new-object-as-prop': 2,
        'react-perf/jsx-no-new-array-as-prop': 2
      }
    },
    all: {
      plugin: [
        'react-perf'
      ],
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      },
      rules: configureAsError(allRules)
    }
  }
}
