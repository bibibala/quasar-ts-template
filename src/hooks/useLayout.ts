import { onBeforeUnmount, onMounted, type Ref } from "vue";

export function useLayout(myDiv: Ref<HTMLDivElement | null>) {
    const height = window.innerHeight - 90;
    onMounted(() => {
        if (myDiv.value) {
            myDiv.value.style.height = `${height}px`;
        }
        window.addEventListener("resize", updateDivHeight);
    });

    function updateDivHeight() {
        if (myDiv.value) {
            myDiv.value.style.height = `${height}px`;
        }
    }

    onBeforeUnmount(() => {
        window.removeEventListener("resize", updateDivHeight);
    });
}
