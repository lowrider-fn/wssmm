
const checkAuth = async ({ store, redirect }) => {
    if (store.getters['auth/IS_AUTH'] === null) {
        await store.dispatch('auth/checkAuth')
            .catch(e => redirect('/auth'))
    }
}

export default checkAuth
