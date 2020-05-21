
const jwt = require('jsonwebtoken')

module.exports = (app, users, config) => {
    app.get('/restore',
        (req, res, next) => {
            if (req.cookies.wssmm) {
                next()
            } else {
                res.status(500)
                    .send({ message: 'Ошибка доступа' })
            }
        },
        (req, res) => {
            const decoded = jwt.verify(req.cookies.wssmm, config.secret)
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
}
