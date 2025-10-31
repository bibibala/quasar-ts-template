import { http } from "src/plugins/useAxios";

interface BaseResponse<T = any> {
    code: number;
    message: string;
    data: T;
}

const xhr = {
    get<T = any>(url: string, params?: any) {
        return http<BaseResponse<T>>({
            url,
            method: "GET",
            params,
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
        });
    },
    post<T = any>(url: string, data?: any) {
        return http<BaseResponse<T>>({
            url,
            method: "POST",
            data,
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
        });
    },
    file<T = any>(url: string, data?: any) {
        return http<BaseResponse<T>>({
            url,
            method: "POST",
            data,
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
    },
    delete<T = any>(url: string, data?: any) {
        return http<BaseResponse<T>>({
            url,
            method: "DELETE",
            data,
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
        });
    },
};

export default xhr;
