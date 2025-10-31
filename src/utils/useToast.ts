import { Notify } from "quasar";

const useToast = {
    showSuccess: (content: string) => {
        Notify.create({
            message: content,
            icon: "mdi-check-circle-outline",
            progress: true,
            type: "positive",
            position: "center",
            timeout: 600,
            // 显示关闭按钮
            // closeBtn:true
        });
    },
    showWarn: (content: string) => {
        Notify.create({
            message: content,
            icon: "mdi-alert-outline",
            progress: true,
            type: "warning",
            position: "center",
            timeout: 3000,
        });
    },

    showInfo: (content: string) => {
        Notify.create({
            message: content,
            icon: "mdi-information-outline",
            progress: true,
            type: "info",
            position: "center",
            timeout: 2000,
        });
    },
    showError: (content: string) => {
        Notify.create({
            message: content,
            icon: "mdi-close-circle-outline",
            progress: true,
            type: "negative",
            position: "center",
            timeout: 3000,
        });
    },
};

export default useToast;
