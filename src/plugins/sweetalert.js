import Vue from 'vue';
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

Vue.use(VueSweetalert2)
const SweetAlert = {
  methods: {
    alert(context, options) {
      context.$swal(options);
    },
    alertSuccess({title = "Confirmación", text = "Todo correcto", timer = 3000,
      showConfirmationButton = false} = {}) {
      this.$swal({
        title: title,
        text: text,
        timer: timer,
        showConfirmButton: showConfirmationButton,
        icon: 'success'
      });
    },
    alertWarning({title = "Atención", text = ""} = {}) {
      this.$swal({
        title: title,
        html: text,
        icon: 'warning'
      });
    },
    alertError({title = "Error", text = "Hubo un error"} = {}) {
      this.$swal({
        title: title,
        text: text,
        icon: 'error'
      });
    },
    alertInfo({title = "Info", text = ""} = {}) {
      this.$swal({
        title: title,
        text: text,
        type: 'info'
      });
    },
    confirm( options) {
      options = Object.assign({
        title: "Confirmación",
        text: "¿Está seguro?",
        icon: "warning",
        showCancelButton: true,
        allowOutsideClick : false,
        confirmButtonText: "Si",
        cancelButtonText: "No",
      }, options);
      return this.$swal(options);
    }
  }
}

export default SweetAlert;
