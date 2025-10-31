import js from "@eslint/js";
import globals from "globals";
import pluginVue from "eslint-plugin-vue";
import pluginQuasar from "@quasar/app-vite/eslint";
import { defineConfigWithVueTs, vueTsConfigs } from "@vue/eslint-config-typescript";
import prettierSkipFormatting from "@vue/eslint-config-prettier/skip-formatting";

export default defineConfigWithVueTs(
    {
        // ignores: []
    },

    pluginQuasar.configs.recommended(),
    js.configs.recommended,
    pluginVue.configs["flat/essential"],

    {
        files: ["**/*.ts", "**/*.vue"],
        rules: {
            "@typescript-eslint/consistent-type-imports": ["error", { prefer: "type-imports" }],
        },
    },
    vueTsConfigs.recommendedTypeChecked,

    {
        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "module",

            globals: {
                ...globals.browser,
                ...globals.node, // SSR, Electron, config files
                process: "readonly", // process.env.*
                ga: "readonly", // Google Analytics
                cordova: "readonly",
                Capacitor: "readonly",
                chrome: "readonly", // BEX related
                browser: "readonly", // BEX related
            },
        },
        rules: {
            "@typescript-eslint/no-explicit-any": "off",
            "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
            "@typescript-eslint/no-inferrable-types": "off",
            "@typescript-eslint/explicit-function-return-type": "off",
            "@typescript-eslint/explicit-module-boundary-types": "off",
            "no-redeclare": "error",
            "no-useless-escape": "off",
            "prefer-promise-reject-errors": "off",
            "vue/multi-word-component-names": "off",
            "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
            "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
        },
    },

    {
        files: ["src-pwa/custom-service-worker.ts"],
        languageOptions: {
            globals: {
                ...globals.serviceworker,
            },
        },
    },

    prettierSkipFormatting,
);
