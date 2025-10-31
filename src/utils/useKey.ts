import { SessionStorage, LocalStorage } from "quasar";
import { useCommonStore } from "stores/common";
import type { LanguageType } from "src/types/Language-type";

export class Key {
    static readonly SYS_LANGUAGE = "Sys-Language";
    static readonly SYS_NAME = "变形监测";
    static readonly PAGE_DASHBOARD = "/ProjectInfo";
    static readonly ACCESS_TOKEN = "Access-Token";

    static setToken(data: string) {
        SessionStorage.setItem(Key.ACCESS_TOKEN, data);
    }

    static getToken() {
        return SessionStorage.getItem(Key.ACCESS_TOKEN);
    }

    static haveToken(): boolean {
        return SessionStorage.has(Key.ACCESS_TOKEN);
    }

    // lang
    static setLang(data: LanguageType) {
        LocalStorage.set(Key.SYS_LANGUAGE, data);
    }

    static getLangLa() {
        return LocalStorage.getItem(Key.SYS_LANGUAGE);
    }

    static haveLang() {
        return LocalStorage.has(Key.SYS_LANGUAGE);
    }

    // 不清空本地存储，用来存储语言，其他全部存在session里
    static clearStorage() {
        const common = useCommonStore();
        common.$reset();
        SessionStorage.clear();
    }
}
