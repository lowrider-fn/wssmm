const state = {
    isAuth: null,
    isLoad: false,
}

const getters = {
    IS_AUTH: (state) => state.isAuth,
    IS_LOAD: (state) => state.isLoad,
}

const mutations = {
    LOGIN         : (state) => state.isAuth = true,
    LOGOUT        : (state) => state.isAuth = false,
    TOGGLE_IS_LOAD: (state) => state.isLoad = !state.isLoad,
}

const actions = {
    async login(store, data) {
        store.commit('TOGGLE_IS_LOAD')
        try {
            const res = await this.app.api.auth.login(data)
            if (res) {
                store.commit('LOGIN')
                return res
            }
        } catch (err) {
            store.dispatch('notif/addErr', err.msg, { root: true })
            throw err
        } finally {
            store.commit('TOGGLE_IS_LOAD')
        }
    },
    async register(store, data) {
        store.commit('TOGGLE_IS_LOAD')
        try {
            const res = await this.app.api.auth.register(data)
            if (res) {
                store.commit('LOGIN')
                return res
            }
        } catch (err) {
            store.dispatch('notif/addErr', err.msg, { root: true })
            throw err
        } finally {
            store.commit('TOGGLE_IS_LOAD')
        }
    },
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

    // registration: async ({ commit }, data) => {
    //     const { res, err } = await new Api().post('/registration', data)

    //     if (res) {
    //         commit('LOGIN')
    //         return res
    //     }
    //     console.error(`${err}`)
    //     throw err
    // },
    async logout(store) {
        store.commit('TOGGLE_IS_LOAD')

        try {
            const res = await this.app.api.auth.logout()
            if (res) {
                store.commit('LOGOUT')
                return res
            }
        } catch (err) {
            console.error(`${err}`)
            throw err
        } finally {
            store.commit('TOGGLE_IS_LOAD')
        }
    },

    async checkAuth(store) {
        store.commit('TOGGLE_IS_LOAD')

        try {
            const res = await this.app.api.auth.check()
            if (res) {
                store.commit('LOGIN')
                return res
            }
        } catch (err) {
            store.commit('LOGOUT')

            console.error(`${err}`)
            throw err
        } finally {
            store.commit('TOGGLE_IS_LOAD')
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

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters,
}
