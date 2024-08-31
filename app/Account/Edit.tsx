'use client';
import { IconEdit, IconPlus } from '@douyinfe/semi-icons';
import { Button, Form, Modal, Toast } from '@douyinfe/semi-ui';
import { useState } from 'react';
import { add, update } from './Fetch';
import { FormApi } from '@douyinfe/semi-ui/lib/es/form';

const Edit = (props: { refresh: any, values: any }) => {
    const [visible, setVisible] = useState(false);
    const [loading, setLoading] = useState(false);
    const [formApi, setFormApi] = useState<FormApi>();
    const [values, setValues] = useState(props.values);

    const showDialog = () => {
        setVisible(true);
    }

    const handleOk = () => {
        formApi?.validate()
            .then(async (params: any) => {
                setLoading(true);
                let res;
                if (values && values.id) {
                    res = await update(params);
                } else {
                    res = await add(params);
                }

                setLoading(false);
                if (res.code === 0) {
                    await props.refresh();
                    setVisible(!visible);
                } else {
                    Toast.error(res.msg);
                }
            })
            .catch((errors: any) => {
                console.log(errors);
            });
    }

    const handleCancel = () => {
        setVisible(false);
    }

    const getFormApi = (formApi: any) => {
        setFormApi(formApi);
    }

    return (
        <>
            {values?.id ? <Button onClick={showDialog} type='secondary' icon={<IconEdit />} aria-label='编辑' /> : <Button onClick={showDialog} theme='outline' type="primary" icon={<IconPlus />}>添加账号</Button>}
            <Modal
                title="编辑账号"
                keepDOM={true}
                visible={visible}
                onOk={handleOk}
                confirmLoading={loading}
                style={{ width: 600 }}
                onCancel={handleCancel}
            >
                <Form
                    getFormApi={getFormApi}
                    labelPosition='left'
                    initValues={values}
                >
                    <Form.Input field='name' label={'姓名'} initValue={values ? values.name : ''} />
                    <Form.Input field='mobile' label={'手机号'} initValue={values ? values.mobile : ''} />
                    <Form.Input field='email' label={'邮箱'} initValue={values ? values.email : ''} />
                    <Form.Select initValue={values ? ('' + values.type) : "-1"} field="type" label={{ text: '类型', optional: false }}>
                        <Form.Select.Option value="-1">--请选择--</Form.Select.Option>
                        <Form.Select.Option value="0">管理员账号</Form.Select.Option>
                        <Form.Select.Option value="1">普通账号</Form.Select.Option>
                    </Form.Select>
                    <Form.TextArea field='remark' initValue={values ? values.remark : ''} label={'备注'} />
                </Form>
            </Modal>
        </>
    );
}

export default Edit;
