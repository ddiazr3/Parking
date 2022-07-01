export function setUsuarios(state, resp) {
  state.usuarios = resp.data.data
  state.page = resp.data.page
  state.totalPage = resp.data.totalData
  state.rowsPerPage = resp.data.rowsPerPage
}

export function clearUsuario(state) {
  state.usuario = {
    _id: 0,
    nombre: null,
    email: null,
    password: null,
    direccion: null,
    telefono: null,
    dpi: null,
    activo: null,
    rolesids: [],
    empresasids: [],
  }
}

export function setUsuario(state, resp) {
  state.usuario = resp.data
  state.usuario.password = null
}

export function deleteUsuario(state, id) {
  state.usuarios.filter((item, value) => {
    if (item._id == id) {
      item.activo = false
    }
  })
}

export function activarUsuario(state, id) {
  state.usuarios.filter((item, value) => {
    if (item._id == id) {
      item.activo = true
    }
  })
}

export function clearSearch(state) {
  state.searchData = {
    nombre: null,
    correo: null,
    telefono: null
  }
}

