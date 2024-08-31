import { get, post } from "@/app/fetch";

export async function update(params: any) {
    return await post('user/passwordUpdate', params)
}
