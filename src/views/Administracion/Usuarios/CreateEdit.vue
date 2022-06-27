<template>
  <div>
    <base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success"></base-header>
    <!--Charts-->
    <b-container fluid class="mt--7">
      <card>
        <b-row slot="header">
          <b-col lg="4">
            <h3 v-if="!$route.params.id ">Crear Usuario</h3>
            <h3 v-if="$route.params.id">Editar Usuario</h3>
          </b-col>
         <b-col lg="8" class="text-right">
<!--           <nav aria-label="breadcrumb" class="d-none d-md-inline-block ml-md-4">-->
<!--             <route-breadcrumb></route-breadcrumb>-->
<!--           </nav>-->
         </b-col>
        </b-row>
        <b-form @submit.prevent="updateProfile">
          <h6 class="heading-small text-muted mb-4">Información del usuario</h6>
          <b-row>
            <b-col lg="4">
              <base-input
                type="text"
                label="Nombre"
                placeholder="Nombre"
              >
              </base-input>
            </b-col>
            <b-col lg="4">
              <base-input
                type="text"
                label="Direción"
                placeholder="Dirección"
              >
              </base-input>
            </b-col>
            <b-col lg="4">
              <base-input
                type="number"
                label="Télefono"
                placeholder="Télefono"
              >
              </base-input>
            </b-col>
            <b-col lg="4">
              <base-input
                type="text"
                label="DPI"
                placeholder="DPI"
              >
              </base-input>
            </b-col>

            <b-col lg="4">
              <base-input
                type="email"
                label="Correo"
                placeholder="xxx@gmail.com"
              >
              </base-input>
            </b-col>
            <b-col lg="4">
              <base-input label="Empresa">
                <select class="form-control">
                  <option>Rol 1</option>
                  <option>Rol 2</option>
                </select>
              </base-input>
            </b-col>
            <b-col lg="4">
              <base-input label="Empresa">
                <select class="form-control" multiple>
                  <option>Empresa 1</option>
                  <option>Empresa 2</option>
                </select>
              </base-input>
            </b-col>

            <b-col lg="4">
              <base-input
                type="password"
                label="Contraseña"
                placeholder="xxx@gmail.com"
              >
              </base-input>
            </b-col>
            <b-col lg="4">
              <base-input
                type="password"
                label="Confirmar Contraseña"
                placeholder="xxx@gmail.com"
              >
              </base-input>
            </b-col>

          </b-row>
          <div class="text-left">
            <base-button  v-if="!$route.params.id " type="success" native-type="submit" class="my-4">Guardar</base-button>
            <base-button v-else type="success" native-type="submit" class="my-4">Actualizar</base-button>
          </div>

        </b-form>
      </card>
      <!-- End charts-->
    </b-container>
  </div>
</template>

<script>
// Charts
import * as chartConfigs from '@/components/Charts/config';
import Card from '@/components/Cards/Card.vue';
import BaseInput from '@/components/Inputs/BaseInput.vue';
import BaseButton from '@/components/BaseButton.vue';
import RouteBreadcrumb from "@/components/Breadcrumb/RouteBreadcrumb";
export default {
  components: {
    RouteBreadcrumb,
    Card,
    BaseInput,
    BaseButton
  },
  data() {
    return {
      currentPage: 1
    };
  },
  methods: {}
};
</script>

<style>
.el-table .cell {
  padding-left: 0px;
  padding-right: 0px;
}

div.dataTables_length select {
  width: 60px !important;
}
</style>
