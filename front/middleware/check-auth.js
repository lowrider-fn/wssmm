
const checkAuth = async ({ store, redirect, route }) => {
    console.log(route)

    await store.dispatch('checkAuth')
        .then(e => console.log('midl res', e))
        .catch(e => redirect('/auth/register'))
}

export default checkAuth
