/*!

=========================================================
* BootstrapVue Argon Dashboard - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/bootstrap-vue-argon-dashboard
* Copyright 2020 Creative Tim (https://www.creative-tim.com)

* Coded by www.creative-tim.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Vue from 'vue';
import DashboardPlugin from './plugins/dashboard-plugin';
import App from './App.vue';
import store from './store'
import moment from 'moment'
import SocketIo from 'socket.io-client'
import VueSocketIo from 'vue-socket.io'

// router setup
import router from './routes/router';

export const Socket = SocketIo(`http://localhost:3001`)
Vue.use(VueSocketIo, Socket)
moment.locale('es')

// plugin setup
Vue.use(DashboardPlugin);
Vue.prototype.moment = moment
/* eslint-disable no-new */
new Vue({
    el: '#app',
    render: h => h(App),
    router,
    store
});
