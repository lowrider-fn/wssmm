
const nonAuth = async ({ store, redirect }) => {
    if (store.getters['auth/IS_AUTH']) {
        redirect('/')
    }
}

export default nonAuth
