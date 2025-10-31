import * as fs from "fs";
import * as dotenv from "dotenv";
import { resolve } from "path";
import viteCompression from "vite-plugin-compression";
import { defineConfig } from "#q-app/wrappers";

interface EnvConfig {
    [key: string]: string;
}

function loadEnv(mode: string): EnvConfig {
    const envPath = resolve(process.cwd(), `.env.${mode}`);
    if (fs.existsSync(envPath)) {
        return dotenv.config({ path: envPath }).parsed || {};
    }
    return {};
}

export default defineConfig((/* ctx */) => {
    const mode = process.env.MODE || "development";
    const env = loadEnv(mode);

    return {
        eslint: {
            warnings: true,
            errors: true,
        },
        boot: ["permission", "i18n"],
        css: ["app.scss", "init.scss", "custom.scss"],
        extras: ["mdi-v7"],
        build: {
            target: {
                browser: ["es2022", "firefox115", "chrome115", "safari14"],
                node: "node20",
            },
            typescript: {
                strict: true,
                vueShim: true,
                // extendTsConfig (tsConfig) {}
            },
            vueRouterMode: "history",
            vueOptionsAPI: false,
            polyfillModulePreload: true,
            env: {
                ...env,
                MODE: mode,
            },
            minify: true,
            distDir: mode,
            sourceMap: ["development", "preview"].includes(mode),
            extendViteConf(viteConf) {
                viteConf.base = "./";
                viteConf.optimizeDeps = {
                    include: ["quasar", "vue", "vue-router", "pinia", "axios", "crypto-js"],
                    exclude: ["vite-plugin-checker", "cross-env", "vite-plugin-compression"],
                };
            },
            vitePlugins: [
                [
                    "vite-plugin-checker",
                    {
                        vueTsc: true,
                        eslint: {
                            lintCommand:
                                'eslint -c ./eslint.config.js "./src*/**/*.{ts,js,mjs,cjs,vue}"',
                            useFlatConfig: true,
                        },
                    },
                    { server: false },
                ] as const,
                [
                    viteCompression,
                    {
                        algorithm: "brotliCompress",
                        ext: ".br",
                        threshold: 10240,
                        filter: (file: string) => /\.(js|css|json)$/.test(file),
                    },
                ] as const,
            ],
        },
        devServer: {
            open: {
                app: { name: "google chrome" },
            },
            port: 9000,
            proxy: {
                "/api": {
                    target: env["VUE_APP_URL"] as string,
                    changeOrigin: true,
                    pathRewrite: { "^/api": "/api" },
                },
            },
        },
        framework: {
            lang: "zh-CN",
            iconSet: "mdi-v7",
            plugins: [
                // 'Dialog',
                "Loading",
                "Notify",
                "LoadingBar",
                "SessionStorage",
            ],
            config: {
                screen: {
                    bodyClasses: true,
                },
                loadingBar: {
                    color: "primary",
                    size: "3px",
                    position: "top",
                },
                loading: {
                    spinner: "QSpinnerIos",
                    message: "正在加载中，请稍后......",
                },
                // 设置默认颜色
                brand: {
                    positive: "#48BB78",
                    negative: "#F56565",
                    info: "#4299E1",
                    warning: "#FEAE65",
                    // 主题色
                    primary: "#1961AC",
                    secondary: "#fff",
                    accent: "#F2F3F5",
                    dark: "#141414",
                },
            },
        },
    };
});
