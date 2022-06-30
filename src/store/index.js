import Vue from 'vue'
import Vuex from 'vuex'

import usuarios from '@/modules/Administracion/usuario'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    modules: {
      usuarios
    }
})
