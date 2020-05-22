const bcrypt = require('bcrypt')

module.exports = (app, users, config) => {
    app.post('/update',
        (req, res, next) => {
            if (Object.keys(req.body).length === 0) {
                res.status(500)
                    .send({ message: 'Данные отсутствуют' })
            } else {
                next()
            }
        },
        (req, res) => {
            users.findOne({ restoreCode: req.body.code }).then((doc) => {
                if (doc) {
                    bcrypt.compare(req.body.pwd, doc.pwd, (err, isMatch) => {
                        if (err) {
                            res.status(500)
                                .send({ message: `Error compare pwd: ${err}` })
                        }
                        if (isMatch) {
                            res.status(500)
                                .send({ message: 'Вы уже используете этот пароль' })
                        } else {
                            bcrypt.hash(req.body.pwd, config.salt, (err, hash) => {
                                if (err) {
                                    res.status(500)
                                        .send({ message: `Error hashing pwd: ${err}` })
                                }
                                users.update(doc, { $set: { pwd: hash, restoreCode: null } })
                                res.status(200)
                                    .send({ message: 'Пароль изменен' })
                            })
                        }
                    })
                } else {
                    res.status(500)
                        .send({ message: 'Веден неверный код' })
                }
            })
        })
}
