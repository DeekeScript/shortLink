import { Layout } from '@douyinfe/semi-ui';
import IconLogo from '../../public/logo.svg';

const Footers = () => {
    const { Footer } = Layout;
    return (
        <Footer
            style={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: '20px',
                color: 'var(--semi-color-text-2)',
                backgroundColor: 'rgba(var(--semi-grey-0), 1)',
            }}
        >
            <span
                style={{
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                <IconLogo size="large" style={{ marginRight: '8px' }} />
                <span>Copyright © 2024 壹择科技. All Rights Reserved. </span>
            </span>
        </Footer>
    );
};

export default Footers;
