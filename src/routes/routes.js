import DashboardLayout from '@/views/Layout/DashboardLayout.vue';
import AuthLayout from '@/views/Pages/AuthLayout.vue';
import LayoutEmpy from '@/views/Pages/LayoutEmpy.vue'

import NotFound from '@/views/NotFoundPage.vue';

const routes = [{
  path: '/',
  redirect: 'dashboard',
  component: DashboardLayout,
  children: [{
    path: '/dashboard',
    name: 'dashboard',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import ( /* webpackChunkName: "demo" */ '../views/Dashboard.vue')
  },
    {
      path: '/ingreso-vehiculo',
      name: 'Ingreso Vehículo',
      component: () =>
        import ( /* webpackChunkName: "demo" */ '../views/IngresoVehiculo.vue')
    },
    {
      path: '/vehiculos-activos',
      name: 'Vehículos Activos',
      component: () =>
        import ( /* webpackChunkName: "demo" */ '../views/VehiculoActivos.vue')
    }
  ]
},
  {
    path: '/',
    redirect: 'horas',
    component: DashboardLayout,
    children: [{
      path: '/horas',
      name: 'Horas',
      component: () =>
        import ( /* webpackChunkName: "demo" */ '../views/Reportes/Horas')
    }
    ]
  },
  {
    path: '/',
    redirect: 'empresa',
    component: DashboardLayout,
    children: [
      {
      path: '/empresa',
      name: 'Empresa',
      component: () =>
        import ( /* webpackChunkName: "demo" */ '../views/Administracion/Empresa/Empresa')
    },
      {
        path: '/empresa/create',
        name: 'EmpresaCreate',
        component: () =>
          import ( /* webpackChunkName: "demo" */ '../views/Administracion/Empresa/CreateEdit')
      },
      {
        path: '/empresa/edit/:id',
        name: 'EmpresaEdit',
        component: () =>
          import ( /* webpackChunkName: "demo" */ '../views/Administracion/Empresa/CreateEdit')
      },
      {
        path: '/roles',
        name: 'Roles',
        component: () =>
          import ( /* webpackChunkName: "demo" */ '../views/Administracion/Roles/Roles')
      },
      {
        path: '/roles/create',
        name: 'RolesCreate',
        component: () =>
          import ( /* webpackChunkName: "demo" */ '../views/Administracion/Roles/CreateEdit')
      },
      {
        path: '/roles/edit/:id',
        name: 'RolesEdit',
        component: () =>
          import ( /* webpackChunkName: "demo" */ '../views/Administracion/Roles/CreateEdit')
      },
      {
        path: '/usuarios',
        name: 'Usuarios',
        component: () =>
          import ( /* webpackChunkName: "demo" */ '../views/Administracion/Usuarios/Usuarios')
      },{
        path: '/usuarios/create',
        name: 'UsuariosCreate',
        component: () =>
          import ( /* webpackChunkName: "demo" */ '../views/Administracion/Usuarios/CreateEdit')
      },
      {
        path: '/usuarios/edit/:id',
        name: 'UsuariosEdit',
        component: () =>
          import ( /* webpackChunkName: "demo" */ '../views/Administracion/Usuarios/CreateEdit')
      }
    ]
  },
  {
    path: '/',
    redirect: 'placas',
    component: DashboardLayout,
    children: [{
      path: '/placas',
      name: 'Placas',
      component: () =>
        import ( /* webpackChunkName: "demo" */ '../views/Catalogos/Placas')
    }
    ]
  },
  {
    path: '/',
    redirect: 'login',
    component: AuthLayout,
    children: [{
      path: '/login',
      name: 'login',
      component: () =>
        import ( /* webpackChunkName: "demo" */ '../views/Pages/Login.vue')
    },
      {
        path: '/register',
        name: 'register',
        component: () =>
          import ( /* webpackChunkName: "demo" */ '../views/Pages/Register.vue')
      }
    ]
  },
  {
    path: '/',
    redirect: 'cola',
    component: LayoutEmpy,
    children: [{
      path: '/cola',
      name: 'cola',
      component: () =>
        import ('../views/Pages/TiketsCola.vue')
    },
      {path: '*', component: NotFound}
    ]
  }
];

export default routes;
