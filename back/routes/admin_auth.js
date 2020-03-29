
const jwt = require('jsonwebtoken')

const jwtSign = (id, secret) => jwt.sign({ id }, secret, { expiresIn: 1000000000 })

const cookieConfig = {
    httpOnly: true,
    // secure  : true,
    expires : false,
    // signed  : true,
}

module.exports = (app, users, config) => {
    app.post('/admin-login',
        (req, res, next) => {
            console.log('/admin-login:', req.cookies)
            if (req.cookies.admin) {
                res.status(200).send({ err: 'Access Error' })
            } else if (req.cookies.test) {
                next()
            } else {
                res.status(200).send({ err: 'Access Error' })
            }
        },
        (req, res) => {
            const decoded = jwt.decode(req.cookies.test)
            users.find({ id: decoded.id }).toArray((err, results) => {
                if (results.length > 0) {
                    if (config.adminPwd === req.body.pwd) {
                        const token = jwtSign(results.id, config.adminSecret)
                        results.admin_token = token

                        res.status(200).cookie('admin', token, cookieConfig).send('OK')
                    } else {
                        res.status(200).send({ err: 'Passwords do not match' })
                    }
                } else {
                    res.status(200).send({ err: 'User not found' })
                }
            })
        })
}
