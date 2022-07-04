export function setModulos(state, resp) {
  state.modulosGet = resp.data
}

export function setPermisos(state, resp) {
  console.log(resp)
  state.permisos = resp.data.permisos
  state.modulosPadres = resp.data.modulospadres
}


export function clearModulo(state) {
  state.modulo = {
    _id: 0,
    name: null,
    path: null,
    icon: null,
    orden: null,
    modulopadre: null,
    permisos: []
  }
}

export function setModelo(state, resp) {
  state.modulo = resp.data.modulos
  state.modulo.modulopadreId = resp.data.modulos.modulopadre
  state.modulo.permisos = resp.data.permisos
}

export function deleteModulo(state, id) {
  const data = state.modulosGet.filter((item, value) => {
    if (item._id != id) {
      return item
    }
  })
  state.modulosGet = data
}

