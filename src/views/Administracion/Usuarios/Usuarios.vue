<template>
  <div>
    <base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success">
      <!-- Card stats -->
      <router-link to="/usuarios/create" aria-current="page" class="btn btn-warning h4 text-white  router-link-active">
        Usuario Nuevo
        <span class="btn-inner--icon">
                  <i class="fas fa-plus"></i>
                  </span>
      </router-link>
    </base-header>
    <!--Charts-->
    <b-container fluid class="mt--7">
      <card>
        <b-row slot="header">
          <b-col lg="3">
            <base-input label="Nombre" v-model="searchData.nombre"></base-input>
          </b-col>
          <b-col lg="3">
            <base-input label="Correo" v-model="searchData.correo"></base-input>
          </b-col>
          <b-col lg="3">
            <base-input type="number" v-model="searchData.telefono" label="Telefono"></base-input>
          </b-col>
          <b-col lg="3">
            <br>
            <base-button type="info" icon size="lg" title="Limpiar" @click="buscar">
                  <span class="btn-inner--icon">
                  <i class="fas fa-search"></i>
                  </span>
            </base-button>
            <base-button type="info" icon size="lg" title="Limpiar" @click="limpiarsearch">
                  <span class="btn-inner--icon">
                  <i class="fas fa-spinner"></i>
                  </span>
            </base-button>
            <!--            <base-button type="success" icon size="lg" title="Exportar Excel">-->
            <!--                  <span class="btn-inner&#45;&#45;icon">-->
            <!--                  <i class="fas fa-file-excel"></i>-->
            <!--                  </span>-->
            <!--            </base-button>-->
            <downloadexcel
              class="btn btn-success btn-lg"
              :fetch="getDataExport"
              :fields="json_fileds"
              name="usuarios.xls"
            >
              <i class="fas fa-file-excel"></i>
            </downloadexcel>
          </b-col>
        </b-row>

        <div class="table-responsive">
          <table class="table table-hover table-bordered table-height" id="datatable">
            <thead>
            <tr>
              <th>Opciones</th>
              <th v-for="key in Object.keys(json_fileds)" v-text="key"></th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="user in usuarios">
              <td>
                <router-link :to="`/usuarios/edit/${user._id}`" aria-current="page"
                             class="btn btn-warning btn-sm h4 mb-0 text-white  d-none d-lg-inline-block active router-link-active">
                <span class="btn-inner--icon">
                                        <i class="fas fa-pen"></i>
                                    </span>
                </router-link>
                <base-button v-if="user.activo" icon type="danger" size="sm" title="Desactivar"
                             @click="eliminarUsuario(user._id)">
                                    <span class="btn-inner--icon">
                                        <i class="fas fa-trash"></i>
                                    </span>
                </base-button>
                <base-button v-else icon type="info" size="sm" title="Activar" @click="activarUsuario1(user._id)">
                                    <span class="btn-inner--icon">
                                        <i class="fas fa-check"></i>
                                    </span>
                </base-button>


              </td>
              <td v-text="user.nombre"></td>
              <td v-text="user.email"></td>
              <td v-text="user.telefono"></td>
              <td>
                <b-badge variant="success" v-if="user.activo">Activo</b-badge>
                <b-badge variant="danger" v-else>Desactivado</b-badge>
              </td>
            </tr>
            </tbody>

          </table>
          <b-card-footer class="py-4 d-flex justify-content-center">
            <base-pagination v-model="currentPage" :total="totalPage" :per-page="5"
                             @change="paginate"></base-pagination>
          </b-card-footer>
        </div>

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
import {mapState, mapMutations, mapActions, mapGetters} from 'vuex'
import Sweetalert from "@/plugins/sweetalert";
import {activarUsuario, clearSearch} from "@/modules/Administracion/usuario/actions";
import downloadexcel from "vue-json-excel"
import axios from "axios";
import {dataHeader} from "@/util/dataAxios";

export default {
  mixins: [Sweetalert],
  components: {
    Card,
    BaseInput,
    BaseButton,
    downloadexcel
  },
  data() {
    return {
      currentPage: 1,
      limit: 5,
      json_fileds: {
        "Nombre": "nombre",
        "Email": "email",
        "Télefono": "telefono",
        "Activo": {
          field: "activo",
          callback: (val) => {
             if(val){
               return `Activo`
             }else{
               return `Inactivo`
             }

          }
        }
      }
    };
  },
  methods: {
    ...mapActions('usuarios', ['getUsuarios', 'deleteUsuario', 'activarUsuario', 'perPage', 'clearSearch']),
    eliminarUsuario(id) {
      this.confirm({
        text: 'Esta seguro de desactivar usuarios'
      }).then((resp) => {
        if (resp.isConfirmed) {
          this.deleteUsuario(id);
        }
      })
    },
    activarUsuario1(id) {
      this.confirm({
        text: 'Esta seguro de activar usuarios'
      }).then((resp) => {
        if (resp.isConfirmed) {
          this.activarUsuario(id);
        }
      })
    },
    buscar() {
      if (this.validateSearch()) {
        const url = `page=0&limit=${this.limit}&nombre=${this.searchData.nombre}&email=${this.searchData.correo}&telefono=${this.searchData.telefono}`
        this.getUsuarios(url)
      } else {
        this.limpiarsearch()
      }
    },
    limpiarsearch() {
      this.clearSearch()
      this.getUsuarios()
    },
    validateSearch() {
      let tieneData = false;
      if (!this.searchData.nombre || this.searchData.nombre.trim() == "") {
        this.searchData.nombre = null;
      } else {
        tieneData = true
      }
      if (!this.searchData.correo || this.searchData.correo.trim() == "") {
        this.searchData.correo = null;
      } else {
        tieneData = true
      }
      if (!this.searchData.telefono || this.searchData.telefono.trim() == "") {
        this.searchData.telefono = null;
      } else {
        tieneData = true
      }
      return tieneData
    },
    paginate(val) {
      if (this.validateSearch()) {
        const url = `page=${val - 1}&limit=${this.limit}&nombre=${this.searchData.nombre}&email=${this.searchData.correo}&telefono=${this.searchData.telefono}`
        this.getUsuarios(url)
      } else {
        const url = `page=${val - 1}&limit=${this.limit}`
        this.getUsuarios(url)
      }
    },
    async getDataExport(){
      const header = dataHeader()

      if (this.validateSearch()) {
        const response = await axios.get(`${process.env.VUE_APP_BACKEND_URL}usuarios/export?nombre=${this.searchData.nombre}&email=${this.searchData.correo}&telefono=${this.searchData.telefono}`,header)
        return response.data
      } else {
        const response = await axios.get(`${process.env.VUE_APP_BACKEND_URL}usuarios/export`,header)
        return response.data
      }
    }
  },
  computed: {
    ...mapState('usuarios', ['usuarios', 'page', 'totalPage', 'searchData'])
  },
  mounted() {
    if (this.validateSearch()) {
      const url = `page=0&limit=${this.limit}&nombre=${this.searchData.nombre}&email=${this.searchData.correo}&telefono=${this.searchData.telefono}`
      this.getUsuarios(url)
    } else {
      this.getUsuarios()
      // this.json_data = this.usuarios
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
