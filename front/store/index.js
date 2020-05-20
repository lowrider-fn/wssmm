import Vue from 'vue'
import Vuex from 'vuex'
import modules from './modules'
import notif from '~/components/common/notif/notif-list-store'

Vue.use(Vuex)
modules.notif = notif
const store = () => new Vuex.Store({
    strict: true,
    modules,
})
export default store
