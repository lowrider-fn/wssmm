
const auth = async ({ store, redirect }) => {
    if (!store.getters['auth/IS_AUTH']) {
        redirect('/auth')
    }
}

export default auth
