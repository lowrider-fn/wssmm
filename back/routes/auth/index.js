const express = require('express')

const router = express.Router()

const check = require('./routes/check')
const login = require('./routes/login')
const logout = require('./routes/logout')
const register = require('./routes/register')
const restorePwd = require('./routes/restore-pwd')
const updatePwd = require('./routes/update-pwd')

module.exports = (app, db, config) => {
    check(router, db, config)
    login(router, db, config)
    logout(router, db, config)
    register(router, db, config)
    restorePwd(router, db, config)
    updatePwd(router, db, config)

    app.use('/auth', router)
}
