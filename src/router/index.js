import Vue from "vue"
import VueRouter from "vue-router"
import Home from "../views/Home/Home.vue"
import myRoutes from "../views/My/router"
Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    redirect: "/home",
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
  // 注册路由 开始
  {
    path:'/login',
    name:'login',
    component:()=>import('../views/Register/login')
  },
  {
    path:'/Register',
    name:'Register',
    component:()=>import('../views/Register/Register')
  },
  {
    path:'/Phone',
    name:'Phone',
    component:()=>import('../views/Register/Phone')
  },
  {
    path:'/Retrieve',
    name:'Retrieve',
    component:()=>import('../views/Register/Retrieve')
  },
  {
    path:'/Formation',
    name:'Formation',
    component:()=>import('../views/Register/Formation')
  },
  ...myRoutes,
]
const router = new VueRouter({
  routes,
})
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err)
}

export default router
