const express = require('express')
const bodyParser = require('body-parser')
const { MongoClient } = require('mongodb')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const config = require('./config/config')
const auth = require('./routes/auth')

const app = express()

app.use(cors())
app.use(cookieParser())
app.use(bodyParser.json())

const mongo = new MongoClient(config.dbUrl, {
    useUnifiedTopology: true,
    useNewUrlParser   : true,
})

mongo.connect((err, database) => {
    if (err) return console.log(err)
    const users = database.db('wssmm').collection('users')

    auth(app, users, config)

    app.listen(config.port, () => {
        console.log(`Local: http://localhost:${config.port}`)
    })
})
