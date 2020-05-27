module.exports = {
    'env': {
        'browser': true,
        'es6': true
    },
    'extends': [
        'eslint:recommended',
        'plugin:react/recommended'
    ],
    'globals': {
        'Atomics': 'readonly',
        'SharedArrayBuffer': 'readonly'
    },
    'parserOptions': {
        'ecmaFeatures': {
            'jsx': true
        },
        'ecmaVersion': 11,
        'sourceType': 'module'
    },
    'plugins': [
        'react'
    ],
    'rules': {
        'indent': [
            'error',
            4
        ],
        'linebreak-style': [
            'error',
            'unix'
        ],
        'quotes': [
            'error',
            'single'
        ],
        'semi': [
            'error',
            'always'
        ],
        'comma-dangle': [
            "error",
            "never"
        ],
        'no-trailing-spaces': "error",
        'no-multiple-empty-lines': "error",
        'no-debugger': "error",
        'no-console': "warn",
        'require-jsdoc' : ['warn', {
            require: {
                "FunctionDeclaration": true,
                "ClassDeclaration": true,
                "MethodDefinition": true,
                "ArrowFunctionExpression": true,
                "FunctionExpression": true
            }
        }],
        'valid-jsdoc': 'error',
        'eol-last': ['error', 'always']
    }
};
