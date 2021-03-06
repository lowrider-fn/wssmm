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

    $axios.onError((error) => ({ error }))

    // eslint-disable-next-line consistent-return
    $axios.interceptors.response.use((res) => {
        if (res.error) {
            const err = {
                code: res.error.response.status || -1,
                msg : res.error.response.data.message || res.error.message,
            }
            // console.log(err)

            return Promise.reject(err)
        }
        if (res) {
            return {
                data: {
                    data  : res.data || {},
                    status: res.status || -1,
                    msg   : res.data.message || '',
                },
            }
        }
    }, (err) => Promise.reject(err))
}
