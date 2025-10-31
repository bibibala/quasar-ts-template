import CryptoJS from "crypto-js";

const key = CryptoJS.enc.Utf8.parse(process.env.ENCRYPT_KEY as string);

type CryptoJSConfig = {
    mode: typeof CryptoJS.mode.ECB;
    padding: typeof CryptoJS.pad.Pkcs7;
};

const config: CryptoJSConfig = {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7,
};

export function encrypt(value: string): string {
    return CryptoJS.AES.encrypt(value, key, config).toString();
}
