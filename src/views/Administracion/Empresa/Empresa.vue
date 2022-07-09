<template>
  <div>

    <base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success">
      <!-- Card stats -->
      <router-link to="/empresa/create" aria-current="page"
                   class="btn btn-warning h4 mb-3 text-white router-link-active">
        Empresa Nueva
        <span class="btn-inner--icon">
                <i class="fas fa-plus"></i>
            </span>
      </router-link>
    </base-header>

    <!--Charts-->
    <b-container fluid class="mt--7">
      <card>

        <div class="table-responsive">

          <table class="table table-hover table-bordered" id="datatable">
            <thead>
            <tr>
              <th>Opciones</th>
              <th>Nombre</th>
              <th>Telefono</th>
              <th>Dirección</th>
              <th>Estado</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="empresa in empresas">
              <td>
                <router-link :to="`/empresa/edit/${empresa._id}`" aria-current="page"
                             class="btn btn-warning btn-sm h4 mb-0 text-white  d-none d-lg-inline-block active router-link-active">
                <span class="btn-inner--icon">
                                        <i class="fas fa-pen"></i>
                                    </span>
                </router-link>

                <base-button v-if="empresa.activo" icon type="danger" size="sm" title="Desactivar"
                             @click="eliminarEmpresa(empresa._id)">
                                    <span class="btn-inner--icon">
                                        <i class="fas fa-trash"></i>
                                    </span>
                </base-button>
                <base-button v-else icon type="info" size="sm" title="Activar" @click="activarEmpresa1(empresa._id)">
                                    <span class="btn-inner--icon">
                                        <i class="fas fa-check"></i>
                                    </span>
                </base-button>

              </td>
              <td v-text="empresa.empresa"></td>
              <td v-text="empresa.telefono"></td>
              <td v-text="empresa.direccion"></td>
              <td>
                <b-badge v-if="empresa.activo" variant="success">Activo</b-badge>
                <b-badge v-else variant="danger">Desactivo</b-badge>
              </td>
            </tr>
            </tbody>

          </table>
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
      currentPage: 1
    };
  },
  computed: {
    ...mapState('empresa', ['empresas']),
  },
  methods: {
    ...mapActions('empresa', ['getEmpresas','deleteEmpresa','activarEmpresa']),
    eliminarEmpresa(id){
      this.confirm({
        text: 'Esta seguro de eliminar la empresa'
      }).then((resp) => {
        if (resp.isConfirmed) {
          this.deleteEmpresa(id);
        }
      })
    },
    activarEmpresa1(id){
      this.confirm({
        text: 'Esta seguro de activar la empresa'
      }).then((resp) => {
        if (resp.isConfirmed) {
          this.activarEmpresa(id);
        }
      })
    }
  },
  mounted() {
    this.getEmpresas();
    setTimeout(() => {
      $("#datatable").DataTable({
        "language": {
          "lengthMenu": "Cantidad _MENU_ Paginas",
          "zeroRecords": "Nothing found - sorry",
          "info": "No. de pagina _PAGE_ de _PAGES_",
          "infoEmpty": "No hay informacion",
          "infoFiltered": "(filtered from _MAX_ total records)",
          "search": "Buscar",
          "emptyTable": "No hay información",
          "paginate": {
            "first": "Inicio",
            "last": "Fin",
            "next": ">",
            "previous": "<"
          },
          "bDestroy": true,
          "bSort": false,
        },
        "pageLength": 15,
        "lengthMenu": [10, 25, 50]
      });
    }, 1000)
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
