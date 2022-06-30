export function setUsuarios(state, resp) {
  state.usuarios = resp.data
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
}

export function deleteUsuario(state, id) {
  state.usuarios = state.usuarios.filter((item) => item._id !== id)
}
