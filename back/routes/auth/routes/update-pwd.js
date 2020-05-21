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
            const { pwd, code } = req.body
            users.findOne({ restoreCode: code }).then((doc) => {
                if (doc && pwd !== doc.pwd) {
                    users.update(doc, { $set: { pwd, restoreCode: null } })

                    res.status(200)
                        .send({ message: 'Пароль изменен' })
                } else {
                    res.status(500)
                        .send({ message: 'Веден неверный код' })
                }
            })
        })
}
