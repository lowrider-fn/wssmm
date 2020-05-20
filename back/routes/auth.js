/* eslint-disable camelcase */
const jwt = require('jsonwebtoken')

const jwtSign = (id, secret) => jwt.sign({ id }, secret)

const cookieConfig = {
    httpOnly: true,
    // secure  : true,
    expires : false,
    // signed  : true,
}

module.exports = (app, users, config) => {
    app.get('/check',
        (req, res, next) => {
            console.log('/check:', req.cookies)
            if (req.cookies.gmwc) {
                next()
            } else {
                res.status(500)
                    .send({ message: 'Ошибка доступа' })
            }
        },
        (req, res) => {
            const decoded = jwt.verify(req.cookies.gmwc, config.secret)
            console.log('check:', decoded)

            users.find({ id: decoded.id }).toArray((err, results) => {
                if (results.length > 0) {
                    res.status(200)
                        .send({ message: 'Вход совершен' })
                } else {
                    res.status(500)
                        .send({ message: 'Пользователь не найден' })
                }
            })
        })

    app.post('/login',
        (req, res, next) => {
            console.log('/login:', Object.keys(req.body))

            if (req.cookies.gwmc) {
                res.status(500)
                    .send({ message: 'Вход уже совершен' })
            } else if (Object.keys(req.body).length === 0) {
                res.status(500)
                    .send({ message: 'Данные отсутствуют' })
            } else {
                next()
            }
        },
        (req, res) => {
            users.find({ email: req.body.email }).toArray((err, results) => {
                if (results.length > 0) {
                    console.log(results)

                    if (results[0].pwd === req.body.pwd) {
                        const token = jwtSign(results[0].id, config.secret)
                        results[0].authToken = token
                        res.status(200)
                            .cookie('gmwc', token, cookieConfig)
                            .send({ message: 'Вход совершен' })
                    } else {
                        res.status(500)
                            .send({ message: 'Пароли не совпадают' })
                    }
                } else {
                    res.status(500)
                        .send({ message: 'Пользователь не найден' })
                }
            })
        })

    app.get('/logout',
        (req, res, next) => {
            if (req.cookies.gmwc) {
                next()
            } else {
                res.status(500).send({ message: 'Ошибка выхода' })
            }
        },
        (req, res) => {
            const decoded = jwt.verify(req.cookies.gmwc, config.secret)
            users.find({ id: decoded.id }).toArray((err, results) => {
                console.log('logout:', decoded.id, results)
                if (results.length > 0) {
                    results[0].token = null
                    res.status(200)
                        .clearCookie('gmwc')
                        .send({ message: 'Выход совершен' })
                } else {
                    res.status(500)
                        .send({ message: 'Пользователь не найден' })
                }
            })
        })

    app.post('/register',
        (req, res, next) => {
            if (req.cookies.gmwc) {
                res.status(500)
                    .send({ message: 'Вход уже совершен' })
            } else if (Object.keys(req.body).length === 0) {
                res.status(500)
                    .send({ message: 'Данные отсутствуют' })
            } else {
                next()
            }
        },
        (req, res) => {
            const user = req.body
            const { pwd, pwdConfirm, email } = user

            if (pwd === pwdConfirm) {
                const id = `f${(~~(Math.random() * 1e8)).toString(16)}`

                const token = jwtSign(id, config.secret)
                user.authToken = token
                user.id = id
                users.find({ email }).toArray((err, results) => {
                    console.log('results', email)
                    if (results.length > 0) {
                        res.status(500)
                            .send({ message: 'Пользователь с такой почтой уже существует' })
                    } else {
                        users.insertOne(user, (error, result) => {
                            console.log('users', result)

                            if (error) {
                                console.log('error inser database', error)
                                res.status(500)
                                    .send({ err: `Error insert db, ${error}` })
                            } else {
                                res.status(200)
                                    .cookie('gmwc', token, cookieConfig)
                                    .send({ message: 'Вход совершен' })
                            }
                        })
                    }
                })
            } else {
                res.status(500).send({ message: 'Пароли не совпадают' })
            }
        })
}
