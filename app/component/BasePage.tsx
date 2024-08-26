'use client';
import { Layout } from '@douyinfe/semi-ui';
import { useUser } from '../util/Hook';
import Footers from './Footers';
import Headers from './Headers';
import Navs from "./Navs";

const BasePage = ({ children }) => {
    const { Content } = Layout;
    const user = useUser('/Login', false);

    return (
        <Layout style={{ height: '100%' }}>
            <Navs user={user}></Navs>
            <Layout>
                <Headers user={user}></Headers>
                <Content
                    style={{
                        padding: '12px',
                       
                        backgroundColor: '#f9f9fa'
                    }}
                >
                    <div
                        style={{
                            borderRadius: '10px',
                            border: '1px solid var(--semi-color-border)',
                            height: 'auto',
                            backgroundColor: 'var(--semi-color-bg-0)',
                            padding: '24px',
                        }}
                    >
                        {children}
                    </div>
                </Content>
                <Footers></Footers>
            </Layout>
        </Layout>
    );
};

export default BasePage;