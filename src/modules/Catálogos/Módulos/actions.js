import axios from 'axios'

const apiUrl = `${process.env.VUE_APP_BACKEND_URL}modulos`

//Obtenemos todos los Modulos
export async function getModulos({commit}, url) {
  try {
    commit('setLoading', true, { root: true })
    const data = await axios.get(`${apiUrl}`)
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
    const data = await axios.get(`${apiUrl}/permisos`)
    commit('setPermisos', data)
  } catch (e) {
    console.error(e.response.data.error)
  }finally {
    commit('setLoading', false, { root: true })
  }
}

//almacenamos el modelo
export async function saveModulo({commit}, modulo) {
  return axios.post(apiUrl, modulo)
}

//actualizamos el modelo
export async function updateModulo({commit}, modulo) {
  return axios.put(`${apiUrl}/${modulo._id}`, modulo)
}

//obtenemos un modelo para el edit
export async function getModelo({commit}, id) {
  const data = await axios.get(`${apiUrl}/edit/${id}`)
  commit("setModelo", data)
}

//desactivamos usuario
export async function deleteModulo({commit}, id) {
  const data = await axios.delete(`${apiUrl}/${id}`)
  commit("deleteModulo", id)
}

//limpia campos del usuaro
export async function clearModulo({commit}) {
  commit('clearModulo')
}

