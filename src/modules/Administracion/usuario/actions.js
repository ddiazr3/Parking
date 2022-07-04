import axios from 'axios'

const apiUrl = `${process.env.VUE_APP_BACKEND_URL}usuarios`

//Obtenemos todos los usuarios ya sea al inicio o con el filtro
export async function getUsuarios({commit}, url) {
  let urlInstance = apiUrl
  commit('setLoading', true, { root: true })
  if (url) {
    urlInstance = apiUrl + '?' + url
  }
  try {
    const data = await axios.get(`${apiUrl}?${url}`)
      commit('setUsuarios', data)
  } catch (e) {
    console.error(e.response.data.error)
  }finally {
    commit('setLoading', false, { root: true })
  }
}

//almacenamos el usuario
export async function saveUsuarios({commit}, usuario) {
  return axios.post(apiUrl, usuario)
}

//actualizamos usuario
export async function updateUsuarios({commit}, usuario) {
  return axios.put(`${apiUrl}/${usuario._id}`, usuario)
}

//obtenemos un usuario para el edit
export async function getUsuario({commit}, id) {
  const data = await axios.get(`${apiUrl}/edit/${id}`)
  commit("setUsuario", data)
}

//desactivamos usuario
export async function deleteUsuario({commit}, id) {
  const data = await axios.delete(`${apiUrl}/${id}`)
  commit("deleteUsuario", id)
}

//activamos usuario
export async function activarUsuario({commit}, id) {
  const data = await axios.get(`${apiUrl}/activar/${id}`)
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

//exporta los datos del excel
export async function exporExcel({commit}, url) {
  let urlInstance = apiUrl
  if (url) {
    urlInstance = apiUrl + '?' + url
  }
  try {
    const data = await axios.get(`${apiUrl}?${url}`)
    commit('setUsuarios', data)
  } catch (e) {
    console.error(e.response.data.error)
  }
}
