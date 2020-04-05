import baseURL from '~/api.config'

export default function ({ $axios }) {
    $axios.defaults.baseURL = `http://${baseURL.client}`
    $axios.defaults.timeout = 600000
    $axios.defaults.withCredentials = true

    if (process.server) {
        // eslint-disable-next-line global-require
        const https = require('https')
        const agent = new https.Agent({
            rejectUnauthorized: false,
        })
        $axios.defaults.baseURL = `http://${baseURL.server}`
        $axios.defaults.httpsAgent = agent
    }

    $axios.onError(error => ({ error }))

    // eslint-disable-next-line consistent-return
    $axios.interceptors.response.use((res) => {
        if (res.error) {
            const err = {
                code: res.error.code || -1,
                msg : res.error.message || '',
            }

            return Promise.reject(err)
        }
        if (res) {
            return {
                data: {
                    data  : res.data || {},
                    status: res.status || -1,
                    msg   : res.msg || '',
                },
            }
        }
    }, err => Promise.reject(err))
}
