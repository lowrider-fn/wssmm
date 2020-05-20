const jwt = require('jsonwebtoken')

module.exports = (app, users, config) => {
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
}
