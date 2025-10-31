import zh from "src/plugins/i18n/zh";
import en from "src/plugins/i18n/en";
import { defineBoot } from "#q-app/wrappers";
import { createI18n } from "vue-i18n";
import { LanguageType } from "src/types/Language-type";

export default defineBoot(({ app }) => {
    const i18n = createI18n({
        legacy: false,
        locale: LanguageType.EN,
        globalInjection: true,
        fallbackLocale: LanguageType.EN,
        messages: {
            zh: zh,
            en: en,
        },
        datetimeFormats: {
            en: {
                short: {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                },
            },
            zh: {
                short: {
                    year: "numeric",
                    month: "numeric",
                    day: "numeric",
                },
            },
        },
    });
    app.use(i18n);
});
