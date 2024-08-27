'use client';
import { IconDelete, IconEyeOpened, IconLikeHeart } from '@douyinfe/semi-icons';
import { Avatar, Button, Popconfirm, Space, Table, Tag, Toast, Typography } from '@douyinfe/semi-ui';
import * as dateFns from 'date-fns';
import { useEffect, useState } from 'react';
import BasePage from '../component/BasePage';
import { getList, remove } from './Fetch';

const Data = () => {
    const columns = [
        {
            title: '广告标题',
            dataIndex: 'project_id',
            width: 150,
            render: (text: any, record: any) => `${record?.project?.title}`,
        },
        {
            title: '短链',
            width: 120,
            dataIndex: 'short_link_id',
            render: (text: any, record: any) => <a target='_blank' href={record?.short_link?.url}>{record?.short_link?.url}</a>,
        },
        {
            title: '点击来源',
            width: 120,
            dataIndex: 'from_url',
            render: (text: any) => <a target='_blank' href={text}>{text}</a>,
        },
        {
            title: '类型',
            width: 80,
            dataIndex: 'type',
            render: (text: string | number) => {
                const tagConfig: any = {
                    1: { color: 'pink', prefixIcon: <IconLikeHeart />, text: '点击' },
                    0: { color: 'cyan', prefixIcon: <IconEyeOpened />, text: '展示' },
                };
                const tagProps = tagConfig[text] || {};
                return <Tag shape='circle' {...tagProps} style={{ userSelect: 'text' }}>{tagProps.text}</Tag>
            }
        },
        {
            title: 'User-Agent',
            dataIndex: 'user_agent',
            ellipsis: true,
            width: 150,
            render: (text: any) => <Typography.Text ellipsis={{ showTooltip: true }}>{text}</Typography.Text>,
        },
        {
            title: '所有者',
            dataIndex: 'user_id',
            width: 80,
            render: (text: any, record: any) => {
                return (
                    <Avatar size="small" color={'red'} style={{ marginRight: 4 }}>
                        {record?.user?.name || '-'}
                    </Avatar>
                );
            },
        },
        {
            title: '操作时间',
            width: 120,
            dataIndex: 'from_time_at',
            render: (value: any) => {
                return dateFns.format(new Date(value), 'yyyy-MM-dd HH:mm:ss');
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
            width: 60,
            dataIndex: 'id',
            render: (value: any, record: any) => {
                return <Space>
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
