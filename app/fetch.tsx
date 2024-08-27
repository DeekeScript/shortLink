import { Notification } from "@douyinfe/semi-ui";

export async function get(route: string, params: any) {
    let str = '';
    if (params) {
        for (let i in params) {
            str += '&' + i + '=' + params[i];
        }
        str = '?' + str.substring(1);
    }

    let headers: any = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    };

    if (localStorage.getItem('access_token')) {
        headers['Authorization'] = localStorage.getItem('access_token');
    }

    const res = await fetch(`https://crm.yizetech.com.cn/api/` + route + str, {
        method: 'GET',
        headers: headers,
    });
    const data = await res.json();
    if (res.status === 429) {
        Notification.open({ title: '系统通知', content: '频率限制，请稍后再试' });
        return data;
    }

    if (res.status !== 200) {
        Notification.open({ title: '系统通知', content: '接口异常' });
    }
    return data;
}

export async function post(route: string, params: any) {
    let headers:any = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    };

    if (localStorage.getItem('access_token')) {
        headers['Authorization'] = localStorage.getItem('access_token');
    }

    const res = await fetch(`https://crm.yizetech.com.cn/api/` + route, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify({ ...params }), // 将数据转换为JSON字符串)
    });
    const data = await res.json();
    if (res.status === 429) {
        Notification.open({ title: '系统通知', content: '频率限制，请稍后再试' });
        return data;
    }

    if (res.status !== 200) {
        Notification.open({ title: '系统通知', content: '接口异常' });
    }
    return data;
}
