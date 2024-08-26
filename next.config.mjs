import semi from '@douyinfe/semi-next';

/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: ['@douyinfe/semi-ui', '@douyinfe/semi-icons', '@douyinfe/semi-illustrations'],
};

// 获取 semi 配置对象
const semiConfig = semi.default(nextConfig);

export default semiConfig;
