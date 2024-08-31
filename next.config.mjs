import semi from '@douyinfe/semi-next';

/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: ['@douyinfe/semi-ui', '@douyinfe/semi-icons', '@douyinfe/semi-illustrations'],
    output: 'export',
    reactStrictMode: false,
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: [
                {
                    loader: '@svgr/webpack',
                    options: {
                        icon: true, // 如果你希望生成的组件被作为一个图标来使用
                    },
                },
            ],
        });

        return config;
    },
};

const semiConfig = semi.default()(nextConfig);

export default semiConfig;
