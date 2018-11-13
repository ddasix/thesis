import Vue from "vue";
import Router from "vue-router";
import Home from "../components/Home.vue";
import Login from "../components/Login.vue";
import Schedule from "../components/Schedule.vue";
import store from "../store";

Vue.use(Router);

const requireAuth = () => (to, from, next) => {
  if (store.getters.isAuthenticated) {
    next();
  } else {
    next("/login?returnPath=schedule");
  }
};

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/login",
      name: "Login",
      component: Login
    },
    {
      path: "/schedule",
      name: "Schedule",
      component: Schedule
      // beforeEnter: requireAuth()
    }
  ]
});
