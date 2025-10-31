import { Quasar } from "quasar";
import enUS from "quasar/lang/en-US";
import zhCN from "quasar/lang/zh-CN";
import { Key } from "src/utils/useKey";
import { LanguageType } from "src/types/Language-type";
import type { Ref } from "vue";

export function changeLanguage(lang: LanguageType, locale: Ref<string>) {
    Key.setLang(lang);
    resetLanguage(locale);
}

export function resetLanguage(locale: Ref<string>) {
    if (Key.haveLang()) {
        switch (Key.getLangLa()) {
            case LanguageType.EN:
                locale.value = LanguageType.EN;
                Quasar.lang.set(enUS);
                break;
            case LanguageType.ZH:
                locale.value = LanguageType.ZH;
                Quasar.lang.set(zhCN);
                break;
        }
    } else {
        // 默认英文
        Quasar.lang.set(enUS);
        locale.value = LanguageType.EN;
    }
}

export function createLang<T extends Record<string, any>>(
    translations: Record<LanguageType, T>,
    defaultLang: LanguageType = LanguageType.EN,
): T {
    const locale = Key.getLangLa() as LanguageType;

    if (locale && translations[locale]) {
        return translations[locale];
    }

    return translations[defaultLang] || ({} as T);
}
