<template>
  <div>
  <router-view></router-view>
  <button>Hola************</button>
  </div>
</template>

<script>
import axios from "axios";
import io from 'socket.io-client'

export default {
  data(){
    return{
      socket: io(`${process.env.VUE_APP_BACKEND_URL}`)
    }
  },
  mounted() {
    this.socket.emit('connection')
  }
}
</script>
