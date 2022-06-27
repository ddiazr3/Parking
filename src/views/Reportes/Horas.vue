<template>
  <div>

    <base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success">
      <!-- Card stats -->
      <h3>Reporte Horas</h3>
    </base-header>

    <!--Charts-->
    <b-container fluid class="mt--7">
      <card>
        <b-row slot="header">
          <b-col lg="3">
            <base-input type="date" label="Fecha Inicio"></base-input>
          </b-col>
          <b-col lg="3">
            <base-input type="date" label="Fecha Fin"></base-input>
          </b-col>
          <b-col lg="3">
            <base-input type="time" label="Hora"></base-input>
          </b-col>
          <b-col lg="3">
            <br>
            <base-button type="success" icon size="lg" block title="Exportar Excel">
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
