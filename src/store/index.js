import Vue from 'vue'
import Vuex from 'vuex'

import empresa from '@/modules/Administracion/empresa'
import usuarios from '@/modules/Administracion/usuario'
import roles from '@/modules/Administracion/roles'
import modulos from '@/modules/Catálogos/Módulos'
import login from '@/modules/Login'
import axios from 'axios'
import CryptoJS from 'crypto-js'

Vue.use(Vuex)

// const token = localStorage.getItem("token_acces") ? localStorage.getItem("token_acces") : null
//
// axios.defaults.headers.common = {
//   'auth-token' : token
// }

export default new Vuex.Store({
  state: {
    isLoading: false
  },
  mutations: {
    setLoading(state, bool) {
      state.isLoading = bool
    }
  },
  actions: {},
  modules: {
    usuarios,
    roles,
    modulos,
    login,
    empresa
  }
})
