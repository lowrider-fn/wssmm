
const checkAuth = async ({ store, redirect, route }) => {
    store.dispatch('auth/checkAuth')
        .then(e => console.log('midl res', e))
        .catch(e => redirect('/auth'))
}

export default checkAuth
