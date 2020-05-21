import Vue from 'vue'
import Vuex from 'vuex'
import modules from './modules'
import notifs from '~/components/common/blocks/notifs/notifs'

Vue.use(Vuex)
modules.notifs = notifs
const store = () => new Vuex.Store({
    strict: true,
    modules,
})
export default store
