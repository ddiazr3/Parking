import DashboardLayout from '@/views/Layout/DashboardLayout.vue';
import AuthLayout from '@/views/Pages/AuthLayout.vue';
import LayoutEmpy from '@/views/Pages/LayoutEmpy.vue'

import NotFound from '@/views/NotFoundPage.vue';

const routes = [{
  path: '/', redirect: 'dashboard', component: DashboardLayout, children: [
    {
      path: '/dashboard',
      name: 'dashboard',
      meta: {
        requiresAuth: true
      },
      component: () => import ( /* webpackChunkName: "demo" */ '../views/Dashboard.vue')
    }, {
      path: '/ingreso-vehiculo',
      name: 'Ingreso Vehículo',
      meta: {
        requiresAuth: true
      },
      component: () => import ( /* webpackChunkName: "demo" */ '../views/IngresoVehiculo.vue')
    }, {
      path: '/vehiculos-activos',
      name: 'Vehículos Activos',
      meta: {
        requiresAuth: true
      },
      component: () => import ( /* webpackChunkName: "demo" */ '../views/VehiculoActivos.vue')
    }]
}, {
  path: '/horas', redirect: 'horas', component: DashboardLayout, children: [
    {
      path: '/horas',
      name: 'Horas',
      meta: {
        requiresAuth: true
      },
      component: () => import ( /* webpackChunkName: "demo" */ '../views/Reportes/Horas')
    }
  ]
}, {
  path: '/empresa', redirect: 'empresa', component: DashboardLayout, children: [{
    path: '/empresa',
    name: 'Empresa',
    meta: {
      requiresAuth: true
    },
    component: () => import ( /* webpackChunkName: "demo" */ '../views/Administracion/Empresa/Empresa')
  }, {
    path: '/empresa/create',
    name: 'EmpresaCreate',
    meta: {
      requiresAuth: true
    },
    component: () => import ( /* webpackChunkName: "demo" */ '../views/Administracion/Empresa/CreateEdit')
  }, {
    path: '/empresa/edit/:id',
    name: 'EmpresaEdit',
    meta: {
      requiresAuth: true
    },
    component: () => import ( /* webpackChunkName: "demo" */ '../views/Administracion/Empresa/CreateEdit')
  }, {
    path: '/roles',
    name: 'Roles',
    meta: {
      requiresAuth: true
    },
    component: () => import ( /* webpackChunkName: "demo" */ '../views/Administracion/Roles/Roles')
  }, {
    path: '/roles/create',
    name: 'RolesCreate',
    meta: {
      requiresAuth: true
    },
    component: () => import ( /* webpackChunkName: "demo" */ '../views/Administracion/Roles/CreateEdit')
  }, {
    path: '/roles/edit/:id',
    name: 'RolesEdit',
    meta: {
      requiresAuth: true
    },
    component: () => import ( /* webpackChunkName: "demo" */ '../views/Administracion/Roles/CreateEdit')
  }, {
    path: '/usuarios',
    name: 'Usuarios',
    meta: {
      requiresAuth: true
    },
    component: () => import ( /* webpackChunkName: "demo" */ '../views/Administracion/Usuarios/Usuarios')
  }, {
    path: '/usuarios/create',
    name: 'UsuariosCreate',
    meta: {
      requiresAuth: true
    },
    component: () => import ( /* webpackChunkName: "demo" */ '../views/Administracion/Usuarios/CreateEdit')
  }, {
    path: '/usuarios/edit/:id',
    name: 'UsuariosEdit',
    meta: {
      requiresAuth: true
    },
    component: () => import ( /* webpackChunkName: "demo" */ '../views/Administracion/Usuarios/CreateEdit')
  }]
}, {
  path: '/tipoplacas', redirect: 'placas', component: DashboardLayout, children: [{
    path: '/tipoplacas',
    name: 'TipoPlacas',
    meta: {
      requiresAuth: true
    },
    component: () => import ( /* webpackChunkName: "demo" */ '../views/Catalogos/Placas')
  }, {
    path: '/modulos',
    name: 'Modulos',
    meta: {
      requiresAuth: true
    },
    component: () => import ( /* webpackChunkName: "demo" */ '../views/Catalogos/Modules/Modules')
  }, {
    path: '/modulos/create',
    name: 'ModulossCreate',
    meta: {
      requiresAuth: true
    },
    component: () => import ( /* webpackChunkName: "demo" */ '../views/Catalogos/Modules/CreateEdit')
  }, {
    path: '/modulos/edit/:id',
    name: 'ModulosEdit',
    meta: {
      requiresAuth: true
    },
    component: () => import ( /* webpackChunkName: "demo" */ '../views/Catalogos/Modules/CreateEdit')
  }]
}, {
  path: '/', redirect: 'login', component: AuthLayout, children: [{
    path: '/login', name: 'login', component: () => import ( /* webpackChunkName: "demo" */ '../views/Pages/Login.vue')
  }, {
    path: '/register',
    name: 'register',
    component: () => import ( /* webpackChunkName: "demo" */ '../views/Pages/Register.vue')
  }]
}, {
  path: '/', redirect: 'cola', component: LayoutEmpy, children: [{
    path: '/cola', name: 'cola', component: () => import ('../views/Pages/TiketsCola.vue')
  }, {path: '*', component: NotFound}]
}];

export default routes;
