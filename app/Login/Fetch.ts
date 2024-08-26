import { get, post } from "@/app/fetch";

export async function qrcode(params: any) {
    return await get('auth/qrcode', params);
}

export async function login(params: any) {
    return await post('auth/login', params);
}
