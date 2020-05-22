
const nodemailer = require('nodemailer')

function sendMail(req, code, config) {
    // const setDescription = (text) => (text ? text.replace(/\n/g, ' ') : '')
    // const setAttachments = (files) => {
    //     if (files.length > 0) {
    //         return files.map((file) => {
    //             const splitedFile = file.split('/')
    //             return ({ path: `${__dirname}/../../../public/uploads/${splitedFile[splitedFile.length - 1]}` })
    //         })
    //     }
    //     return []
    // }

    const transporter = nodemailer.createTransport({
        host  : 'smtp.gmail.com',
        port  : 465,
        secure: true, // true for 465, false for other ports
        auth  : {
            user: config.email,
        },
    })

    const mail = {
        from   : 'With Soul SMM',
        to     : `${config.email}`,
        subject: 'Востановление пароля',
        text   : 'Текст отсутствует. Ошибка.',
        html   : `<h1>Здраствуйте, код востановления ${code}</h2>,
<br/><br/>
<p>With Soul SMM</p>`,
        // <p>Email: ${req.body.email}</p>
        // <p>Имя: ${req.body.fio}</p>
        // <p>Компания: ${req.body.company}</p>
        // <p>Тел: ${req.body.phone}</p>
        // <pre>Описание: ${setDescription(req.body.description)}</pre>

        // attachments: setAttachments(req.body.url),
    }

    transporter.sendMail(mail, (err, info) => {
        if (err) return console.error(err)
        console.log(`Email send: ${info.response}`)
    })
}

module.exports = (app, users, config) => {
    app.post('/restore',
        (req, res, next) => {
            if (Object.keys(req.body).length === 0) {
                res.status(500)
                    .send({ message: 'Данные отсутствуют' })
            } else {
                next()
            }
        },
        (req, res) => {
            users.findOne({ email: req.body.email }).then((doc) => {
                if (doc) {
                    const code = Math.floor(100000 + Math.random() * 900000).toString()

                    users.update(doc, { $set: { restoreCode: code } })

                    sendMail(req, code, config)

                    res.status(200)
                        .send({ message: `Проверьте вашу почту ${req.body.email}` })
                } else {
                    res.status(500)
                        .send({ message: 'Пользователь не найден' })
                }
            })
        })
}
