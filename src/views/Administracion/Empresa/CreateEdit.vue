<template>
  <div>

    <base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success"></base-header>

    <!--Charts-->
    <b-container fluid class="mt--7">
      <card>
        <b-row slot="header">
          <h3 v-if="!$route.params.id ">Crear Empresa</h3>
          <h3 v-if="$route.params.id">Editar Empresa</h3>
        </b-row>
        <b-form @submit.prevent="updateProfile">
          <h6 class="heading-small text-muted mb-4">Información de la empresa</h6>
          <b-row>
            <b-col lg="4">
              <base-input
                type="text"
                label="Empresa"
                placeholder="Empresa"
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
                type="text"
                label="Télefono"
                placeholder="Télefono"
              >
              </base-input>
            </b-col>
          </b-row>
          <b-row>
            <b-col lg="4">
              <base-input
                type="text"
                label="Tiempo Cobro (min)"
                placeholder="timepo (0)"
              >
              </base-input>
            </b-col>
            <b-col lg="4">
              <b-form-group label="Imprime Tickets">
                  <b-form-checkbox ></b-form-checkbox>
              </b-form-group>
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
