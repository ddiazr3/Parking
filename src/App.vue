<template>
  <div>
    <loading-panel :loading="isLoading"></loading-panel>
  <router-view></router-view>
  </div>
</template>

<script>
import axios from "axios";
import io from 'socket.io-client'
import LoadingPanel from "@/components/LoadingPanel";
import {mapState} from "vuex";

export default {
  components:{
    LoadingPanel
  },
  computed:{
    ...mapState(['isLoading'])
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
