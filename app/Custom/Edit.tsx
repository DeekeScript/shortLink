'use client';
import { IconPlus, IconEdit } from '@douyinfe/semi-icons';
import { Button, Form, Modal, Toast } from '@douyinfe/semi-ui';
import React, { useEffect, useState } from 'react';
import { add, update } from './Fetch';

const Edit = (props: { refresh: any, values: any }) => {
    const [visible, setVisible] = useState(false);
    const [loading, setLoading] = useState(false);
    const [formApi, setFormApi] = useState(null);
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
            {values?.id ? <Button onClick={showDialog} type='secondary' icon={<IconEdit />} aria-label='编辑' /> : <Button onClick={showDialog} theme='outline' type="primary" icon={<IconPlus />}>添加短链</Button>}
            <Modal
                title="编辑"
                keepDOM={true}
                visible={visible}
                onOk={handleOk}
                okButtonProps={{ loading: loading }}
                style={{ width: 600 }}
                onCancel={handleCancel}
            >
                <Form
                    getFormApi={getFormApi}
                    labelPosition='left'
                    initValues={values}
                >
                    <Form.Select initValue={values ? ('' + values.status) : "-1"} field="status" label={{ text: '类型', optional: false }}>
                        <Form.Select.Option value="-1">--请选择--</Form.Select.Option>
                        <Form.Select.Option value="0">咨询</Form.Select.Option>
                        <Form.Select.Option value="1">成交</Form.Select.Option>
                    </Form.Select>
                    <Form.TextArea field='remark' initValue={values ? values.remark : ''} label={'备注'} />
                </Form>
            </Modal>
        </>
    );
}

export default Edit;