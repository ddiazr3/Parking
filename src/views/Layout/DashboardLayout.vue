<template>
  <div class="wrapper">
    <notifications></notifications>
    <side-bar>
      <template slot="links">
        <div v-for="m in menu" :key="m.id">
          <div v-if="!m.children">
            <item-default :item="m"></item-default>
          </div>
          <template v-else>
            <item-group-default :items="m"></item-group-default>
          </template>
        </div>
      </template>
      <template slot="links-after">
      </template>
    </side-bar>
    <div class="main-content">
      <dashboard-navbar :type="$route.meta.navbarType"></dashboard-navbar>

      <div @click="$sidebar.displaySidebar(false)">
        <fade-transition :duration="200" origin="center top" mode="out-in">
          <!-- your content here -->
          <router-view></router-view>
        </fade-transition>
      </div>
      <content-footer v-if="!$route.meta.hideFooter"></content-footer>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-new */
import PerfectScrollbar from 'perfect-scrollbar';
import 'perfect-scrollbar/css/perfect-scrollbar.css';
import ItemDefault from '@/components/ItemDefault';
import ItemGroupDefault from '@/components/ItemGroupDefault';

//import menu from '../../plugins/menu'

//console.log(menu)

function hasElement(className) {
  return document.getElementsByClassName(className).length > 0;
}

function initScrollbar(className) {
  if (hasElement(className)) {
    new PerfectScrollbar(`.${className}`);
  } else {
    // try to init it later in case this component is loaded async
    setTimeout(() => {
      initScrollbar(className);
    }, 100);
  }
}

import DashboardNavbar from './DashboardNavbar.vue';
import ContentFooter from './ContentFooter.vue';
import DashboardContent from './Content.vue';
import {
  FadeTransition
} from 'vue2-transitions';

export default {
  data() {
    return {

      menu: [{
        name: 'Inicio',
        path: '/dashboard',
        icon: 'fas fa-home text-blue'
      },
        {
          name: 'Ingreso Vehículo',
          path: '/ingreso-vehiculo',
          icon: 'fas fa-car text-warning'
        },
        {
          name: 'Vehículos Activos',
          path: '/vehiculos-activos',
          icon: 'fas fa-check text-success'
        },
        {
          name: 'Reportes',
          icon: 'fas fa-chart-line text-orange',
          children: [{
            name: 'Horas',
            path: '/horas',
            icon: 'fas fa-clock text-orange'
          }]
        },
        {
          name: 'Admistración',
          icon: 'ni ni-settings text-orange',
          children: [{
            name: 'Empresa',
            icon: 'fas fa-check text-success',
            path: '/empresa'
          }, {
            name: 'Roles',
            icon: 'fas fa-check text-success',
            path: '/roles'
          }, {
            name: 'Usuarios',
            path: '/usuarios',
            icon: 'ni ni-circle-08 text-pink'
          },

          ]
        },
        {
          name: 'Catálogos',
          icon: 'ni ni-circle-08 text-pink',
          children: [{
            name: 'Tipos de Placas',
            path: '/placas',
            icon: 'fas fa-filter text-info'
          },
            {
              name: 'Módulo',
              path: '/modulos',
              icon: 'fas fa-bars text-success'
            }]
        }

      ]
    }
  },
  components: {
    DashboardNavbar,
    ContentFooter,
    DashboardContent,
    FadeTransition,
    ItemDefault,
    ItemGroupDefault
  },
  methods: {
    initScrollbar() {
      let isWindows = navigator.platform.startsWith('Win');
      if (isWindows) {
        initScrollbar('sidenav');
      }
    },
    createMenu(m) {
      console.log(m)
    }
  },
  mounted() {

    this.initScrollbar()
  }
};
</script>

<style lang="scss">
</style>
