export const users = ({ $get: get, $post: post }) => ({
    async get() {
        const result = await get('/users')
        return result
    },
    async post(data) {
        const result = await post('/users', data)
        return result
    },
})
