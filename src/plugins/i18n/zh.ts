import { routerI18n } from "src/router/routerI18n";
import { homeI18n } from "pages/Home/homeI18n";
import { loginI18n } from "pages/Login/loginI18n";
import { LanguageType } from "src/types/Language-type";

const zhCN = {
    message: {
        language: "语言",
        zhCN: "中文(简体)",
        enUS: "英文",
        sysName: "国际化翻译系统",
        copySuccess: "已复制到剪贴板",
        copyError: "复制到剪贴板失败",
        actions: "操作成功",
        // 公共的表单提示,警告字段
        formWarn: "请完善表单",
        required: "此为必填项",
        emailVal: "请输入正确的邮箱",
        phoneVal: "请输入正确的手机号码",
    },
    router: routerI18n[LanguageType.ZH],
    home: homeI18n[LanguageType.ZH],
    login: loginI18n[LanguageType.ZH],
}

export default zhCN;
