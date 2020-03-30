const auth = require('./auth')
const adminAuth = require('./admin_auth')

module.exports = (app, db, config) => {
    auth(app, db, config)
    adminAuth(app, db, config)

    app.get('/users', (req, res, next) => {
        console.log('ok')
        db.get('users').find()
            .then(db => res.status(200).cookie('wssmm', 'fuck', {
                httpOnly: false,
                expires : false,
            }).send(db))
            .catch(db => res.status(500).send(db))
    })

    app.post('/users', (req, res, next) => {
        console.log(req.body)
        const {
            name, phone, email, message,
        } = req.body

        db.get('users').insert({
            name,
            phone,
            email,
            message,
        }, (err, doc) => {
            if (err) {
                // If it failed, return error
                res.send('There was a problem adding the information to the database.')
            } else {
                db.get('users').find()
                    .then(db => res.status(200).send(db))
                    .catch(err => res.status(500).send(err))
            }
        })
    })
}
