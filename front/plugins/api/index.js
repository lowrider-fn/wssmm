import { users } from './users'

export default ({ app }, inject) => {
    const api = () => ({
        users: users(app.$axios),
    })

    app.api = api()
}
