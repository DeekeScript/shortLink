import { get, post } from "@/app/fetch";

export async function list(params: any) {
    return await get('system/list', params);
}

export async function update(params: any) {
    return await post('system/update', params);
}
