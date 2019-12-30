import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import WorkUi from "../views/WorkUi.vue";
import Design from "../views/Design.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/workui",
    name: "workui",
    component: WorkUi
  },
  {
    path: "/design",
    name: "design",
    component: Design
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
