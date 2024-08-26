import { get, post } from "@/app/fetch";

export async function getList(params: any) {
    return await get('shortLinkView/list', params);
}

export async function add(params: any) {
    return await post('shortLinkView/add', params);
}

export async function update(params: any) {
    return await post('shortLinkView/update', params)
}

export async function remove(params: any) {
    return await post('shortLinkView/remove', params);
}
