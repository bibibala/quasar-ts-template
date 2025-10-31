<template>
    <div class="normal-color">
        <router-view />
    </div>
</template>
<style lang="scss" scoped>
.normal-color {
    background: #f7f8fa;
}
</style>
<script setup lang="ts">
import { onMounted } from "vue";
import { useI18n } from "vue-i18n";
import { setLanguageBasedOnIP } from "src/plugins/i18n/userIp";

const { locale } = useI18n();

onMounted(async () => {
    await setLanguageBasedOnIP(locale);
});
</script>
