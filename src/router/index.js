import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "../views/Home.vue";
import telaInicial from "../views/register/telaInicial.vue";
import cadastro from "../views/register/Cadastro.vue";
import pagina1 from "../views/register/Pagina1.vue";
import LoginVue from "../views/register/Login.vue";

Vue.use(VueRouter);

const routes = [
  {

        path: "/",
        name: "telaInicial",
        component: telaInicial,
      
  },
  { 
    path: "/login",
    name: "login",
    component: LoginVue
  },
  {
    path: "/cadastro",
    name: "cadastro",
    component: cadastro,
  },
  {
    path: "/pagina1",
    name: "pagina1",
    component: pagina1,
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
