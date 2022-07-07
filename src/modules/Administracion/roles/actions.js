import axios from 'axios'
import { dataHeader } from '@/util/dataAxios'
const apiUrl = `${process.env.VUE_APP_BACKEND_URL}roles`

//Obtenemos todos los roles ya sea al inicio o con el filtro
export async function getRoles({commit}) {
  try {
    const header = dataHeader()
    commit('setLoading', true, { root: true })
    const data = await axios.get(`${apiUrl}`,header)
      commit('setRoles', data)
  } catch (e) {
    console.error(e.response.data.error)
  }finally {
    setTimeout(()=>{
      commit('setLoading', false, { root: true })
    },1000)
  }
}

export async function getModulosPermisos({commit}) {
  try {
    const header = dataHeader()
    const data = await axios.get(`${process.env.VUE_APP_BACKEND_URL}modulos/modulos`,header)
    commit('SETMODULOSPERMISOS', data)
  } catch (e) {
    console.error(e.response)
  }finally {

  }
}

//almacenamos el roles
export async function saveRoles({commit}, role) {
  const header = dataHeader()
  return axios.post(apiUrl, role, header)
}

//actualizamos roles
export async function updateRole({commit}, role) {
  const header = dataHeader()
  return axios.put(`${apiUrl}/${role._id}`, role,header)
}

//obtenemos un roles para el edit
export async function getRole({commit}, id){
  let header = dataHeader()
  const data = await axios.get(`${apiUrl}/edit/${id}`,header)
  commit("setRole", data)
}

//desactivamos roles
export async function deleteRol({commit}, id) {
  const header = dataHeader()
  const data = await axios.delete(`${apiUrl}/${id}`,header)
  commit("deleteRole", id)
}

//limpia campos del usuaro
export async function clearRoles({commit}) {
  commit('clearRoles')
}


