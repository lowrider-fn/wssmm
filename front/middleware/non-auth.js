
const nonAuth = ({ store, redirect }) => {
    if (store.getters['auth/IS_AUTH']) {
        redirect({ name: 'profile' })
    }
}

export default nonAuth
