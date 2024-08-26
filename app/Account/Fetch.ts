import { get, post } from "@/app/fetch";

export async function getList(params: any) {
    return await get('user/list', params);
}

export async function add(params: any) {
    return await post('user/add', params);
}

export async function update(params: any) {
    return await post('user/update', params)
}

export async function remove(params: any) {
    return await post('user/remove', params);
}
