import { useI18n } from "vue-i18n";

export function useValidationRules() {
    const { t } = useI18n();
    const rules = {
        email: (v: any) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) || t("message.emailVal"),
        required: (v: any) => {
            switch (typeof v) {
                case "string":
                    return v.trim() === "" ? t("message.required") : true;
                case "object":
                    if (v === null) {
                        return t("message.required");
                    }
                    return Object.keys(v).length === 0 ? t("message.required") : true;
                case "number":
                    return !isNaN(v) || t("message.required");
                case "boolean":
                case "function":
                case "undefined":
                    return t("message.required");
                default:
                    return t("message.required");
            }
        },
    };
    return {
        rules,
    };
}

export const FILE_ACCEPT = {};
