<template>
  <b-row v-loading.fullscreen.lock="loading" id="loading"></b-row>
</template>
<script>
import Vue from 'vue';
import { Loading } from 'element-ui';

Vue.use(Loading.directive);
export default {
  props: {
    loading: {
      type: Boolean,
      default: false,
    }
  }
};
</script>
<style>
/*#loading {*/
/*  min-height: 200px;*/
/*  display: flex;*/
/*  align-items: center;*/
/*}*/

/*.el-loading-spinner .path {*/
/*  stroke: #66615b !important;*/
/*}*/

/*.el-loading-mask {*/
/*  background: transparent !important;*/
/*}*/
</style>
