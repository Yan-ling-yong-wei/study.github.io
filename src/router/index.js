import Vue from "vue"
import VueRouter from "vue-router"
import Home from "../views/Home/Home.vue"
import myRoutes from "../views/My/router"
import LogRouter from '../views/Register/log'
import SearchRouter from '../views/Search/sear'
Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/Envelope",
    name: "Envelope",
    component: () => import("../views/HomeFeature/Envelope"),
  },
  {
    path: "/main",
    name: "main",
    component: () => import("../views/Home/main.vue"),
    children: [
      {
        path: "/home",
        name: "home",
        component: Home,
      },
      {
        path: "/course",
        name: "course",
        component: () => import("../views/Home/Course.vue"),
      },
      {
        path: "/record",
        name: "record",
        component: () => import("../views/Home/Record.vue"),
      },
      {
        path: "/practice",
        name: "practice",
        component: () => import("../views/Home/Practice.vue"),
      },
      {
        path: "/my",
        name: "my",
        component: () => import("../views/Home/My.vue"),
      },
    ],
  },
  ...myRoutes,
  ...LogRouter,
  ...SearchRouter,
]
const router = new VueRouter({
  routes,
})
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err)
}

export default router
