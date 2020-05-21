const jwt = require('jsonwebtoken')

module.exports = (app, users, config) => {
    app.get('/logout',
        (req, res, next) => {
            if (req.cookies.wssmm) {
                next()
            } else {
                res.status(500).send({ message: 'Ошибка выхода' })
            }
        },
        (req, res) => {
            const decoded = jwt.verify(req.cookies.wssmm, config.secret)
            users.findOne({ id: decoded.id }).then((doc) => {
                if (doc) {
                    users.update(doc, { $set: { authToken: null } })
                    res.status(200)
                        .clearCookie('wssmm')
                        .send({ message: 'Выход совершен' })
                } else {
                    res.status(500)
                        .send({ message: 'Пользователь не найден' })
                }
            })
        })
}
