'use client';
import { IconPlus, IconEdit } from '@douyinfe/semi-icons';
import { Button, Form, Modal, Toast } from '@douyinfe/semi-ui';
import React, { useEffect, useState } from 'react';
import { add, idTitle, update } from './Fetch';
import { FormApi } from '@douyinfe/semi-ui/lib/es/form';

const Edit = (props: { refresh: any, values: any }) => {
    const [visible, setVisible] = useState(false);
    const [loading, setLoading] = useState(false);
    const [formApi, setFormApi] = useState<FormApi>();
    const [values, setValues] = useState(props.values);
    const [projectList, setProjectList] = useState([]);

    const showDialog = () => {
        setVisible(true);
    }

    useEffect(() => {
        const getProjectIdTitle = async () => {
            let res = await idTitle({});
            if (res && res.code === 0) {
                let list = res.data.map((v: { id: number, title: string }) => {
                    return { label: v.title, value: v.id }
                });
                console.log(list);
                setProjectList(res.data);
            }
        }
        getProjectIdTitle();
    }, []);

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
                title="编辑短链"
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
                    <Form.Input field='title' initValue={values ? values.title : ''} label={'标题'} />
                    <Form.Select initValue={values ? values.project_id : '-1'} field='project_id' label={'广告'}>
                        <Form.Select.Option value="-1">--请选择--</Form.Select.Option>
                        {projectList.map((option: { id: number, title: string }) => (
                            <Form.Select.Option value={option.id} key={option.id}>
                                {option.title}
                            </Form.Select.Option>
                        ))}
                    </Form.Select>
                    <Form.Select initValue={values ? ('' + values.status) : "-1"} field="status" label={{ text: '状态', optional: false }}>
                        <Form.Select.Option value="-1">--请选择--</Form.Select.Option>
                        <Form.Select.Option value="0">待投放</Form.Select.Option>
                        <Form.Select.Option value="1">已投放</Form.Select.Option>
                    </Form.Select>
                    <Form.TextArea field='remark' initValue={values ? values.remark : ''} label={'备注'} />
                </Form>
            </Modal>
        </>
    );
}

export default Edit;