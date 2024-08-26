import { IconHistogram, IconHome, IconLink, IconSemiLogo, IconSetting, IconUser, IconGithubLogo, IconUserGroup } from '@douyinfe/semi-icons';
import { Layout, Nav } from '@douyinfe/semi-ui';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';


const Navs = (props: any) => {
    const { Sider } = Layout;
    const router = useRouter();
    const pathname = usePathname();

    const [selectedKey, setSelectedKey] = useState(pathname.substring(1) || 'Home');

    return <Sider style={{ backgroundColor: 'rgb(242, 242, 244)' }}>
        <Nav
            defaultSelectedKeys={[selectedKey]}
            selectedKeys={[selectedKey]}
            style={{ maxWidth: 220, height: '100%', backgroundColor: 'var(--color-fill-0)' }}
            items={[
                { itemKey: 'Home', text: '首页', icon: <IconHome size="large" /> },
                { itemKey: 'Data', text: '基础数据', icon: <IconHistogram size="large" /> },
                { itemKey: 'Project', text: '广告管理', icon: <IconGithubLogo size="large" /> },
                { itemKey: 'Custom', text: '客户管理', icon: <IconUserGroup size="large" /> },
                { itemKey: 'ShortLink', text: '短链管理', icon: <IconLink size="large" /> },
                { itemKey: 'Account', text: '账号管理', icon: <IconUser size="large" /> },
                { itemKey: 'Setting', text: '系统设置', icon: <IconSetting size="large" /> },
            ]}
            header={{
                logo: <IconSemiLogo style={{ fontSize: 36 }} />,
                text: '壹择短链',
                style: { paddingBottom: '12px' }
            }}
            footer={{
                collapseButton: true,
            }}
            onSelect={(v) => { router.push('/' + v.itemKey); }}
        />
    </Sider>
}

export default Navs;
