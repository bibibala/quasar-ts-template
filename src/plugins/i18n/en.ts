import { routerI18n } from "src/router/routerI18n";
import { homeI18n } from "pages/Home/homeI18n";
import { loginI18n } from "pages/Login/loginI18n";
import { LanguageType } from "src/types/Language-type";

const enUS = {
    message: {
        language: "language",
        zhCN: "Simplified Chinese",
        enUS: "English",
        sysName: "Translation System",
        copySuccess: "Copied to clipboard successfully",
        copyError: "Copy to clipboard failed",
        actions: "Operation successful",
        // 公共的表单提示,警告字段
        formWarn: "Please complete the form",
        required: "This field is required",
        emailVal: "Please enter a valid email address",
        phoneVal: "Please enter a valid mobile phone number",
    },
    router: routerI18n[LanguageType.EN],
    home: homeI18n[LanguageType.EN],
    login: loginI18n[LanguageType.EN],
};

export default enUS;
