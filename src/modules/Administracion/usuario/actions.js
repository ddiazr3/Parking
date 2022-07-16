import axios from 'axios'
import { dataHeader } from '@/util/dataAxios'
const apiUrl = `${process.env.VUE_APP_BACKEND_URL}usuarios`

//Obtenemos todos los usuarios ya sea al inicio o con el filtro
export async function getUsuarios({commit}, url) {
  let urlInstance = apiUrl
  commit('setLoading', true, { root: true })
  if (url) {
    urlInstance = apiUrl + '?' + url
  }
  try {
    const header = dataHeader()
    const data = await axios.get(`${apiUrl}?${url}`,header)
      commit('setUsuarios', data)
  } catch (e) {
    console.error(e.response.data.error)
  }finally {
    commit('setLoading', false, { root: true })
  }
}

export async function catalogos({commit}, url) {
  try {
    const header = dataHeader()
    const data = await axios.get(`${apiUrl}/catalogos`,header)
    commit('SETCATALOGOS', data)
  } catch (e) {
    console.error(e.response.data.error)
  }
}

//almacenamos el usuario
export async function saveUsuarios({commit}, usuario) {
  const header = dataHeader()
  return axios.post(apiUrl, usuario, header)
}

//actualizamos usuario
export async function updateUsuarios({commit}, usuario) {
  const header = dataHeader()
  return axios.put(`${apiUrl}/${usuario._id}`, usuario,header)
}

//obtenemos un usuario para el edit
export async function getUsuario({commit}, id) {
  const header = dataHeader()
  const data = await axios.get(`${apiUrl}/edit/${id}`,header)
  commit("setUsuario", data)
}

//desactivamos usuario
export async function deleteUsuario({commit}, id) {
  const header = dataHeader()
  const data = await axios.delete(`${apiUrl}/${id}`,header)
  commit("deleteUsuario", id)
}

//activamos usuario
export async function activarUsuario({commit}, id) {
  const header = dataHeader()
  const data = await axios.get(`${apiUrl}/activar/${id}`,header)
  commit("activarUsuario", id)
}

//limpia campos del usuaro
export async function clearUsuario({commit}) {
  commit('clearUsuario')
}

//limpia los filtros del usuario
export async function clearSearch({commit}) {
  commit('clearSearch')
}

