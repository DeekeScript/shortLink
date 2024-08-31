'use client';
import { useEffect, useState } from "react";
import BasePage from "../Component/BasePage";
import { ISpec, default as VChart } from '@visactor/vchart';
import { Card, Descriptions, Select, Space, Tag } from "@douyinfe/semi-ui";
import Option from "@douyinfe/semi-ui/lib/es/select/option";
import { idTitle, shortLinkIdTitle, statistic } from "./Fetch";

const Home = () => {
    const [projectId, setProjectId] = useState(0);
    const [shortLinkId, setShortLinkId] = useState(0);

    const [projectTitle, setProjectTitle] = useState([]);
    const [shortLinkTitle, setShortLinkTitle] = useState([]);
    const [vchartInstance, setVchartInstance] = useState<VChart>();

    const [todayData, setTodayData] = useState([
        { key: '30日展示量', value: 0 },
        { key: '30日点击量', value: 0 },
        { key: '30日咨询量', value: 0 },
        // { key: '30日成交订单', value: '0单' },
        // { key: '30日成交金额', value: '0.00元' },
    ]);

    const [sevenData, setSevenData] = useState([
        { key: '7日展示量', value: 0 },
        { key: '7日点击量', value: 0 },
        { key: '7日咨询量', value: 0 },
        // { key: '7日成交订单', value: '0单' },
        // { key: '7日成交金额', value: '0.00元' },
    ]);

    const [monthData, setMonthData] = useState([
        { key: '今日展示量', value: 0 },
        { key: '今日点击量', value: 0 },
        { key: '今日咨询量', value: 0 },
        // { key: '今日成交订单', value: '0单' },
        // { key: '今日成交金额', value: '0.00元' },
    ]);

    const setValues = (base: any, values: any) => {
        base[0]['value'] = values?.show_count || 0;
        base[1]['value'] = values?.click_count || 0;
        base[2]['value'] = values?.chat_count || 0;
        // base[3]['value'] = (values?.deal_count || 0) + '单';
        // base[4]['value'] = (values?.total_price || 0) + '元';
        return base;
    }

    const projectTitles = async () => {
        let res = await idTitle({});
        if (res.code == 0) {
            setProjectTitle(res.data);
        }
    }

    const shortLinkTitles = async () => {
        let res = await shortLinkIdTitle({ project_id: projectId });
        if (res.code == 0) {
            setShortLinkTitle(res.data);
        }
    }

    const getStatistic = async () => {
        let params = {
            project_id: projectId,
            short_link_id: shortLinkId,
        }

        const res = await statistic(params);
        if (res.code == 0) {
            let data: any = {
                show_count: [],
                click_count: [],
                chat_count: [],
            }

            setMonthData(setValues(monthData, res.monthData));
            setSevenData(setValues(sevenData, res.sevenData));
            setTodayData(setValues(todayData, res.todayData));

            for (let i in res.data) {
                data['show_count'].push({ x: i.substring(5, 10), type: '展示量', y: res.data[i]['show_count'] });
                data['click_count'].push({ x: i.substring(5, 10), type: '点击量', y: res.data[i]['click_count'] });
                data['chat_count'].push({ x: i.substring(5, 10), type: '咨询量', y: res.data[i]['chat_count'] });
                // data['deal_count'].push({ x: i, type: '成交量', y: res.data[i]['deal_count'] });
            }

            const spec: ISpec = {
                type: 'common',
                seriesField: 'color',
                data: [
                    {
                        id: 'id1',
                        values: data['show_count']
                    },
                    {
                        id: 'id2',
                        values: data['click_count']
                    },
                    {
                        id: 'id3',
                        values: data['chat_count']
                    },
                    // {
                    //     id: 'id4',
                    //     values: data['deal_count']
                    // }
                ],
                series: [
                    {
                        type: 'line',
                        dataIndex: 0,
                        seriesField: 'type',
                        xField: 'x',
                        yField: 'y',
                        stack: false,
                        animationAppear: {
                            // 点图元动画配置
                            point: {
                                type: 'moveIn',
                                options: { direction: 'y' },
                                easing: 'bounceOut',
                                duration: 1000
                            },
                            // 线图元动画配置
                            line: {
                                duration: 1500,
                                delay: 1000,
                                easing: 'cubicOut'
                            }
                        }
                    },
                    {
                        type: 'line',
                        dataIndex: 1,
                        seriesField: 'type',
                        xField: 'x',
                        yField: 'y',
                        stack: false,
                        animationAppear: {
                            // 点图元动画配置
                            point: {
                                type: 'moveIn',
                                options: { direction: 'y' },
                                easing: 'bounceOut',
                                duration: 1000
                            },
                            // 线图元动画配置
                            line: {
                                duration: 1500,
                                delay: 1000,
                                easing: 'cubicOut',
                            }
                        }
                    },
                    {
                        type: 'line',
                        dataIndex: 2,
                        seriesField: 'type',
                        xField: 'x',
                        yField: 'y',
                        stack: false,
                        animationAppear: {
                            // 点图元动画配置
                            point: {
                                type: 'moveIn',
                                options: { direction: 'y' },
                                easing: 'bounceOut',
                                duration: 1000
                            },
                            // 线图元动画配置
                            line: {
                                duration: 1500,
                                delay: 1000,
                                easing: 'cubicOut',
                            }
                        }
                    }
                ],
                axes: [{ orient: 'left' }, { orient: 'bottom', label: { visible: true }, type: 'band' }],
                legends: {
                    visible: true,
                    orient: 'bottom'
                }
            };

            if (!vchartInstance) {
                const vchart = new VChart(spec, { dom: "chart" });
                setVchartInstance(vchart);
                vchart.renderSync();
                console.log(11);
            } else {
                console.log(22);
                vchartInstance.updateSpec(spec);
            }
        }
    }

    let show = false;
    useEffect(() => {
        if (show) {
            return;
        }
        projectTitles();
        shortLinkTitles();

        getStatistic();
        show = true;
    }, [shortLinkId]);

    const style = {
        marginRight: '10px',
    };

    const change = async (v: any) => {
        setProjectId(v);
        setShortLinkId(0);
        await shortLinkTitles();
        await getStatistic();
    }

    const changeLink = (v: any) => {
        setShortLinkId(v);
    }

    return (
        <BasePage>
            <div>
                <Select value={projectId} onChange={change}>
                    <Option value={0}>全部广告</Option>
                    {projectTitle.map((option: { id: number, title: string }) => (
                        <Option value={option.id} key={option.id}>
                            {option.title}
                        </Option>
                    ))}
                </Select>

                <Select value={shortLinkId} style={{ marginLeft: '12px' }} onChange={changeLink}>
                    <Option value={0}>全部短链</Option>
                    {shortLinkTitle.map((option: { id: number, title: string }) => (
                        <Option value={option.id} key={option.id}>
                            {option.title}
                        </Option>
                    ))}
                </Select>
            </div>

            <div style={{ marginTop: '12px' }}>
                <Space>
                    <Card shadows='always' style={style}>
                        <Descriptions align="center" data={todayData} />
                    </Card>
                    <Card shadows='always' style={style}>
                        <Descriptions align="justify" data={sevenData} />
                    </Card>
                    <Card shadows='always' style={style}>
                        <Descriptions align="left" data={monthData} />
                    </Card>
                </Space>
            </div>

            <div id="chart" style={{ height: '500px', marginTop: '12px' }}></div>
        </BasePage>
    );
}

export default Home;
