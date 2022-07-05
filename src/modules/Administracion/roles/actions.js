import axios from 'axios'

const apiUrl = `${process.env.VUE_APP_BACKEND_URL}roles`

//Obtenemos todos los roles ya sea al inicio o con el filtro
export async function getRoles({commit}) {
  try {
    commit('setLoading', true, { root: true })
    const data = await axios.get(`${apiUrl}`)
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
    const data = await axios.get(`${process.env.VUE_APP_BACKEND_URL}modulos/modulos`)
    commit('SETMODULOSPERMISOS', data)
  } catch (e) {
    console.error(e.response)
  }finally {

  }
}

//almacenamos el roles
export async function saveRoles({commit}, role) {
  return axios.post(apiUrl, role)
}

//actualizamos roles
export async function updateRole({commit}, role) {
  return axios.put(`${apiUrl}/${role._id}`, role)
}

//obtenemos un roles para el edit
export async function getRole({commit}, id) {
  const data = await axios.get(`${apiUrl}/edit/${id}`)
  commit("setRole", data)
}

//desactivamos roles
export async function deleteRol({commit}, id) {
  const data = await axios.delete(`${apiUrl}/${id}`)
  commit("deleteRole", id)
}

//limpia campos del usuaro
export async function clearRoles({commit}) {
  commit('clearRoles')
}


