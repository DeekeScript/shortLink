'use client';
import { IconClock, IconCode, IconDelete, IconDuration, IconQrCode } from '@douyinfe/semi-icons';
import { Avatar, Banner, Button, CodeHighlight, Divider, Modal, Popconfirm, Space, Table, Tag, TextArea, Toast } from '@douyinfe/semi-ui';
import * as dateFns from 'date-fns';
import { useEffect, useState } from 'react';
import BasePage from '../Component/BasePage';
import Search from '../Component/Search';
import Edit from './Edit';
import { getList, remove } from './Fetch';

const ShortLink = () => {
    const [values, setValues] = useState<any>({});

    const columns = [
        {
            title: '标题',
            dataIndex: 'title',
            search: true,
            render: (text: any, record: any) => `${record.title}`,
            onFilter: (value: string, record: any) => record.title.includes(value),
        },
        {
            title: '广告标题',
            dataIndex: 'project_title',
            search: true,
            render: (text: any, record: any) => `${record?.project?.title}`,
        },
        {
            title: '短链',
            dataIndex: 'url',
            search: true,
            render: (text: any) => <a target='_blank' href={text}>{text}</a>,
        },
        {
            title: '备注',
            search: true,
            dataIndex: 'remark',
            render: (text: any) => <a target='_blank' href={text}>{text}</a>,
        },
        {
            title: '状态',
            dataIndex: 'status',
            render: (text: string | number) => {
                const tagConfig: any = {
                    1: { color: 'pink', prefixIcon: <IconDuration />, text: '已投放' },
                    0: { color: 'cyan', prefixIcon: <IconClock />, text: '待投放' },
                };
                const tagProps = tagConfig[text] || {};
                return <Tag shape='circle' {...tagProps} style={{ userSelect: 'text' }}>{tagProps.text}</Tag>
            }
        },
        {
            title: '所有者',
            dataIndex: 'name',
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
            dataIndex: 'created_at',
            search: true,
            type: 'dateRange',
            sorter: (a: any, b: any) => (a.updateTime - b.updateTime > 0 ? 1 : -1),
            render: (value: any) => {
                return dateFns.format(new Date(value), 'yyyy-MM-dd');
            },
        },
        {
            title: '操作',
            width: 170,
            dataIndex: 'id',
            render: (value: number, record: any) => {
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
                    <Button onClick={() => {
                        Modal.success({
                            title: '企微获客二维码',
                            content: <div style={{ paddingTop: '12px' }}><img src={record.qiwei_qrcode} width={200} /></div>,
                            width: 240,
                            cancelButtonProps: { "hidden": true }
                        });
                    }} type="secondary" icon={<IconQrCode />} aria-label="企微二维码" />

                    <Button onClick={() => {
                        const html = "<div>\n    <img src='" + record.url + "?type=0' width=0 height=0 />" +
                            "\n    <a target='_blank' href='" + record.url + "?type=1'>" + record?.project?.title + "</a>\n</div>";
                        const html_show = <div>
                            <img src={record.url} width={0} height={0} />
                            <a target='_blank' style={{ textDecoration: 'underline', color: '#0000FF' }} href={record.url + '?type=1'}>{record?.project?.title}</a>
                        </div>

                        const html_show_qiwei = <div>
                            <img src={record.url} width={0} height={0} />
                            <a target='_blank' style={{ textDecoration: 'underline', color: '#0000FF' }} href={record.url + '?type=2'}>{record?.project?.title}</a>
                        </div>

                        Modal.success({
                            width: 800,
                            title: '广告代码', content: <div>
                                <TextArea defaultValue={html} /><Divider style={{ margin: '12px 0' }} />
                                {html_show}
                                <Banner
                                    style={{ margin: '12px 0' }}
                                    type="info"
                                    description="默认广告链接会进入对应广告配置的地址，如果想直接进入企业微信二维码界面，请将<a>标签内的type改为2即可，效果如下："
                                    closeIcon={null}
                                />
                                {html_show_qiwei}
                            </div>,
                        });
                    }} type="secondary" icon={<IconCode />} aria-label="广告代码" />
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
