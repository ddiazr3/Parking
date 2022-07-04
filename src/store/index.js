import Vue from 'vue'
import Vuex from 'vuex'

import usuarios from '@/modules/Administracion/usuario'
import modulos from '@/modules/Catálogos/Módulos'


Vue.use(Vuex)

export default new Vuex.Store({
    state: {
      isLoading: false
    },
    mutations: {
      setLoading(state, bool){
        state.isLoading = bool
      }
    },
    actions: {},
    modules: {
      usuarios,
      modulos
    }
})
