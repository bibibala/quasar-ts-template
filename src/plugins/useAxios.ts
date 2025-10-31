import { LoadingBar } from "quasar";
import axios from "axios";
import type {
    AxiosInstance,
    AxiosHeaderValue,
    AxiosResponse,
    InternalAxiosRequestConfig,
    AxiosError,
} from "axios";
import useToast from "src/utils/useToast";
import { Key } from "src/utils/useKey";

export const http: AxiosInstance = axios.create({
    baseURL: process.env.VUE_APP_URL || "",
    headers: {
        "System-Type": "WEB_TOKEN",
    } as Record<string, AxiosHeaderValue>,
});

let abortController = new AbortController();

http.interceptors.request.use(
    (request: InternalAxiosRequestConfig) => {
        request.signal = abortController.signal;
        request.headers[Key.ACCESS_TOKEN] = Key.haveToken() ? Key.getToken() : "";
        LoadingBar.start();
        return request;
    },
    (error: AxiosError) => {
        LoadingBar.stop();
        useToast.showError(JSON.stringify(error));
        return Promise.reject(error);
    },
);

http.interceptors.response.use(
    (response: AxiosResponse) => {

        if (response.config.responseType === "blob") {
            return response;
        }

        const { data } = response;
        if (data.code === 401) {
            Key.clearStorage();
            window.location.href = "/";
            abortController.abort("您的登录已过期");
            abortController = new AbortController();
        }
        LoadingBar.stop();
        return data;
    },
    (error: AxiosError) => {
        LoadingBar.stop();
        useToast.showError(JSON.stringify(error));
        return Promise.reject(error);
    },
);
