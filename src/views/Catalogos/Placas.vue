<template>
<div>

    <base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success">
        <!-- Card stats -->
    </base-header>

    <!--Charts-->
    <b-container fluid class="mt--7">
        <card>
            <b-row slot="header">
                <b-col lg="2">
                    <base-input type="text" label="Tipo Placa" placeholder="Tipo Placa (P0-)"></base-input>
                </b-col>
                <b-col lg="2">
                    <br>
                    <base-button type="info">Guardar/Actualizar</base-button>
                </b-col>
            </b-row>

            <div class="table-responsive">
                <table class="table table-hover table-bordered" id="datatable">
                    <thead>
                        <tr>
                            <th>Opciones</th>
                            <th>Tipo Placa</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>
                                <base-button icon type="warning" size="sm" title="Actualizar">
                                    <span class="btn-inner--icon">
                                        <i class="fas fa-pen"></i>
                                    </span>
                                </base-button>
                              <base-button icon type="danger" size="sm" title="Eliminar">
                                    <span class="btn-inner--icon">
                                        <i class="fas fa-trash"></i>
                                    </span>
                              </base-button>
                            </td>
                            <td>P0-</td>
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

export default {
    components: {
        Card,
        BaseInput,
        BaseButton
    },
    data() {
        return {};
    },
    methods: {

    },
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
          "lengthMenu": [10,25,50]
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
