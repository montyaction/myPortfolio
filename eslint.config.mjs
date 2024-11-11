import globals from "globals";
import js from "@eslint/js";
import reactPlugin from "eslint-plugin-react";
import babelParser from "@babel/eslint-parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { FlatCompat } from "@eslint/eslintrc";

// Path utilities
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// FlatCompat allows using legacy ESLint configs
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [
    // Base configurations
    ...compat.extends("eslint:recommended", "plugin:react/jsx-runtime"),

    // Main configuration
    {
        files: ["**/*.js", "**/*.jsx"],
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
                ...globals.jest,
                ...globals.node,
            },
        },

        plugins: {
            react: reactPlugin,
        },

        settings: {
            react: {
                version: "detect",  // Automatically detect the react version
            }
        },

        rules: {
            ...js.configs.recommended.rules,
            'react/jsx-uses-react': 'error', // Ensures React is recognized as used
            'react/jsx-uses-vars': 'error', // Ensures variables used in JSX are recognized

            "react/no-unescaped-entities": "off",   // Turn off the rules
            "react/react-in-jsx-scope": "off",  // No need for 'React' import in scope for JSX
            "react/prop-types": "off",  // Disable prop-types rule if using TypeScript or not required
        },
    },

    // Override setting for Webpack config (Node.js environment)
    {
        files: ["webpack.config.js"],
        languageOptions: {
            globals: {
                node: true,  // Enable Node.js environment
            },
        },
        rules: {
            "no-undef": "off",  // Turn off no-undef for Node.js files
        },
    },

    // Jest-specific configuration
    {
        files: ["jest.config.js"],
        languageOptions: {
            globals: {
                node: true,  // Set the environment to Node.js for this file
            },
        },
        rules: {
            "no-undef": "off",  // Disable the no-undef rule for Node.js files
        },
    },

    {
        files: ["**/*.test.js", "**/*.test.jsx"],
        languageOptions: {
            globals: {
                jest: true,  // Enable Jest environment globally for test files
            },
        },
    },
    // Ignore dist and node_modules directories
    {
        ignores: [
            "dist/**",  // Ignore bundled output
            "**/__tests__**", // Ignore the test files
            "**/*.config.mjs",  // Ignore the eslint config file
            "node_modules/**",  // Ignore dependencies
        ],
    },
    reactPlugin.configs.flat.recommended,
];