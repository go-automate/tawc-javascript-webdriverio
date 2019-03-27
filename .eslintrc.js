module.exports = {
    "plugins": [
        "webdriverio",
        "jasmine"
    ],
    "env": {
        "es6": true,
        "node": true,
        "webdriverio/wdio": true,
        "jasmine": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:jasmine/recommended"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "rules": {
    }
};