'use client';
import { IconPlus, IconEdit } from '@douyinfe/semi-icons';
import { Button, Form, Modal, Toast } from '@douyinfe/semi-ui';
import React, { useEffect, useState } from 'react';
import { add, update, departmentList, departmentUserList } from './Fetch';
import { FormApi } from '@douyinfe/semi-ui/lib/es/form';

const Edit = (props: { refresh: any, values: any }) => {
    const [visible, setVisible] = useState(false);
    const [loading, setLoading] = useState(false);
    const [formApi, setFormApi] = useState<FormApi>();
    const [values, setValues] = useState(props.values);
    const [departments, setDepartments] = useState<{ id: number, name: string }[]>([]);
    const [departmentUsers, setDepartmentUsers] = useState<{ userid: string, name: string }[]>([]);

    const showDialog = () => {
        setVisible(true);
    }

    const getDepartments = async () => {
        let res = await departmentList({});
        setDepartments(res.data);
    }

    const getDepartmentUsers = async (params: { department_id: number }) => {
        let res = await departmentUserList({ department_id: params.department_id });
        setDepartmentUsers(res.data);
    }

    useEffect(() => {
        if (!visible) {
            return;
        }
        console.log(values);
        getDepartments();
        getDepartmentUsers({ department_id: values?.qiwei_department_id || 0 });
    }, [visible]);

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
            {values?.id ? <Button onClick={showDialog} type='secondary' icon={<IconEdit />} aria-label='编辑' /> : <Button onClick={showDialog} theme='outline' type="primary" icon={<IconPlus />} aria-label="添加广告">添加广告</Button>}
            <Modal
                title="编辑广告"
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
                    <Form.Input field='title' label='广告名称' />
                    <Form.Select initValue={values ? ('' + values.status) : "-1"} field="status" label={{ text: '广告状态', optional: false }}>
                        <Form.Select.Option value="-1">--请选择--</Form.Select.Option>
                        <Form.Select.Option value="0">待上线</Form.Select.Option>
                        <Form.Select.Option value="1">已上线</Form.Select.Option>
                        <Form.Select.Option value="2">已完成</Form.Select.Option>
                    </Form.Select>
                    <Form.Select onChange={async (v: any) => {
                        getDepartmentUsers({ department_id: v });
                        formApi?.setValue('qiwei_userid', []);
                    }} field='qiwei_department_id' initValue={values?.qiwei_department_id || "-1"} label={{ text: '企微部门', optional: false }}>
                        <Form.Select.Option value="-1">--请选择--</Form.Select.Option>
                        {departments.map((v: { id: number, name: string }) => {
                            return <Form.Select.Option key={'department' + v.id} value={v.id}>{v.name}</Form.Select.Option>
                        })}
                    </Form.Select>

                    <Form.Select multiple field='qiwei_userid' initValue={values ? values.qiwei_userid : 0} label={{ text: '对接人', optional: false }}>
                        {departmentUsers.map((v: { userid: string, name: string }) => {
                            return <Form.Select.Option key={'department_user' + v.userid} value={v.userid}>{v.name}</Form.Select.Option>
                        })}
                    </Form.Select>
                    <Form.Input field='url' label='链接地址' />
                </Form>
            </Modal>
        </>
    );
}

export default Edit;