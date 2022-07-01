<template>
  <div>
  <router-view></router-view>
  </div>
</template>

<script>
import axios from "axios";
import io from 'socket.io-client'

export default {
  components:{
  },
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
<style>
.table-height{
  height: 500px;
}
</style>
