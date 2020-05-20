
const auth = async ({ store, redirect }) => {
    if (!store.getters['auth/IS_AUTH']) {
        await redirect({ name: 'auth' })
    }
}

export default auth
