<template>
    <q-layout view="hHh lpR fFf">
        <q-header elevated class="bg-primary text-white">
            <q-toolbar>
                <q-toolbar-title> 我的应用</q-toolbar-title>
            </q-toolbar>
        </q-header>
        <q-drawer v-model="leftDrawerOpen" :width="230"></q-drawer>
        <q-page-container>
            <router-view />
        </q-page-container>
    </q-layout>
</template>

<script setup lang="ts">
import { ref } from "vue";
// import { useI18n } from "vue-i18n";
// import { changeLanguage } from "src/plugins/i18n";
// import type { LanguageType } from "src/types/Language-type";

const leftDrawerOpen = ref(true);
// const { locale } = useI18n();

// function setLanguage(lang: LanguageType) {
//     changeLanguage(lang, locale);
// }
</script>

<style scoped></style>
