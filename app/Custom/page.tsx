'use client';
import { IconDelete, IconShoppingBag } from '@douyinfe/semi-icons';
import { Avatar, Button, Popconfirm, Space, Table, Toast, Typography } from '@douyinfe/semi-ui';
import * as dateFns from 'date-fns';
import { useEffect, useState } from 'react';
import BasePage from '../component/BasePage';
import Edit from './Edit';
import { getList, remove } from './Fetch';

const Data = () => {
    const columns = [
        {
            title: '广告标题',
            dataIndex: 'project_id',
            width: 150,
            render: (text: any, record: any) => `${record?.short_link?.project?.title}`,
        },
        {
            title: '短链',
            width: 150,
            dataIndex: 'short_link_id',
            render: (text: any, record: any) => <a target='_blank' href={record?.short_link?.url}>{record?.short_link?.url}</a>,
        },
        {
            title: '昵称',
            width: 150,
            dataIndex: 'nickname',
            render: (text: any) => <a target='_blank' href={text}>{text}</a>,
        },
        {
            title: '头像',
            dataIndex: 'avatar',
            width: 80,
            render: (text: any, record: any) => {
                return (
                    <Avatar src={text} size="small" color={'red'} style={{ marginRight: 4 }} />
                );
            },
        },
        {
            title: '所有者',
            dataIndex: 'user_id',
            width: 80,
            render: (text: any, record: any) => {
                return (
                    <Avatar src={text} size="small" color={'red'} style={{ marginRight: 4 }}>
                        {record?.user?.name || '-'}
                    </Avatar>
                );
            },
        },
        {
            title: '备注',
            dataIndex: 'remark',
            width: 180,
            render: (text: string) => {
                return text ? <Typography.Text ellipsis={{ showTooltip: true }}>{text}</Typography.Text> : '-';
            }
        },
        {
            title: '更新日期',
            width: 120,
            dataIndex: 'updated_at',
            render: (value: any) => {
                return dateFns.format(new Date(value), 'yyyy-MM-dd');
            },
        },
        {
            title: '创建日期',
            width: 120,
            dataIndex: 'created_at',
            render: (value: any) => {
                return dateFns.format(new Date(value), 'yyyy-MM-dd');
            },
        },
        {
            title: '操作',
            width: 90,
            dataIndex: 'id',
            render: (value: any, record: any) => {
                return <Space>
                    {/* <div><Button type="primary" icon={<IconShoppingBag />} aria-label="订单列表" /></div> */}
                    <Edit values={record} refresh={() => handlePageChange(currentPage)} />
                    <Popconfirm
                        title="确认删除吗？"
                        onConfirm={async () => await removes(value)}
                        position="leftBottom"
                    >
                        <div><Button type="danger" icon={<IconDelete />} aria-label="删除" /></div>
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

    const fetchData = async (currentPage = 1) => {
        setLoading(true);
        setPage(currentPage);
        setLoading(false);
        let res = await getData({ page: currentPage });
        setTotal(res.total);
        setData(res.data);
    };

    const handlePageChange = (page: number) => {
        fetchData(page);
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
        fetchData();
    }, []);

    return (
        <BasePage>
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

export default Data;
