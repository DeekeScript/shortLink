'use client';
import { IconClock, IconDelete, IconDuration, IconEdit, IconTickCircle } from '@douyinfe/semi-icons';
import { Avatar, Button, Input, Popconfirm, Space, Table, Tag, Toast } from '@douyinfe/semi-ui';
import * as dateFns from 'date-fns';
import { useEffect, useRef, useState } from 'react';
import BasePage from '../Component/BasePage';
import Edit from './Edit';
import { getList, remove } from './Fetch';
import Search from '../Component/Search';

const ShortLink = () => {
    const [values, setValues] = useState<any>({});

    const columns = [
        {
            title: '姓名',
            dataIndex: 'name',
            search: true,
            render: (text: any, record: any) => `${text}`,
            onFilter: (value: string, record: any) => record.name.includes(value),
        },
        {
            title: '邮箱',
            dataIndex: 'email',
            search: true,
            render: (text: any) => `${text}`,
        },
        {
            title: '手机号',
            dataIndex: 'mobile',
            search: true,
            render: (text: any) => `${text}`,
        },
        {
            title: '状态',
            dataIndex: 'type',
            render: (text: string | number) => {
                const tagConfig: any = {
                    1: { color: 'pink', prefixIcon: <IconDuration />, text: '管理员' },
                    0: { color: 'cyan', prefixIcon: <IconClock />, text: '普通用户' },
                };
                const tagProps = tagConfig[text] || {};
                return <Tag shape='circle' {...tagProps} style={{ userSelect: 'text' }}>{tagProps.text}</Tag>
            }
        },
        {
            title: '备注',
            dataIndex: 'remark',
            search: true,
            render: (text: any) => `${text}`,
        },
        {
            title: '所有者',
            dataIndex: 'user_name',
            render: (text: any, record: any, index: number) => {
                return (
                    <Space>
                        <Avatar size="small" color={'red'} style={{ marginRight: 4 }}>
                            {record?.user?.name || '-'}
                        </Avatar>
                    </Space>
                );
            },
        },
        {
            title: '更新日期',
            dataIndex: 'updated_at',
            sorter: (a: any, b: any) => (a.updateTime - b.updateTime > 0 ? 1 : -1),
            render: (value: any) => {
                return dateFns.format(new Date(value), 'yyyy-MM-dd');
            },
        },
        {
            title: '创建日期',
            search: true,
            type: 'dateRange',
            dataIndex: 'created_at',
            sorter: (a: any, b: any) => (a.updateTime - b.updateTime > 0 ? 1 : -1),
            render: (value: any) => {
                return dateFns.format(new Date(value), 'yyyy-MM-dd');
            },
        },
        {
            title: '操作',
            width: 120,
            dataIndex: 'id',
            render: (value: any, record: any) => {
                return <Space>
                    <Edit values={record} refresh={() => handlePageChange(currentPage)} />
                    <Popconfirm
                        title="确认删除吗？"
                        onConfirm={async () => await removes(value)}
                        position="leftBottom"
                    >
                        <div>
                            <Button type="danger" icon={<IconDelete />} aria-label="删除" />
                        </div>
                    </Popconfirm>
                </Space>
            }
        }
    ];

    const getData = async (params: any) => {
        return await getList(params);
    };

    const pageSize = 10;
    const [dataSource, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setPage] = useState(1);
    const [total, setTotal] = useState(0);

    const fetchData = async (values: any) => {
        setLoading(true);
        setPage(values.page || 1);
        let res = await getData(values);
        setTotal(res.total);
        setData(res.data);
        setLoading(false);
    };

    const handlePageChange = (page: number) => {
        values.page = page;
        fetchData(values);
    };

    const removes = async (id: number) => {
        let res = await remove({ id: id });
        if (res.code === 0) {
            Toast.success(res.msg);
            handlePageChange(currentPage);
        } else {
            Toast.error(res.msg);
        }
    };

    useEffect(() => {
        fetchData({});
    }, []);

    return (
        <BasePage>
            <Search fields={columns} onSubmit={(values: any) => {
                values.page = 1;
                console.log(values);
                fetchData(values);
            }} />

            <div style={{ textAlign: 'right', paddingBottom: '12px' }}>
                <Edit values={undefined} refresh={() => handlePageChange(currentPage)} />
            </div>
            <Table
                columns={columns}
                dataSource={dataSource}
                pagination={{
                    currentPage,
                    pageSize: pageSize,
                    total: total,
                    onPageChange: handlePageChange,
                }}
                loading={loading}
            />
        </BasePage>
    );
}

export default ShortLink;
