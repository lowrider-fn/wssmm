import { auth } from './auth'

export default ({ app }, inject) => {
    const api = () => ({
        auth: auth(app.$axios),
    })

    app.api = api()
}
