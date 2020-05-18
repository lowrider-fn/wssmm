export const auth = ({ $get: get, $post: post }) => ({

    async login(data) {
        const result = await post('/login', data)
        return result
    },
    async check() {
        const result = await get('/check')
        return result
    },
    async logout() {
        const result = await get('/logout')
        return result
    },
    async rester(data) {
        const result = await post('/restration', data)
        return result
    },
    async forgotPwd(data) {
        const result = await post('/restration', data)
        return result
    },
    async updatePwd(data) {
        const result = await post('/restration', data)
        return result
    },
})
