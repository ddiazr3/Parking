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
            <base-input label="Nombre"></base-input>
          </b-col>
          <b-col lg="3">
            <base-input label="Correo"></base-input>
          </b-col>
          <b-col lg="3">
            <base-input type="number" label="Telefono"></base-input>
          </b-col>

          <b-col lg="3">
            <br>
            <base-button type="info" icon size="lg" title="Buscar">
                  <span class="btn-inner--icon">
                  <i class="fas fa-search"></i>
                  </span>
            </base-button>
            <base-button type="success" icon size="lg" title="Exportar Excel">
                  <span class="btn-inner--icon">
                  <i class="fas fa-file-excel"></i>
                  </span>
            </base-button>
          </b-col>
        </b-row>

        <div class="table-responsive">
          <table class="table table-hover table-bordered" id="datatable">
            <thead>
            <tr>
              <th>Opciones</th>
              <th>Nombre</th>
              <th>Correo</th>
              <th>Télefono</th>
              <th>Estado</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="user in usuarios">
              <td>
                <router-link :to="`/usuarios/edit/${user._id}`" aria-current="page"  class="btn btn-warning btn-sm h4 mb-0 text-white  d-none d-lg-inline-block active router-link-active">
                <span class="btn-inner--icon">
                                        <i class="fas fa-pen"></i>
                                    </span>
                </router-link>
                <base-button icon type="danger" size="sm" title="Eliminar" @click="eliminarUsuario(user._id)">
                                    <span class="btn-inner--icon">
                                        <i class="fas fa-trash"></i>
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
            <base-pagination v-model="currentPage" :per-page="10" :total="12"></base-pagination>
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
import { mapState, mapMutations,mapActions, mapGetters } from 'vuex'
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
      currentPage: 1,
      nombre: ''
    };
  },
  methods: {
    ...mapActions('usuarios',['getUsuarios','deleteUsuario']),
    eliminarUsuario(id){
     this.confirm({
        text: 'Esta seguro de eliminar usuarios'
      }).then((resp)=>{
       if(resp.isConfirmed){
         this.deleteUsuario(id);
       }
     })
    }
  },
  computed: {
    ...mapState('usuarios',['usuarios'])
  },
  mounted() {
    this.getUsuarios()
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
