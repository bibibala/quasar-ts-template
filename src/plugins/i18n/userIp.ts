import { Key } from "src/utils/useKey";
import type { Ref } from "vue";
import { resetLanguage } from "src/plugins/i18n";
import { LanguageType } from "src/types/Language-type";

export async function setLanguageBasedOnIP(locale: Ref<string>) {
    if (!Key.haveLang()) {
        try {
            // 这个必须有vpn才可以
            const ipResponse = await fetch("https://api.ipify.org?format=json");
            const ipData = await ipResponse.json();
            const userIp = ipData.ip;

            const locationResponse = await fetch(
                `https://ipinfo.io/${userIp}/geo?token=1d664d4b2abc25`,
            );
            const locationData = await locationResponse.json();

            const country = locationData.country;
            if (country === "CN") {
                Key.setLang(LanguageType.ZH);
            } else {
                Key.setLang(LanguageType.EN);
            }
            resetLanguage(locale);
        } catch (error) {
            console.error("Error fetching location data:", error);
            Key.setLang(LanguageType.EN);
            resetLanguage(locale);
        }
    } else {
        resetLanguage(locale);
    }
}
