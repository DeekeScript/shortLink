import { IconBell, IconEdit, IconExit, IconLoading } from '@douyinfe/semi-icons';
import { Avatar, Button, Dropdown, Layout, Nav, Toast } from '@douyinfe/semi-ui';
import { useRouter, useSearchParams } from 'next/navigation';
import Edit from '../Password/Edit';
import { useState } from 'react';

const Headers = (props: any) => {
    const { Header } = Layout;
    const [visible, setVisible] = useState(false);
    const router = useRouter();
    return (
        <Header style={{ backgroundColor: 'var(--semi-color-bg-1)' }}>
            {visible && <Edit refresh={() => {
                localStorage.removeItem('access_token');
                router.push('/Login');
            }} setVisible={() => setVisible(false)} />}
            <Nav
                mode="horizontal"
                footer={
                    <>
                        <Button
                            theme="borderless"
                            icon={<IconBell size="large" />}
                            style={{
                                color: 'var(--semi-color-text-2)',
                                marginRight: '12px',
                            }}
                        />

                        <Dropdown
                            // trigger={'click'}
                            // showTick
                            position={'bottomLeft'}
                            render={
                                <Dropdown.Menu>
                                    <Dropdown.Item onClick={() => setVisible(!visible)} icon={<IconEdit />}>修改密码</Dropdown.Item>
                                    <Dropdown.Item onClick={() => {
                                        let id = Toast.info({
                                            icon: <IconLoading />,
                                            content: '正在退出···'
                                        });
                                        localStorage.removeItem('access_token');
                                        router.push('/Login');
                                        Toast.close(id);
                                    }} icon={<IconExit />}>退出登录</Dropdown.Item>
                                </Dropdown.Menu>
                            }
                        >
                            <Avatar color="orange" size="small">
                                {props?.user?.name}
                            </Avatar>
                        </Dropdown>
                    </>
                }
            ></Nav>
        </Header>
    );
};

export default Headers;
