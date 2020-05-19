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

    plugins: [
        { src: '~/plugins/axios' },
        { src: '~/plugins/api' },
        { src: '~/plugins/vuelidate' },

    ],
    order: 'presetEnvAndCssnanoLast',
    css  : [
        { src: '~/assets/styles.scss', lang: 'scss' },
    ],

    styleResources: {
        scss: [
            '~/assets/vars.scss',
            '~/assets/mixins.scss',
        ],
    },

    middleware: [
        'check-auth',
    ],

    buildModules: [
    ],

    modules: [
        '@nuxtjs/style-resources',
        ['@nuxtjs/axios', { proxy: true }],
        '@nuxtjs/proxy',
    ],

    babel: {
        presets: ['@nuxt/babel-preset-app'],
    },

    build: {
        modern  : true,
        parallel: true,
        postcss : {

            preset: {
                autoprefixer: {
                    grid: 'autoplace',
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
