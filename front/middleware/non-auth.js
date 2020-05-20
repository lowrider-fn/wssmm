
const nonAuth = async ({ store, redirect }) => {
    if (store.getters['auth/IS_AUTH']) {
        console.log('ok')

        await redirect({ name: 'profile' })
    }
}

export default nonAuth
