const jwt = require('jsonwebtoken')

const jwtSign = (id, secret) => jwt.sign({ id }, secret)

const cookieConfig = {
    httpOnly: true,
    expires : false,
}

module.exports = (app, users, config) => {
    app.post('/login',
        (req, res, next) => {
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
}
