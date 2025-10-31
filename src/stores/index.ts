import { defineStore } from "#q-app/wrappers";
import { createPinia } from "pinia";
import store from "pinia-plugin-persistedstate";

// declare module 'pinia' {
//     export interface PiniaCustomProperties {}
// }
export default defineStore((/* { ssrContext } */) => {
    const pinia = createPinia();
    pinia.use(store);
    return pinia;
});
