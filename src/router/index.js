import { createRouter, createWebHistory } from 'vue-router';

/* importaciones estaticas
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Citys from "../views/Citys.vue";
*/

/* importaciones dinamicas abajo */
const Home = () => import("../views/Home.vue");
const About = () => import("../views/About.vue");
const Citys = () => import("../views/Citys.vue");
const Population = () => import("../views/Population.vue");

const routes = [
  { path:'/', component: Home },
  { path:'/About', component:()=> import("../views/About.vue") },
  { path:'/Citys', component: ()=> import("../views/Citys.vue") },
  {path:'/Population', component: ()=> import("../views/Population.vue")},
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,

});

export default router;
