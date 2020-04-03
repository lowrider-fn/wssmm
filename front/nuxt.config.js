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
        { src: '~/plugins/axios' },
        { src: '~/plugins/api' },
        { src: '~/plugins/vuelidate' },

    ],
    buildModules: [
    ],
    modules: [
        '@nuxtjs/style-resources',
        ['@nuxtjs/axios', { proxy: true }],
        '@nuxtjs/proxy',
    ],
    styleResources: {
        scss: [
            '~/assets/vars.scss',
            '~/assets/mixins.scss',
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
            if (config.isClient) {
                config.devtool = '#source-map'
            }
        },
    },
    proxy: {
        '/api': {
            target     : 'http://back:7000',
            pathRewrite: {
                '^/api': '/',
            },
        },
    },
}
