import { useI18n } from "vue-i18n";
import type { I18nMessageKeys } from "src/types/I18n-types";


/**
 *
 * @description 配合代码提示使用
 *
 */
export function useTypedI18n() {
    const i18n = useI18n();

    const t = (key: I18nMessageKeys, values?: Record<string, unknown>) => {
        return i18n.t(key, values || {});
    };

    return {
        t,
        locale: i18n.locale,
        availableLocales: i18n.availableLocales,
    };
}
