import { get, post } from "@/app/fetch";

export async function getList(params: any) {
    return await get('shortLink/list', params);
}


export async function idTitle(params: any) {
    return await get('project/idTitle', params);
}

export async function add(params: any) {
    return await post('shortLink/add', params);
}

export async function update(params: any) {
    return await post('shortLink/update', params)
}

export async function remove(params: any) {
    return await post('shortLink/remove', params);
}
