/* eslint-disable camelcase */
const jwt = require('jsonwebtoken')

const jwtSign = (id, secret) => jwt.sign({ id }, secret, { expiresIn: 1000000000 })

const cookieConfig = {
    httpOnly: true,
    // secure  : true,
    expires : false,
    signed  : true,
}

module.exports = (app, users, config) => {
    app.get('/check',
        (req, res, next) => {
            console.log('/check:', req.cookies)
            if (req.cookies.test) {
                next()
            } else {
                res.status(500).send({ message: 'Ошибка доступа' })
            }
        },
        (req, res) => {
            const decoded = jwt.decode(req.cookies.test)

            users.find({ id: decoded.id }).toArray((err, results) => {
                if (results.length > 0) {
                    res.status(200).send('OK')
                } else {
                    res.status(500).send({ message: 'Пользователь не найден' })
                }
            })
        })

    app.post('/login',
        (req, res, next) => {
            console.log('/login:', req.cookie)
            if (req.cookies.test) {
                res.status(500).send({ message: 'Вход уже совершен' })
            } else {
                next()
            }
        },
        (req, res) => {
            users.find({ email: req.body.email }).toArray((err, results) => {
                if (results.length > 0) {
                    if (results[0].pwd === req.body.pwd) {
                        const token = jwtSign(results.id, config.secret)
                        results.auth_token = token

                        res.status(200).cookie('test', token, cookieConfig).send('OK')
                    } else {
                        res.status(500).send({ message: 'Пароли не совпадают' })
                    }
                } else {
                    res.status(500).send({ message: 'Пользователь не найден' })
                }
            })
        })

    app.get('/logout',
        (req, res, next) => {
            console.log('/logout:', req.cookies.test)
            if (req.cookies.test) {
                next()
            } else {
                res.status(200).send({ err: 'Logot Error' })
            }
        },
        (req, res) => {
            const decoded = jwt.decode(req.cookies.test)

            users.find({ id: decoded.id }).toArray((err, results) => {
                results.token = null
                res.status(200).clearCookie('test').send('OK')
            })
        })

    app.post('/register',
        (req, res, next) => {
            console.log('/registration:', req.body)
            if (req.cookies.test) {
                res.status(200).send({ err: 'You are already logged in' })
            } else {
                next()
            }
        },
        (req, res) => {
            const user = req.body
            const { pwd, pwd_confirm } = user

            if (pwd === pwd_confirm) {
                const id = `f${(~~(Math.random() * 1e8)).toString(16)}`
                user.id = id

                const token = jwtSign(id, config.secret)
                user.auth_token = token

                users.find({ email: req.body.email }).toArray((err, results) => {
                    if (results.length > 0) {
                        res.status(200).send({ err: 'Email is busy' })
                    } else {
                        users.insertOne(user, (error, result) => {
                            if (error) {
                                console.log('error inser database', error)
                                res.status(200).send({ err: 'There was a problem registering the user' })
                            } else {
                                res.status(200).cookie('test', token, cookieConfig).send('OK')
                            }
                        })
                    }
                })
            } else {
                res.status(200).send({ err: 'Passwords do not match' })
            }
        })
}
