'use client';
import { Divider, Form, Toast } from '@douyinfe/semi-ui';
import BasePage from "../component/BasePage";
import { useEffect, useState } from 'react';
import { list, update } from './Fetch';
import Button from '@douyinfe/semi-ui/lib/es/button/Button';

const Home = () => {
    const [data, setData] = useState(undefined);
    useEffect(() => {
        const getList = async () => {
            let res = await list({});
            if (res.code == 0) {
                setData(res.data);
            }
        }
        getList();
    }, []);

    const submit = async (v: any) => {
        console.log(v);
        let res = await update(v);
        if (res.code == 0) {
            Toast.success(res.msg);
        }
    }

    return (
        <BasePage>
            <h3 style={{ paddingBottom: '12px' }}>系统设置</h3>
            <Divider />
            {data ? <Form onSubmit={submit} labelPosition='left' initValues={data}>
                <Form.Input field="corpid" label="corpid" />
                <Form.Input field="secret" label="secret" />
                <Form.TagInput
                    field='qiwei_user_list'
                    label="企微用户ID"
                    placeholder='输入后，按Enter键'
                />
                <Button type="primary" htmlType="submit">保存</Button>
            </Form> : null}
        </BasePage>
    );
}

export default Home;
