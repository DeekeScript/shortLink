import { get, post } from "@/app/fetch";

export async function getList(params: any) {
    return await get('custom/list', params);
}

export async function add(params: any) {
    return await post('customBuy/add', params);
}

export async function update(params: any) {
    return await post('custom/update', params)
}

export async function remove(params: any) {
    return await post('custom/remove', params);
}
