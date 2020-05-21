const jwt = require('jsonwebtoken')

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
            const { pwd, pwdConfirm, email } = user

            if (pwd === pwdConfirm) {
                const id = `f${(~~(Math.random() * 1e8)).toString(16)}`
                const token = jwtSign(id, config.secret)
                user.authToken = token
                user.id = id
                users.find({ email }).toArray((err, results) => {
                    if (results.length > 0) {
                        res.status(500)
                            .send({ message: 'Пользователь с такой почтой уже существует' })
                    } else {
                        users.insertOne(user, (error, result) => {
                            if (error) {
                                console.log('error inser database', error)
                                res.status(500)
                                    .send({ err: `Error insert db, ${error}` })
                            } else {
                                res.status(200)
                                    .cookie('wssmm', token, cookieConfig)
                                    .send({ message: 'Вход совершен' })
                            }
                        })
                    }
                })
            } else {
                res.status(500)
                    .send({ message: 'Пароли не совпадают' })
            }
        })
}
