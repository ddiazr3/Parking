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
    roleid: null,
    empresasids: [],
  },
  roles: [],
  empresas: [],
  totalPage: 0,
  page: 0,
  perPage: 10,
  searchData: {
    nombre: null,
    correo: null,
    telefono: null
  },
}
