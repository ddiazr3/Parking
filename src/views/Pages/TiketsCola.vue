<template>
  <div>
    <h1>Tickets en cola</h1>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        model: {
          email: '',
          password: '',
          rememberMe: false
        }
      };
    },
    methods: {
      onSubmit() {
        // this will be called only after form is valid. You can do api call here to login
      }
    }
  };
</script>
