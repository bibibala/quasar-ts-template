import useToast from "src/utils/useToast";
import { http } from "src/plugins/useAxios";
import xhr from "src/utils/useRequest.js";
import { Key } from "src/utils/useKey";
import { LanguageType } from "src/types/Language-type";

interface ErrorResponse {
    msg: string;
}

const message = {
    [LanguageType.ZH]: {
        error: "下载失败",
        success: "下载成功",
    },
    [LanguageType.EN]: {
        error: "Download failed",
        success: "Download success",
    },
};

const isZH = Key.getLangLa() === LanguageType.ZH;

export async function downloadFile(data: any, url: string) {
    const res = await http({
        data,
        method: "POST",
        url: url,
        responseType: "blob",
    });
    if (res.headers["content-type"] === "application/json") {
        const reader = new FileReader();
        reader.readAsText(res.data);
        reader.onload = (result) => {
            const parseResult = JSON.parse(result.target!.result as string) as ErrorResponse;
            const { msg } = parseResult;
            useToast.showError(
                `${isZH ? message[LanguageType.ZH].error : message[LanguageType.EN].error}，${msg}`,
            );
        };
    } else {
        const link = document.createElement("a");
        const blob = new Blob([res.data]);
        link.style.display = "none";
        link.href = URL.createObjectURL(blob);
        link.download = res.headers["content-disposition"];

        const filenameRegex = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/;
        const matches = filenameRegex.exec(link.download);

        if (matches && matches[1]) {
            const files = matches[1].replace(/['"]/g, "");
            link.download = decodeURI(files);
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            useToast.showSuccess(
                `${isZH ? message[LanguageType.ZH].success : message[LanguageType.EN].success}`,
            );
        } else {
            console.error("无法解析文件名");
        }
    }
}

export function uploadFile(file: File, data: Record<string, any>, url: string) {
    const form = new FormData();
    form.append("file", file);

    Object.keys(data).forEach((key) => {
        form.append(key, data[key]);
    });

    return xhr.file(url, form);
}
