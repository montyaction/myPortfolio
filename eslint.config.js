const js = require("@eslint/js");
const reactPlugin = require("eslint-plugin-react");
const reactHooksPlugin = require("eslint-plugin-react-hooks");
const importPlugin = require("eslint-plugin-import");
const babelParser = require("@babel/eslint-parser");
const globals = require("globals");

module.exports = [
  {
    ignores: ["dist/**", "node_modules/**", "coverage/**"],
    linterOptions: {
      reportUnusedDisableDirectives: "error",
    },
  },
  js.configs.recommended,
  {
    files: ["src/**/*.{js,jsx}"],
    plugins: {
      react: reactPlugin,
      "react-hooks": reactHooksPlugin,
      import: importPlugin,
    },
    languageOptions: {
      parser: babelParser,
      parserOptions: {
        requireConfigFile: false,
        babelOptions: {
          presets: ["@babel/preset-react", "@babel/preset-env"]
        },
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
        process: "readonly",
      },
    },
    settings: {
      react: {
        version: "detect",
      },
      "import/resolver": {
        node: {
          extensions: [".js", ".jsx"],
        },
      },
    },
    rules: {
      ...reactPlugin.configs.recommended.rules,
      ...reactHooksPlugin.configs.recommended.rules,
      ...importPlugin.configs.recommended.rules,
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
      "react/no-unescaped-entities": "off",
      "no-unused-vars": ["warn", { argsIgnorePattern: "^_", ignoreRestSiblings: true }],
    },
  },
  {
    files: ["src/**/__tests__/**/*.{js,jsx}", "**/*.test.{js,jsx}", "**/*.spec.{js,jsx}"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.jest,
      },
    },
  },
  {
    files: ["__mocks__/**/*.js"],
    languageOptions: {
      sourceType: "script",
      globals: {
        ...globals.node,
        ...globals.jest,
      },
    },
  },
  {
    files: [
      "webpack.config.js",
      "jest.config.js",
      "eslint.config.js",
      "fileTransformer.js",
      "*.config.js",
    ],
    languageOptions: {
      sourceType: "script",
      globals: {
        ...globals.node,
      },
    },
  },
];
