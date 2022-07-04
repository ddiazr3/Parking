<template>
  <div>
    <base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success"></base-header>
    <!--Charts-->
    <b-container fluid class="mt--7">
      <card>
        <b-row slot="header">
          <b-col lg="4">
            <h3 v-if="!$route.params.id ">Crear Usuario</h3>
            <h3 v-if="$route.params.id">Editar Usuario</h3>
          </b-col>
          <b-col lg="8" class="text-right">
            <!--           <nav aria-label="breadcrumb" class="d-none d-md-inline-block ml-md-4">-->
            <!--             <route-breadcrumb></route-breadcrumb>-->
            <!--           </nav>-->
          </b-col>
        </b-row>
        <validation-observer v-slot="{handleSubmit}" ref="formValidator">
          <b-form @submit.prevent="handleSubmit(guardar)" autocomplete="off">
            <h6 class="heading-small text-muted mb-4">Información del usuario</h6>
            <b-row>
              <b-col lg="4">
                <base-input
                  type="text"
                  label="Nombre"
                  name="Nombre"
                  placeholder="Nombre"
                  :rules="{required: true, min: 6}"
                  v-model="usuario.nombre"
                >
                </base-input>
              </b-col>
              <b-col lg="4">
                <base-input
                  type="text"
                  label="Direción"
                  name="Direción"
                  placeholder="Dirección"
                  :rules="{required: true, min: 6}"
                  v-model="usuario.direccion"
                >
                </base-input>
              </b-col>
              <b-col lg="4">
                <base-input
                  type="number"
                  label="Télefono"
                  name="Telefono"
                  placeholder="Télefono"
                  v-model="usuario.telefono"
                  :rules="{required: true, min: 8}"
                >
                </base-input>
              </b-col>
              <b-col lg="4">
                <base-input
                  type="text"
                  label="DPI"
                  placeholder="DPI"
                  v-model="usuario.dpi"
                >
                </base-input>
              </b-col>

              <b-col lg="4">
                <base-input
                  type="email"
                  label="Correo"
                  name="Correo"
                  placeholder="xxx@gmail.com"
                  :rules="{required: true, email: true}"
                  v-model="usuario.email"
                >
                </base-input>
              </b-col>
              <b-col lg="4">
                <base-input label="Empresa">
                  <select class="form-control">
                    <option>Rol 1</option>
                    <option>Rol 2</option>
                  </select>
                </base-input>
              </b-col>
              <b-col lg="4">
                <base-input label="Empresa">
                  <select class="form-control" multiple>
                    <option>Empresa 1</option>
                    <option>Empresa 2</option>
                  </select>
                </base-input>
              </b-col>

              <b-col lg="4">
                <base-input
                  :type="!typePassword ? 'password':'text'"
                  label="Contraseña"
                  name="Contraseña"
                  placeholder="Contraseña"
                  v-model="usuario.password"
                  :rules="{required: !isEdit ? true : false, min: 8}"
                  appendIcon="fas fa-eye"
                >
                  <div slot="append">
                    <i :class="!typePassword ? `fas fa-eye` : `fas fa-eye-slash`" @click="ver(1)"></i>
                  </div>
                </base-input>
              </b-col>
              <b-col lg="4">
                <base-input
                  :type="!typeRePassword ? 'password':'text'"
                  label="Confirmar Contraseña"
                  name="Confirmar"
                  placeholder="Confirmar Contraseña"
                  v-model="repassword"
                  :rules="{required: !isEdit ? true : false, min: 8}"
                >
                  <div slot="append">
                    <i :class="!typeRePassword ? `fas fa-eye` : `fas fa-eye-slash`" @click="ver(2)"></i>
                  </div>
                </base-input>
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
import RouteBreadcrumb from "@/components/Breadcrumb/RouteBreadcrumb";
import {mapActions, mapState} from "vuex";
import Sweetalert from "@/plugins/sweetalert";
import {getUsuario} from "@/modules/Administracion/usuario/actions";

export default {
  mixins: [Sweetalert],
  components: {
    RouteBreadcrumb,
    Card,
    BaseInput,
    BaseButton
  },
  data() {
    return {
      currentPage: 1,
      repassword: null,
      typePassword: false,
      typeRePassword: false,
      isEdit: false
    };
  },
  methods: {
    ...mapActions('usuarios', ['getUsuarios', 'saveUsuarios','updateUsuarios', 'clearUsuario', 'getUsuario']),
    async guardar() {
      if (this.usuario.password != this.repassword) {
        this.alertError({text: 'Las contraseñas son distintas'})
        return
      }
      if(this.isEdit){
          this.updateUsuarios(this.usuario)
            .then((res) => {
              this.alertSuccess({text: 'Usuario actualizado con exito'})
              this.clearUsuario()
              this.$router.push('/usuarios')
            })
            .catch(error => {
              this.alertError({text: error.response.data.error})
              console.log(error)
            })
      }else{
        this.saveUsuarios(this.usuario)
          .then((res) => {
            this.alertSuccess({text: 'Usuario almacenado con exito'})
            this.clearUsuario()
            this.$router.push('/usuarios')
          })
          .catch(error => {
            this.alertError({text: error.response.data.error})
            console.log(error)
          })
      }

    },
    ver(input) {
      if (input == 1) {
        this.typePassword = !this.typePassword
      } else {
        this.typeRePassword = !this.typeRePassword
      }
    }
  },
  computed: {
    ...mapState('usuarios', ['usuario'])
  },
  mounted() {
    if (this.$route.params.id) {
      this.isEdit = true;
      this.getUsuario(this.$route.params.id)
    } else {
      this.clearUsuario()
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
