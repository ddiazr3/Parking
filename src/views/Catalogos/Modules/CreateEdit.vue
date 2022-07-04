<template>
  <div>

    <base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success">
      <!-- Card stats -->
    </base-header>

    <!--Charts-->
    <b-container fluid class="mt--7">
      <card>
        <b-row slot="header">
          <b-col lg="4">
            <h3 v-if="!$route.params.id ">Crear Módulo</h3>
            <h3 v-if="$route.params.id">Editar Módulo</h3>
          </b-col>
        </b-row>
        <validation-observer v-slot="{handleSubmit}" ref="formValidator">
          <b-form @submit.prevent="handleSubmit(guardar)" autocomplete="off">
            <h6 class="heading-small text-muted mb-4">Información del módulo</h6>
            <b-row>
              <b-col lg="2">
                <base-input
                  type="text"
                  label="Nombre"
                  name="name"
                  placeholder="Dashboard"
                  :rules="{required: true}"
                  v-model="modulo.name"
                >
                </base-input>
              </b-col>
              <b-col lg="3">
                <base-input
                  type="text"
                  label="Icono"
                  name="icon"
                  placeholder="fa fas-icon"
                  :rules="{required: true}"
                  v-model="modulo.icon"
                >
                </base-input>
              </b-col>
              <b-col lg="3">
                <base-input
                  type="text"
                  label="Path"
                  name="path"
                  placeholder="/Dashboard"
                  v-model="modulo.path"
                >
                </base-input>
              </b-col>
              <b-col lg="2">
                <base-input
                  type="number"
                  label="Orden"
                  name="orden"
                  placeholder="1234"
                  v-model="modulo.orden"
                  :rules="{required: true}"
                >
                </base-input>
              </b-col>
              <b-col lg="2">
                <base-input label="Módulo Padre">
                  <select class="form-control" v-model="modulo.modulopadreId">
                    <option v-for="mp in modulosPadres" :value="mp._id" v-text="mp.name"></option>
                  </select>
                </base-input>
              </b-col>
            </b-row>
            <div class="dropdown-divider"></div>
            <h4 class="heading-small text-muted mb-4"></h4>
            <b-row>
              <b-col lg="12">
                <b-col lg="4" class="pt-3">
                  <card>
                    <div slot="header" class="text-center">
                      <h3 class="heading-small text-muted ">Permisos</h3>
                    </div>
                    <b-form-group>
                      <b-form-checkbox v-for="p in permisos" :key="p._id" v-bind:value="p._id" v-model="modulosPermiso">
                        {{ p.nombrefriendly }}
                      </b-form-checkbox>
                    </b-form-group>
                  </card>
                </b-col>
              </b-col>
            </b-row>
            <div class="text-left">
              <base-button v-if="!$route.params.id " type="success" native-type="submit" class="my-4">Guardar
              </base-button>
              <base-button v-else type="success" native-type="submit" class="my-4">Actualizar</base-button>
            </div>
          </b-form>
        </validation-observer>

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

import "jszip/dist/jszip.min.js";
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import "datatables.net-bs4/css/dataTables.bootstrap4.min.css";
import "datatables.net-bs4/js/dataTables.bootstrap4"


import $ from "jquery";
import {mapActions, mapState} from "vuex";
import Sweetalert from "@/plugins/sweetalert";

export default {
  mixins: [Sweetalert],
  components: {
    Card,
    BaseInput,
    BaseButton
  },
  data() {
    return {
      isEdit: false,
      modulosPermiso: []
    };
  },
  computed: {
    ...mapState('modulos', ['permisos', 'modulo', 'modulosPadres'])
  },
  methods: {
    ...mapActions('modulos', ['getPermisos', 'saveModulo', 'clearModulo', 'getModelo', 'updateModulo',]),
    async guardar() {
      if (this.modulosPermiso.length < 1) {
        this.alertError({text: 'Ingrese al menos un permiso'})
        return
      }
      this.modulo.permisos = this.modulosPermiso
      if (this.isEdit) {

        this.updateModulo(this.modulo)
          .then((resp) => {
            this.alertSuccess({text: 'Módulo actualizado con exito'})
            this.clearModulo()
            this.$router.push('/modulos')
          }).catch((err) => {
          this.alertError({text: err.response.data.error})
        })
      } else {
        this.saveModulo(this.modulo).then((resp) => {
          this.alertSuccess({text: 'Módulo almacenado con exito'})
          this.clearModulo()
          this.$router.push('/modulos')
        }).catch((err) => {
          this.alertError({text: err.response.data.error})
        })
      }
    }
  },
  mounted() {
    if (this.$route.params.id) {
      this.isEdit = true
      this.getModelo(this.$route.params.id)
      setTimeout(()=>{
        console.log(this.modulo)
        this.modulosPermiso = this.modulo.permisos
      },300)

    } else {
      this.clearModulo()
    }
    this.getPermisos()
  }
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
