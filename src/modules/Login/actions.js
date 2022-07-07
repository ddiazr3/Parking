import axios from 'axios'
import CryptoJS from 'crypto-js'

const apiUrl = `${process.env.VUE_APP_BACKEND_URL}login`
const keyCryp = '111222333444'

//Obtenemos todos los Modulos
export async function logueo({commit}, login) {
  try {
    commit('setLoading', true, { root: true })
    const data = await axios.post(`${apiUrl}`,login)
      localStorage.setItem("token_acces", data.data.token)
      localStorage.setItem("@user",CryptoJS.AES.encrypt(JSON.stringify(data.data), keyCryp).toString())
  } catch (e) {
    console.error(e)
  }finally {
    setTimeout(()=>{
      commit('setLoading', false, { root: true })
    },1000)
  }
}



