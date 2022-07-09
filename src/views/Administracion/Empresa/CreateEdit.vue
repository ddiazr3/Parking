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
        <validation-observer v-slot="{handleSubmit}" ref="formValidator">
          <b-form @submit.prevent="handleSubmit(guardar)">
            <h6 class="heading-small text-muted mb-4">Información de la empresa</h6>
            <b-row>
              <b-col lg="4">
                <base-input
                  type="text"
                  label="Empresa"
                  placeholder="Empresa"
                  v-model="empresa.empresa"
                  name="Empresa"
                  :rules="{required: true, min: 1}"
                >
                </base-input>
              </b-col>
              <b-col lg="4">
                <base-input
                  type="text"
                  label="Direción"
                  placeholder="Dirección"
                  v-model="empresa.direccion"
                  name="Direccion"
                  :rules="{required: true, min: 1}"
                >
                </base-input>
              </b-col>
              <b-col lg="4">
                <base-input
                  type="text"
                  label="Télefono"
                  placeholder="Télefono"
                  v-model="empresa.telefono"
                  name="Telefono"
                  :rules="{required: true, min: 1}"
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
                  v-model="empresa.tiempo"
                >
                </base-input>
              </b-col>

            </b-row>

            <div class="dropdown-divider"></div>
            <h4 class="heading-small text-muted mb-4">Tarificación</h4>

            <b-row>
              <b-col lg="6">
                <div class="table-responsive">
                  <table class="table table-hover">
                    <thead>
                    <tr>
                      <th>Tarifa</th>
                      <th>Valor</th>
                      <th>Add</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                      <td>
                        <select class="form-control" v-model="dataTarifa.tarifa">
                          <option v-for="tar in tarifas" v-text="tar.nombre" :value="tar">E</option>
                        </select>
                      </td>
                      <td>
                        <base-input
                          type="number"
                          placeholder="Valor"
                          v-model="dataTarifa.valor"
                        >
                        </base-input>
                      </td>
                      <td>
                        <base-button native-type="button" size="sm" class="my-2" :disabled="!btnActive"
                                     @click="addTarifa">
                         <span class="btn-inner--icon">
                            <i class="fas fa-plus"></i>
                          </span>
                        </base-button>
                      </td>
                    </tr>
                    </tbody>
                  </table>
                </div>
              </b-col>
              <b-col lg="6">
                <div class="table-responsive">
                  <table class="table table-hover">
                    <thead>
                    <tr>
                      <th>Tarifa</th>
                      <th>Valor</th>
                      <th>Eliminar</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="tl in taraficacionLocal">
                      <td v-text="tl.tarifa.nombre"></td>
                      <td v-text="tl.valor"></td>
                      <td>
                        <base-button icon type="danger" size="sm" title="Eliminar" @click="eliminarTarifa(tl.tarifa)">
                                    <span class="btn-inner--icon">
                                        <i class="fas fa-trash"></i>
                                    </span>
                        </base-button>
                      </td>
                    </tr>
                    </tbody>
                  </table>
                </div>
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
import Sweetalert from "@/plugins/sweetalert";
import {mapActions, mapState} from "vuex";
import {clearEmpresa, updateEmpresas} from "@/modules/Administracion/empresa/actions";
import {validaError} from "@/util/dataAxios";

export default {
  mixins: [Sweetalert],
  components: {
    Card,
    BaseInput,
    BaseButton
  },
  data() {
    return {
      currentPage: 1,
      taraficacionLocal: [],
      dataTarifa: {
        tarifa: null,
        valor: null
      },
      isEdit: false,
    };
  },
  computed: {
    ...mapState('empresa', ['tarifas', 'tarifaEmpresa', "empresa"]),
    btnActive() {
      return this.dataTarifa.tarifa !== null && this.dataTarifa.valor !== null && this.dataTarifa.valor !== ''
    }
  },
  methods: {
    ...mapActions('empresa', ['getCatalogos', 'clearEmpresa', 'saveEmpresas','getEmpresa','updateEmpresas']),
    addTarifa() {
      const existe = this.taraficacionLocal.filter(ele => {
        return ele.tarifa._id == this.dataTarifa.tarifa._id
      })
      if (existe.length > 0) {
        this.alertError({text: 'Ya tiene esta tarifa agregada'})
        return
      }
      this.taraficacionLocal.push(this.dataTarifa)
      this.dataTarifa = {
        tarifa: null,
        valor: null
      }
    },
    eliminarTarifa(tarifa) {
      const nuevoVal = this.taraficacionLocal.filter(ele => {
        return ele.tarifa._id != tarifa._id
      })
      this.taraficacionLocal = nuevoVal;
    },
    guardar() {
      this.empresa.tarificacion = this.taraficacionLocal
      if (!this.isEdit) {
        this.saveEmpresas(this.empresa)
          .then((res) => {
            this.alertSuccess({text: 'Empresa almacenada con exito'})
            this.clearEmpresa()
            this.$router.push('/empresa')
          })
          .catch(error => {
            validaError(error)
            this.alertError({text: error.response.data.error})
          })
      } else {
        this.updateEmpresas(this.empresa)
          .then((res) => {
            this.alertSuccess({text: 'Empresa actualizada con exito'})
            this.clearEmpresa()
            this.$router.push('/empresa')
          })
          .catch(error => {
            validaError(error)
            this.alertError({text: error.response.data.error})
          })
      }
    }
  },
  mounted() {
    this.getCatalogos()
    if (this.$route.params.id) {
      this.isEdit = true;
      this.getEmpresa(this.$route.params.id)
      setTimeout(() => {
        this.taraficacionLocal = this.empresa.tarificacion
      },200)

    } else {
      this.clearEmpresa()
    }
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
