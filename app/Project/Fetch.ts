import { get, post } from "@/app/fetch";

export async function getList(params: any) {
    return await get('project/list', params);
}

export async function add(params: any) {
    return await post('project/add', params);
}

export async function update(params: any) {
    return await post('project/update', params)
}

export async function remove(params: any) {
    return await post('project/remove', params);
}
