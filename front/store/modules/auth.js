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
            store.commit('LOGIN')
            return res
        } catch (err) {
            store.dispatch('notifs/addErr', err.msg, { root: true })
            throw err
        } finally {
            store.commit('TOGGLE_IS_LOAD')
        }
    },
    async register(store, data) {
        store.commit('TOGGLE_IS_LOAD')
        try {
            const res = await this.app.api.auth.register(data)
            store.commit('LOGIN')
            return res
        } catch (err) {
            store.dispatch('notifs/addErr', err.msg, { root: true })
            throw err
        } finally {
            store.commit('TOGGLE_IS_LOAD')
        }
    },
    async restore(store, data) {
        store.commit('TOGGLE_IS_LOAD')
        try {
            const res = await this.app.api.auth.restore(data)
            store.dispatch('notifs/addSuccess', res.msg, { root: true })
            return res
        } catch (err) {
            store.dispatch('notifs/addErr', err.msg, { root: true })
            throw err
        } finally {
            store.commit('TOGGLE_IS_LOAD')
        }
    },
    async update(store, data) {
        store.commit('TOGGLE_IS_LOAD')
        try {
            const res = await this.app.api.auth.update(data)
            return res
        } catch (err) {
            store.dispatch('notifs/addErr', err.msg, { root: true })
            throw err
        } finally {
            store.commit('TOGGLE_IS_LOAD')
        }
    },
    async logout(store) {
        store.commit('TOGGLE_IS_LOAD')

        try {
            const res = await this.app.api.auth.logout()
            if (res) {
                store.commit('LOGOUT')
                return res
            }
        } catch (err) {
            store.dispatch('notifs/addErr', err.msg, { root: true })
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
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters,
}
