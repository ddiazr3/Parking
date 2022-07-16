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
        <validation-observer v-slot="{handleSubmit}" ref="formValidator">
          <b-form @submit.prevent="handleSubmit(guardar)">
            <h6 class="heading-small text-muted mb-4">Información del rol</h6>
            <b-row>
              <b-col lg="4">
                <base-input
                  type="text"
                  label="Nombre"
                  placeholder="Administrador"
                  v-model="role.role"
                  name="Nombre"
                  :rules="{required: true, min: 1}"
                >
                </base-input>
              </b-col>
              <b-col lg="4">
                <base-input
                  type="text"
                  label="Descripción"
                  placeholder="Descripción"
                  v-model="role.descripcion"
                >
                </base-input>
              </b-col>
              <b-col lg="4">
                <base-input label="Empresas">
                  <select class="form-control" v-model="role.empresaid" name="Empresa"  :rules="{required: true}">
                    <option value="0">Ninguna</option>
                    <option v-for="emp in empresas" :value="emp._id" v-text="emp.empresa"></option>
                  </select>
                </base-input>
              </b-col>
            </b-row>
            <div class="dropdown-divider"></div>
            <h4 class="heading-small text-muted mb-4">Módulos</h4>
            <b-row>
              <b-col lg="2" v-for="m in modulos" class="pt-3">
                <card style="height: 411px !important; ">
                  <div slot="header" class="text-center bg-gradient-success">
                    <h3 class="heading-small text-muted" style="color: black !important;" v-text="m[0]"></h3>
                  </div>
                  <b-form-group>
                    <b-form-checkbox v-for="per in m[1]" :value="per._id" v-model="perRoles">
                      {{ per.permiso.nombrefriendly }}
                    </b-form-checkbox>
                  </b-form-group>
                  <div slot="footer">
                    <base-button type="info" native-type="button" size="sm" @click="todos(m[1])">Todos</base-button>
                    |
                    <base-button type="warning" native-type="button" size="sm" @click="ninguno(m[1])">Ninguno
                    </base-button>
                  </div>
                </card>
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
import {mapActions, mapState} from "vuex";
import Sweetalert from "@/plugins/sweetalert";
import {saveRoles} from "@/modules/Administracion/roles/actions";
import { validaError } from '@/util/dataAxios'
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
      isEdit: false,
      perRoles : [],
    };
  },
  computed: {
    ...mapState('roles', ['role', 'modulos','empresas'])
  },
  methods: {
    ...mapActions('roles', ['getModulosPermisos', 'saveRoles','clearRoles','getRole','updateRole']),
    guardar() {
      if (this.perRoles.length < 1) {
        this.alertError({text: 'Ingrese al menos un permiso'})
        return
      }
      this.role.permisosrole = this.perRoles
      if(this.isEdit){
        this.updateRole(this.role)
          .then((res) => {
            this.alertSuccess({text: 'Role actualizado con exito'})
            this.clearRoles()
            this.$router.push('/roles')
          })
          .catch(error => {
            validaError(error)
            this.alertError({text: error.response.data.error})
          })
      }else{
        this.saveRoles(this.role)
          .then((res) => {
            this.alertSuccess({text: 'Rol almacenado con exito'})
            this.clearRoles()
            this.$router.push('/roles')
          })
          .catch(error => {
              validaError(error)
              this.alertError({text: error.response.data.error})
          })
      }

    },
    todos(permisos) {
      permisos.forEach(per => {
        this.perRoles.push(per._id)
      })
    },
    ninguno(permisos) {
      permisos.forEach(per => {
        this.perRoles.forEach(function (perm, index, object) {
          if (perm === per._id) {
            object.splice(index, 1);
          }
        });
      })
    }
  },
  mounted() {
    this.getModulosPermisos()
    if (this.$route.params.id) {
      this.isEdit = true;
      this.getRole(this.$route.params.id)
      setTimeout(()=>{
        console.log(this.modulo)
        this.perRoles = this.role.permisosrole
      },300)
    } else {
      this.clearRoles()
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
