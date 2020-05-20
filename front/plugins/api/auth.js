export const auth = ({ $get: get, $post: post }) => ({

    async login(data) {
        const result = await post('/auth//login', data)
        return result
    },
    async check() {
        const result = await get('/auth/check')
        return result
    },
    async logout() {
        const result = await get('/auth/logout')
        return result
    },
    async register(data) {
        const result = await post('/auth/register', data)
        return result
    },
    async restorePwd(data) {
        const result = await post('/auth/restore', data)
        return result
    },
    async updatePwd(data) {
        const result = await post('/auth/update', data)
        return result
    },
})
