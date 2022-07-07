import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';
import axios from "axios";

Vue.use(VueRouter);

// configure router
const router = new VueRouter({
  routes, // short for routes: routes
  linkActiveClass: 'active',
  scrollBehavior: (to, from, savedPosition) => {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return {selector: to.hash};
    }
    return {x: 0, y: 0};
  }
});

router.beforeEach((to, from, next) => {
  //valida a los que traen el meta requiresAuth
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    let dataToken = existeToken()
    if (dataToken) {
      const url = `${process.env.VUE_APP_BACKEND_URL}verificar-token`;
      axios.get(url, {
        headers: {
          'auth-token': dataToken
        }
      }).then((resp) => {
        next();
      }).catch((e) => {
        next({name: "login"});
      })
    } else {
      next({name: "login"});
    }
  } else {

    switch (to.name) {

      case 'login' :
        if(existeToken()){
          next({name: "dashboard"});
        }else{
          next();
        }
        break;
      default:
        next();
    }


  }
})

function existeToken() {
  const token = localStorage.getItem("token_acces") ? localStorage.getItem("token_acces") : null
  if (token) {
    return token
  }
  return false
}

export default router;
