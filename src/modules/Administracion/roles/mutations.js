export function setRoles(state, resp) {
  state.rolesAll = resp.data
}

export function SETMODULOSPERMISOS(state, resp) {
  state.modulos = resp.data.modulos
  state.empresas = resp.data.empresas
}

export function clearRoles(state) {
  state.role = {
    _id: 0,
    role: null,
    descripcion: null,
    rolmodulopermisos : [],
    empresasids: [],
    permisosrole:[],
  }
}

export function setRole(state, resp) {
  state.role = resp.data.role
  state.role.descripcion = resp.data.role.description
  state.role.empresaid = resp.data.role.empresa
  state.role.permisosrole = resp.data.modulopermisos
}

export function deleteRole(state, id) {
  const data =  state.rolesAll.filter((item, value) => {
    return item._id !== id
  })
  state.rolesAll = data
}


