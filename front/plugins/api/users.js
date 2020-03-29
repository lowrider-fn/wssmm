export const users = ({ $get: get, $post: post }) => ({
    async get() {
        const result = await get('/users')
        return result
    },
})
