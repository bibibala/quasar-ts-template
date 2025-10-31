import { defineBoot } from "#q-app/wrappers";
import { Key } from "src/utils/useKey";
import { createLang } from "src/plugins/i18n";
import { routerI18n } from "src/router/routerI18n";
import type { LanguageType } from "src/types/Language-type";

export default defineBoot(({ router }) => {
    router.beforeEach((to: any, from: any, next: any) => {
        if (to.meta.auth) {
            if (Key.haveToken()) {
                next();
            } else {
                next({ path: "/" });
            }
        } else {
            next();
        }

        if (to.meta.title) {
            document.title =
                createLang(routerI18n)[to.meta.title as keyof (typeof routerI18n)[LanguageType.ZH]];
        } else if (to.matched[0]?.meta?.title) {
            document.title =
                createLang(routerI18n)[
                    to.matched[0].meta.title as keyof (typeof routerI18n)[LanguageType.ZH]
                ];
        }
    });
});
