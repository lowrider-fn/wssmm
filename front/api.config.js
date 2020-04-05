
const baseUrl = {
    development: {
        server: 'localhost:3000/api',
        client: 'localhost:3000/api',
    },
    production: {
        server: 'localhost:3000/api',
        client: 'localhost/api',
    },
}

export default baseUrl[process.env.NODE_ENV]
