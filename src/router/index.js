import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import WorkUi from "../views/WorkUi.vue";
import Design from "../views/Design.vue";
import CaseContent01 from "../views/cases/CaseContent01.vue";
import CaseContent02 from "../views/cases/CaseContent02.vue";
import CaseContent03 from "../views/cases/CaseContent03.vue";

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
    path: "/casecontent01",
    name: "CaseContent01",
    component: CaseContent01
  },
  {
    path: "/casecontent02",
    name: "CaseContent02",
    component: CaseContent02
  },
  {
    path: "/casecontent03",
    name: "CaseContent03",
    component: CaseContent03
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
