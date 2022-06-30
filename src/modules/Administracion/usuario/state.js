export default {
  namespaced: true,
  usuarios: [],
  permisosUsuarios: [],
  usuario: {
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
  },
  rolesUsuario: [],
  empresasUsuario: [],
  totalPage: 0,
  page: 1
}
