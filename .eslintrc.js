module.exports = {
  extends: ["airbnb", "prettier"],
  plugins: ["react", "react-native", "react-hooks", "prettier"],
  parser: "babel-eslint",
  env: {
    jest: true,
    "react-native/react-native": true
  },
  rules: {
    quotes: ["warn", "double", { avoidEscape: true }],
    "no-console": "warn",
    "no-alert": "error",
    "no-use-before-define": "off",
    "react/jsx-filename-extension": "off",
    "react/prop-types": "off",
    "comma-dangle": "off",
    "padded-blocks": "off",
    "arrow-body-style": "off",
    "react-hooks/exhaustive-deps": "warn",
    "react-native/no-unused-styles": "error",
    "react-native/split-platform-components": "error",
    "react-native/no-inline-styles": "error",
    "react-native/no-color-literals": "error",
    "react-native/no-raw-text": "error",
    "react-native/no-single-element-style-arrays": "error",
    "react/jsx-indent": "off",
    "react/jsx-first-prop-new-line": ["warn", "multiline"],
    "react/jsx-max-props-per-line": ["warn", { maximum: 1, when: "multiline" }],
    "react/destructuring-assignment": "warn",
    "consistent-return": "off"
  },
  globals: {
    fetch: false
  }
};
