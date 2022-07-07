import CryptoJS from "crypto-js";

export function dataHeader() {
  let token = localStorage.getItem("token_acces") ? localStorage.getItem("token_acces") : null
  let header = {
    headers: {
      'auth-token': token
    }
  }
  return header;
}

export function validaError(error) {


  if(error.response.status == 401){
    console.log("acceso denegado ")
    localStorage.removeItem("token_acces")
    localStorage.removeItem("@user")
    window.location = '/'
    return
  }
  if(error.response.status == 402){
    console.log("acceso codigo 402 ")
    localStorage.removeItem("token_acces")
    localStorage.removeItem("@user")
    window.location = '/'
    return
  }
}
