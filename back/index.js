const express = require('express')
const bodyParser = require('body-parser')
const config = require('./config/config')
const { MongoClient } = require('mongodb')
const cookieParser = require('cookie-parser')
const cors = require('cors')

const port = 7000
const app = express()

app.use(cors({ credentials: true }))
app.use(cookieParser())
app.use(bodyParser.json())

const mongo = new MongoClient(config.dbUrl, {
    useUnifiedTopology: true,
    useNewUrlParser   : true,
})

mongo.connect((err, database) => {
    if (err) return console.log(err)

    const users = database.db('users').collection('users')

    require('./routes')(app, users, config)

    app.listen(port, () => console.log(`Local: http://localhost:${port}`))
})
