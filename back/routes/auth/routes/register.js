const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const jwtSign = (id, secret) => jwt.sign({ id }, secret)

const cookieConfig = {
    httpOnly: true,
    expires : false,
}

module.exports = (app, users, config) => {
    app.post('/register',
        (req, res, next) => {
            if (req.cookies.wssmm) {
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
            const id = `f${(~~(Math.random() * 1e8)).toString(16)}`
            const token = jwtSign(id, config.secret)

            user.authToken = token
            user.restoreCode = null
            user.id = id

            users.findOne({ email: user.email }).then((doc) => {
                if (doc) {
                    res.status(500)
                        .send({ message: 'Пользователь с такой почтой уже существует' })
                } else {
                    bcrypt.hash(user.pwd, config.salt, (err, hash) => {
                        if (err) {
                            res.status(500)
                                .send({ message: `Error hashing pwd: ${err}` })
                        }
                        user.pwd = hash
                        users.insertOne(user, (err, result) => {
                            console.log(result)

                            if (err) {
                                res.status(500)
                                    .send({ message: `Error insert db, ${err}` })
                            } else {
                                res.status(200)
                                    .cookie('wssmm', token, cookieConfig)
                                    .send({ message: 'Вход совершен' })
                            }
                        })
                    })
                }
            })
                .catch((err) => console.error(err))
        })
}
