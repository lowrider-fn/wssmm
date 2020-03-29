const auth = require('./auth')
const adminAuth = require('./admin_auth')

const users = [
    { name: 'Alexandre' },
    { name: 'Pooya' },
    { name: 'Sébastien' },
    { name: 'Vasya' },
]

module.exports = (app, db, config) => {
    auth(app, db, config)
    adminAuth(app, db, config)

    app.get('/users', (req, res, next) => {
        res.status(200).cookie('wssmm', 'fuck', {
            httpOnly: false,
            expires : false,
        }).send(users)
    })
}
