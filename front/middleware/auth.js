
const auth = ({ store, redirect }) => {
    if (!store.getters['auth/IS_AUTH']) {
        redirect({ name: 'auth' })
    }
}

export default auth
