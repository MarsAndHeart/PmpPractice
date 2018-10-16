module.exports = {
  "env": {
    "browser": true,
    "es6": true,
    "node": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  "settings": {
    "react": {
      "version": "16.4.0",
    }
  },
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "jsx": true
    },
    "sourceType": "module"
  },
  "plugins": [
    "react",
  ],
  "rules": {
    "indent": [
      "error",
      2
    ],
    "quotes": [
      "error",
      "single"
    ],
    "semi": [
      "error",
      "always"
    ],
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
    "react/jsx-filename-extension": "off",
    "react/require-extension": "off",
    "global-require": "off",
    "generator-star-spacing": "off",
    "no-duplicate-imports": "off",
    "no-throw-literal": "off",
    'quote-props': 'off',
    "spaced-comment": 'off',
    "no-underscore-dangle": "off",
    "import/first":"off",
    "react/require-default-props":"off",
    "react/no-deprecated":"off",
    "linebreak-style":"off",
    "no-control-regex":"off"
  },
  "globals": {
    "fetch": true,
    "__DEV__": true,
    "$Shape": true,
  }
};