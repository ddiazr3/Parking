<template>
  <div>

    <base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success">
      <!-- Card stats -->
    </base-header>

    <!--Charts-->
    <b-container fluid class="mt--7">
      <card>
        <b-row slot="header">
          <b-col cols="8">
            <h3 class="mb-0">Vehículos Activos</h3>
          </b-col>
          <b-col cols="4" class="text-right">
            <base-button type="success"  icon size="sm" title="Exportar Excel">
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
              <th>Placa</th>
              <th>Entrada</th>
              <th>Salida</th>
              <th>Min. Trascurridos</th>
            </tr>
            </thead>

            <tbody>
            <tr>
              <td>ABC-1234</td>
              <td>26/06/2022 14:25:00</td>
              <td>26/06/2022 16:25:00</td>
              <td>01:00:00</td>
            </tr>
            <tr>
              <td>DEF-4568</td>
              <td>26/06/2022 134:25:00</td>
              <td></td>
              <td>01:00:00</td>
            </tr>
            <tr>
              <td>ABC-1234</td>
              <td>26/06/2022 14:25:00</td>
              <td>26/06/2022 16:25:00</td>
              <td>01:00:00</td>
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
import EditProfileForm from './Pages/UserProfile/EditProfileForm.vue';
import Card from '../components/Cards/Card.vue';
import BaseInput from '../components/Inputs/BaseInput.vue';
import BaseButton from '../components/BaseButton.vue';


import "jszip/dist/jszip.min.js";
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import "datatables.net-bs4/css/dataTables.bootstrap4.min.css";
import "datatables.net-bs4/js/dataTables.bootstrap4"


import $ from "jquery";

export default {
  components: {
    EditProfileForm,
    Card,
    BaseInput,
    BaseButton
  },
  data() {
    return {};
  },
  methods: {},
  mounted() {
    var datatable = $("#datatable").DataTable({
      "language": {
        "lengthMenu": "Cantidad _MENU_ Paginas",
        "zeroRecords": "Nothing found - sorry",
        "info": "No. de pagina _PAGE_ de _PAGES_",
        "infoEmpty": "No hay informacion",
        "infoFiltered": "(filtered from _MAX_ total records)",
        "search": "Buscar",
        "emptyTable": "No hay informacion",
        "paginate": {
          "first": "Inicio",
          "last": "Fin",
          "next": ">",
          "previous": "<"
        },
        "bDestroy": true,
        "bSort": false,
      },
      "lengthMenu": [10, 25, 50]
    });
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
