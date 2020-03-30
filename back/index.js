const express = require('express')
const bodyParser = require('body-parser')
const config = require('./config/config')
const cookieParser = require('cookie-parser')

const db = require('monk')(config.dbUrl)
const cors = require('cors')

const port = 7000
const app = express()

app.use(cors({ credentials: true }))
app.use(cookieParser())
app.use(bodyParser.json())

db
    .then(() => {
        require('./routes')(app, db, config)
        app.listen(port, () => console.log(`Local: http://localhost:${port}`))
        console.log('Connected correctly to server')
    })
    .catch(err => console.log(`Connected incorrectly to server: ${err}`))
