export function setEmpresas(state, resp) {
  state.empresas = resp.data
}

export function SETCATALOGOS(state, resp){
  state.tarifas = resp.data.tarifas
}

export function clearEmpresa(state) {
  state.empresa = {
    _id: 0,
    empresa: null,
    direccion: null,
    telefono: null,
    tiempo: 0,
    tarifacacion: [],
  }
}

export function setEmpresa(state, resp) {

   state.empresa = resp.data.empresa
   state.empresa.tarificacion = resp.data.tarificacion
}

export function DELETEEMPRESA(state, id) {
  state.empresas.filter((item, value) => {
    if (item._id == id) {
      item.activo = false
    }
  })
}

export function ACTIVAREMPRESA(state, id) {
  state.empresas.filter((item, value) => {
    if (item._id == id) {
      item.activo = true
    }
  })
}



