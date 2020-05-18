const state = {
    notifs: [],
}
const getters = {
    NOTIFS: state => state.notifs,
}
const mutations = {
    CLOSE(state, id) {
        state.notifs.forEach((el, i) => el.id === id && state.notifs.splice(i, 1))
    },

    ADD(state, notif) {
        state.notifs.unshift(notif)
    },
}

const notifId = () => `n${(~~(Math.random() * 1e8)).toString(16)}`

const actions = {
    addErr({ dispatch }, msg) {
        dispatch('add', {
            id  : notifId(),
            icon: 'err',
            msg,
        })
    },

    addSuccess({ dispatch }, msg) {
        dispatch('add', {
            id  : notifId(),
            icon: 'success',
            msg,
        })
    },
    addWarn({ dispatch }, msg) {
        dispatch('add', {
            id  : notifId(),
            icon: 'warn',
            msg,
        })
    },

    add(store, notif) {
        store.commit('ADD', notif)
        setTimeout(() => { store.commit('CLOSE', notif.id) }, 5000)
    },

}
export default {
    state,
    mutations,
    actions,
    getters,
}
