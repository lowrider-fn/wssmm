const auth = require('./auth')
const adminAuth = require('./admin_auth')

module.exports = (app, db, config) => {
    auth(app, db, config)
    adminAuth(app, db, config)

    // app.get('/users', (req, res, next) => {
    //     console.log('ok')

    //     db.find().toArray((err, results) => {
    //         res.status(200).cookie('wssmm', 'fuck', {
    //             httpOnly: false,
    //             expires : false,
    //         }).send(results)
    //     })
    // })

    // app.post('/users', (req, res, next) => {
    //     console.log(req.body)
    //     db.insertOne(req.body, (error, result) => {
    //         if (error) {
    //             console.log('error inser database', error)
    //             res.status(500).send(error)
    //         } else {
    //             db.find().toArray((err, results) => {
    //                 res.status(200).send(results)
    //             })
    //         }
    //     })
    // })
}
