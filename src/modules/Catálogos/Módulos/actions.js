import axios from 'axios'
import { dataHeader } from '@/util/dataAxios'

const apiUrl = `${process.env.VUE_APP_BACKEND_URL}modulos`

//Obtenemos todos los Modulos
export async function getModulos({commit}, url) {
  try {
    commit('setLoading', true, { root: true })
    const header = dataHeader()
    const data = await axios.get(`${apiUrl}`,header)
      commit('setModulos', data)
  } catch (e) {
    console.error(e.response.data.error)
  }finally {
    setTimeout(()=>{
      commit('setLoading', false, { root: true })
    },1000)
  }
}

//Obtenemos catalogos a necesitar
export async function getPermisos({commit}, url) {
  try {
    const header = dataHeader()
    const data = await axios.get(`${apiUrl}/permisos`,header)
    commit('setPermisos', data)
  } catch (e) {
    console.error(e.response.data.error)
  }finally {
    commit('setLoading', false, { root: true })
  }
}

//almacenamos el modelo
export async function saveModulo({commit}, modulo) {
  const header = dataHeader()
  return axios.post(apiUrl, modulo,header)
}

//actualizamos el modelo
export async function updateModulo({commit}, modulo) {
  const header = dataHeader()
  return axios.put(`${apiUrl}/${modulo._id}`, modulo,header)
}

//obtenemos un modelo para el edit
export async function getModelo({commit}, id) {
  const header = dataHeader()
  const data = await axios.get(`${apiUrl}/edit/${id}`,header)
  commit("setModelo", data)
}

//desactivamos usuario
export async function deleteModulo({commit}, id) {
  const header = dataHeader()
  const data = await axios.delete(`${apiUrl}/${id}`,header)
  commit("deleteModulo", id)
}

//limpia campos del usuaro
export async function clearModulo({commit}) {
  commit('clearModulo')
}

