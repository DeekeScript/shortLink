import { get, post } from "@/app/fetch";

export async function statistic(params: any) {
    return await get('shortLinkView/statistic', params);
}


export async function idTitle(params: any) {
    return await get('project/idTitle', params);
}


export async function shortLinkIdTitle(params: any) {
    return await get('shortLink/idTitle', params);
}
