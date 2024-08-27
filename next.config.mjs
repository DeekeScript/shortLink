import semi from '@douyinfe/semi-next';

/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: ['@douyinfe/semi-ui', '@douyinfe/semi-icons', '@douyinfe/semi-illustrations'],
    output: 'export',
    reactStrictMode: false,
};

const semiConfig = semi.default()(nextConfig);

export default semiConfig;
