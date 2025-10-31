import { computed } from "vue";
import { useRouter } from "vue-router";

export function useRouteMeta() {
    const router = useRouter();

    return computed(() => {
        return router.currentRoute.value.meta.title as string;
    });
}
