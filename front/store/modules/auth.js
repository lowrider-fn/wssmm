// import Api from '@/lib/axios'

const state = {
    isAuth: false,
}

const actions = {
    async users({ commit }, data) {
        try {
            const res = await this.app.api.users.get()
            return res
        } catch (err) {
            throw err
        }
    },
    // login: async ({ commit }, data) => {
    //     const { res, err } = await new Api().post('/login', data)

    //     if (res) {
    //         commit('LOGIN')
    //         return res
    //     }
    //     console.error(`${err}`)
    //     throw err
    // },

    // registration: async ({ commit }, data) => {
    //     const { res, err } = await new Api().post('/registration', data)

    //     if (res) {
    //         commit('LOGIN')
    //         return res
    //     }
    //     console.error(`${err}`)
    //     throw err
    // },

    // logout: async ({ commit }) => {
    //     const { res, err } = await new Api().post('/logout')
    //     if (res) {
    //         commit('LOGOUT')
    //         return res
    //     }
    //     console.error(`${err}`)
    //     throw err
    // },

    // checkLogin: async ({ commit }) => {
    //     const { res, err } = await new Api().get('/check')
    //     if (res) {
    //         commit('LOGIN')
    //     }
    // },
    // adminLogin: async ({ commit }, data) => {
    //     const { res, err } = await new Api().post('/admin-login', data)

    //     if (res) {
    //         commit('LOGIN')
    //         return res
    //     }
    //     console.error(`${err}`)
    //     throw err
    // },
}

const mutations = {
    LOGIN : state => state.isAuth = true,
    LOGOUT: state => state.isAuth = false,
}

const getters = {
    isAuth: state => state.isAuth,
}

export default {
    state,
    mutations,
    actions,
    getters,
}
