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
            users.findOne({ email: req.body.email }).then((doc) => {
                console.log(doc)

                if (doc) {
                    if (doc.pwd === req.body.pwd) {
                        const token = jwtSign(doc.id, config.secret)
                        users.update(doc, { $set: { authToken: token } })

                        res.status(200)
                            .cookie('wssmm', token, cookieConfig)
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
