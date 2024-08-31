'use client';
import { Form, Modal, Toast } from '@douyinfe/semi-ui';
import { FormApi } from '@douyinfe/semi-ui/lib/es/form';
import { useState } from 'react';
import { update } from './Fetch';

const Edit = (props: { refresh: any, setVisible: any }) => {
    const [loading, setLoading] = useState(false);
    const [formApi, setFormApi] = useState<FormApi>();

    console.log(props);
    const handleOk = () => {
        formApi?.validate().then(async (params: any) => {
            if (params['password'] !== params['password2']) {
                return Toast.error('两次密码输入不一致');
            }

            setLoading(true);
            let res = await update(params);
            setLoading(false);
            if (res.code === 0) {
                await props.refresh();
            } else {
                Toast.error(res.msg);
            }
        })
            .catch((errors: any) => {
                console.log(errors);
            });
    }

    const handleCancel = () => {
        props.setVisible(false);
    }

    const getFormApi = (formApi: any) => {
        setFormApi(formApi);
    }

    return (
        <>
            <Modal
                title="密码修改"
                keepDOM={true}
                visible={true}
                confirmLoading={loading}
                onOk={handleOk}
                style={{ width: 600 }}
                onCancel={handleCancel}
            >
                <Form
                    getFormApi={getFormApi}
                    labelPosition='left'
                >
                    <Form.Input showClear field='old_password' label={'原密码'} />
                    <Form.Input showClear type='password' field='password' label={'新密码'} />
                    <Form.Input showClear type='password' field='password2' label={'重复密码'} />
                </Form>
            </Modal>
        </>
    );
}

export default Edit;