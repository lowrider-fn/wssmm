
export default {
    mode: 'universal',
    /*
  ** Headers of the page
  */
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
    /*
  ** Customize the progress-bar color
  */
    loading: false,
    /*
  ** Global CSS
  */
    css    : [
        { src: '~/assets/normalize.scss', lang: 'scss' },
    ],
    /*
  ** Plugins to load before mounting the App
  */
    // plugins: [
    //     { src: '~/plugins/axios.js' },
    // ],
    /*
  ** Nuxt.js dev-modules
  */
    buildModules: [
    ],
    /*
  ** Nuxt.js modules
  */
    modules: [
        '@nuxtjs/style-resources',
    ],
    /*
  ** Build configuration
  */
    styleResources: {
        scss: [
            '~/assets/vars.scss',
        ],
    },
    build: {
        modern  : true,
        parallel: true,
        vendor  : ['babel-polyfill'],
        postcss : {
            preset: {
                autoprefixer: {
                    grid: true,
                },
            },
        },
        /*
    ** You can extend webpack config here
    */
        extend(config, ctx) {
        },
    },
    serverMiddleware: [
        '~/api/index.js',
    ],
    // server: {
    //     port: 3000,
    //     host: '0.0.0.0',
    // },
};
