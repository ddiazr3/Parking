import axios from 'axios'
const apiUrl = `${process.env.VUE_APP_BACKEND_URL}usuarios`

export async function getUsuarios({commit}, buscar) {
  const data = await axios.get(apiUrl)
  commit('setUsuarios',data)
}

export async function saveUsuarios({commit}, usuario) {

  const data = await axios.post(apiUrl,usuario)
  var resp = {
    error : false,
    success: true,
    errores: [],
  }
  if(data.data.errors){
    resp.error = true;
    resp.success = false;
    resp.errores = data.data.errors;
  }
  return resp
}

export async function getUsuario({commit}, id) {
  const data = await axios.get(`${apiUrl}/edit/${id}`)
  commit("setUsuario", data)
}

export async function deleteUsuario({commit}, id) {
  const data = await axios.delete(`${apiUrl}/${id}`)
  commit("deleteUsuario", id)
}

export async function clearUsuario({commit}){
  commit('clearUsuario')
}
