import axios from 'axios'
import { dataHeader } from '@/util/dataAxios'
const apiUrl = `${process.env.VUE_APP_BACKEND_URL}empresa`

//Obtenemos todos los empresas ya sea al inicio o con el filtro
export async function getEmpresas({commit}, url) {

  try {
    const header = dataHeader()
    commit('setLoading', true, { root: true })
    const data = await axios.get(`${apiUrl}`,header)
      commit('setEmpresas', data)
  } catch (e) {
    console.error(e.response.data.error)
  }finally {
    setTimeout(()=>{
      commit('setLoading', false, { root: true })
    },1000)
  }
}

export async function getCatalogos({commit}) {
  try {
    const header = dataHeader()
    const data = await axios.get(`${apiUrl}/catalogos`,header)
    commit('SETCATALOGOS', data)
  } catch (e) {
    console.error(e.response)
  }finally {

  }
}

//almacenamos el empresa
export async function saveEmpresas({commit}, empresa) {
  const header = dataHeader()
  return axios.post(apiUrl, empresa, header)
}

//actualizamos empresa
export async function updateEmpresas({commit}, empresa) {
  const header = dataHeader()
  return axios.put(`${apiUrl}/${empresa._id}`, empresa,header)
}

//obtenemos un empresa para el edit
export async function getEmpresa({commit}, id) {
  const header = dataHeader()
  const data = await axios.get(`${apiUrl}/edit/${id}`,header)
  commit("setEmpresa", data)
}

//desactivamos empresa
export async function deleteEmpresa({commit}, id) {
  const header = dataHeader()
  const data = await axios.delete(`${apiUrl}/${id}`,header)
  commit("DELETEEMPRESA", id)
}

//activamos empresa
export async function activarEmpresa({commit}, id) {
  const header = dataHeader()
  const data = await axios.get(`${apiUrl}/activar/${id}`,header)
  commit("ACTIVAREMPRESA", id)
}

//limpia campos del usuaro
export async function clearEmpresa({commit}) {
  commit('clearEmpresa')
}

