const state = {
    isAuth: false,
}
const getters = {
    IS_AUTH: state => state.isAuth,
}
const actions = {
    // async users({ commit }, data) {
    //     try {
    //         const res = await this.app.api.users.get()
    //         return res
    //     } catch (err) {
    //         throw err
    //     }
    // },
    // async setUsers({ commit }, data) {
    //     try {
    //         const res = await this.app.api.users.post(data)
    //         return res
    //     } catch (err) {
    //         throw err
    //     }
    // },
    async login(store, data) {
        try {
            const res = await this.app.api.auth.login(data)
            if (res) {
                store.commit('LOGIN')
                return res
            }
        } catch (err) {
            store.dispatch('addErr', err.msg, { root: true })
            console.error(`${err}`)
            throw err
        }
    },

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

    async checkAuth(store) {
        try {
            const res = await this.app.api.auth.check()
            if (res) {
                store.commit('LOGIN')
                return res
            }
        } catch (err) {
            console.error(`${err}`)
            throw err
        }
    },
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

export default {
    state,
    mutations,
    actions,
    getters,
}
