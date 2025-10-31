import type { I18nMessageKeys } from "./types/I18n-types";

declare module "vue-i18n" {
    export interface VueI18n {
        t(key: I18nMessageKeys, values?: Record<string, unknown>): string;
    }
}

declare module "@vue/runtime-core" {
    interface ComponentCustomProperties {
        $t: (key: I18nMessageKeys, values?: Record<string, unknown>) => string;
    }
}

export {};
