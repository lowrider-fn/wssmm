export default {
    mode: 'universal',
    head: {
        title: process.env.npm_package_name || '',
        meta : [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        ],
    },
    loading: false,
    css    : [
        { src: '~/assets/normalize.scss', lang: 'scss' },
    ],
    plugins: [
        { src: '~/plugins/axios.js' },
        { src: '~/plugins/api' },
    ],
    buildModules: [
    ],
    modules: [
        '@nuxtjs/style-resources',
        '@nuxtjs/axios',
        '@nuxtjs/proxy',
    ],
    styleResources: {
        scss: [
            '~/assets/vars.scss',
        ],
    },
    babel: {
        presets: ['@nuxt/babel-preset-app'],
    },
    build: {
        modern  : true,
        parallel: true,
        postcss : {
            preset: {
                autoprefixer: {
                    grid: true,
                },
            },
        },
        extend(config, ctx) {

        },
    },
    proxy: {
        '/api': {
            target     : 'http://localhost:7000',
            pathRewrite: {
                '^/api': '/',
            },
        },

    },
}
