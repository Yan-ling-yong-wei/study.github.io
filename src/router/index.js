import Vue from "vue"
import VueRouter from "vue-router"
import Home from "../views/Home/Home.vue"
import myRoutes from "../views/My/router"
import LogRouter from "../views/Register/log"
import SearchRouter from "../views/Search/sear"
import ejs from "../views/HomeFeature/ejs"
import exercise from "../views/Exercise/exercise"

import { Toast } from "vant"
Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/envelope",
    name: "envelope",
    component: () => import("../views/HomeFeature/Envelope.vue"),
    meta: {
      title: "给我们留言",
    },
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
        meta: {
          title: "首页",
        },
      },
      {
        path: "/course",
        name: "course",
        component: () => import("../views/Home/Course.vue"),

        meta: {
          title: "课程列表",
          needLogin: true,
        },
      },
      {
        path: "/record",
        name: "record",
        component: () => import("../views/Home/Record.vue"),
        meta: {
          title: "约课记录",
        },
      },
      {
        path: "/practice",
        name: "practice",
        component: () => import("../views/Home/Practice.vue"),
        meta: {
          title: "练习",
        },
      },
      {
        path: "/my",
        name: "my",
        component: () => import("../views/Home/My.vue"),
        meta: {
          needLogin: true,
          title: "我的",
        },
      },
    ],
  },
  ...myRoutes,
  ...LogRouter,
  ...SearchRouter,
  ...ejs,
  ...exercise,
]
const router = new VueRouter({
  routes,
})
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err)
}
// router.beforeEach((to, from, next) => {
//   document.title = to.meta.title
//   if (!sessionStorage.getItem("token")) {
//     if (to.matched.some((item) => item.meta.needLogin)) {
//       Toast.fail("请先登录！")
//       next("/login")
//     } else {
//       next()
//     }
//   } else {
//     next()
//   }
// })
export default router
