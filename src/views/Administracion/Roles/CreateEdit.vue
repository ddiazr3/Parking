<template>
  <div>

    <base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success"></base-header>

    <!--Charts-->
    <b-container fluid class="mt--7">
      <card>
        <b-row slot="header">
          <h3 v-if="!$route.params.id ">Crear Rol</h3>
          <h3 v-if="$route.params.id">Editar Rol</h3>
        </b-row>
        <b-form @submit.prevent="updateProfile">
          <h6 class="heading-small text-muted mb-4">Información del rol</h6>
          <b-row>
            <b-col lg="4">
              <base-input
                type="text"
                label="Nombre"
                placeholder="Administrador"
              >
              </base-input>
            </b-col>
            <b-col lg="8">
              <base-input
                type="text"
                label="Descripción"
                placeholder="Descripción"
              >
              </base-input>
            </b-col>
          </b-row>
          <div class="dropdown-divider"></div>
          <h4 class="heading-small text-muted mb-4">Módulos</h4>
          <b-row >
            <b-col lg="2" class="pt-3">
              <card>

                  <div slot="header" class="text-center">
                    <h3 class="heading-small text-muted ">Inicio</h3>
                  </div>

                <b-form-group>
                  <b-form-checkbox>Ver</b-form-checkbox>
                  <b-form-checkbox>Crear</b-form-checkbox>
                  <b-form-checkbox>Editar</b-form-checkbox>
                  <b-form-checkbox>Actualizar</b-form-checkbox>
                  <b-form-checkbox>Borrar</b-form-checkbox>
                </b-form-group>
              </card>
            </b-col>
            <b-col lg="2" class="pt-3">
              <card>

                <div slot="header" class="text-center">
                  <h3 class="heading-small text-muted ">Inicio</h3>
                </div>

                <b-form-group>
                  <b-form-checkbox>Ver</b-form-checkbox>
                  <b-form-checkbox>Crear</b-form-checkbox>
                  <b-form-checkbox>Editar</b-form-checkbox>
                  <b-form-checkbox>Actualizar</b-form-checkbox>
                  <b-form-checkbox>Borrar</b-form-checkbox>
                </b-form-group>
              </card>
            </b-col>
            <b-col lg="2" class="pt-3">
              <card>

                <div slot="header" class="text-center">
                  <h3 class="heading-small text-muted ">Inicio</h3>
                </div>

                <b-form-group>
                  <b-form-checkbox>Ver</b-form-checkbox>
                  <b-form-checkbox>Crear</b-form-checkbox>
                  <b-form-checkbox>Editar</b-form-checkbox>
                  <b-form-checkbox>Actualizar</b-form-checkbox>
                  <b-form-checkbox>Borrar</b-form-checkbox>
                </b-form-group>
              </card>
            </b-col>
            <b-col lg="2" class="pt-3">
              <card>

                <div slot="header" class="text-center">
                  <h3 class="heading-small text-muted ">Inicio</h3>
                </div>

                <b-form-group>
                  <b-form-checkbox>Ver</b-form-checkbox>
                  <b-form-checkbox>Crear</b-form-checkbox>
                  <b-form-checkbox>Editar</b-form-checkbox>
                  <b-form-checkbox>Actualizar</b-form-checkbox>
                  <b-form-checkbox>Borrar</b-form-checkbox>
                </b-form-group>
              </card>
            </b-col>
            <b-col lg="2" class="pt-3">
              <card>

                <div slot="header" class="text-center">
                  <h3 class="heading-small text-muted ">Inicio</h3>
                </div>

                <b-form-group>
                  <b-form-checkbox>Ver</b-form-checkbox>
                  <b-form-checkbox>Crear</b-form-checkbox>
                  <b-form-checkbox>Editar</b-form-checkbox>
                  <b-form-checkbox>Actualizar</b-form-checkbox>
                  <b-form-checkbox>Borrar</b-form-checkbox>
                </b-form-group>
              </card>
            </b-col>
            <b-col lg="2" class="pt-3">
              <card>

                <div slot="header" class="text-center">
                  <h3 class="heading-small text-muted ">Inicio</h3>
                </div>

                <b-form-group>
                  <b-form-checkbox>Ver</b-form-checkbox>
                  <b-form-checkbox>Crear</b-form-checkbox>
                  <b-form-checkbox>Editar</b-form-checkbox>
                  <b-form-checkbox>Actualizar</b-form-checkbox>
                  <b-form-checkbox>Borrar</b-form-checkbox>
                </b-form-group>
              </card>
            </b-col>

            <b-col lg="2" class="pt-3">
              <card>

                <div slot="header" class="text-center">
                  <h3 class="heading-small text-muted ">Inicio</h3>
                </div>

                <b-form-group>
                  <b-form-checkbox>Ver</b-form-checkbox>
                  <b-form-checkbox>Crear</b-form-checkbox>
                  <b-form-checkbox>Editar</b-form-checkbox>
                  <b-form-checkbox>Actualizar</b-form-checkbox>
                  <b-form-checkbox>Borrar</b-form-checkbox>
                </b-form-group>
              </card>
            </b-col>
          </b-row>


          <div class="text-left">
            <base-button v-if="!$route.params.id " type="success" native-type="submit" class="my-4">Guardar
            </base-button>
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

export default {
  components: {
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
