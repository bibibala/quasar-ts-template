import { defineStore, acceptHMRUpdate } from "pinia";

export const useCommonStore = defineStore("common", {
    persist: {
        storage: sessionStorage,
    },
    state: () => ({}),
    actions: {},
    getters: {},
});

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useCommonStore, import.meta.hot));
}
