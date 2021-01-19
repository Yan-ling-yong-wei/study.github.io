export default [
  {
    path: "/info",
    name: "name",
    component: () => import("./Info.vue"),
    meta: {
      needLogin: true,
    },
  },
  {
    path: "/myStudy",
    name: "myStudy",
    component: () => import("./Study"),
  },
  {
    path: "/calendar",
    name: "calendar",
    component: () => import("./Calendar.vue"),
  },
  {
    path: "/collect",
    name: "collect",
    component: () => import("./Collect.vue"),
  },
  {
    path: "/attention",
    name: "attention",
    component: () => import("./Attention.vue"),
  },
  {
    path: "/opinion",
    name: "opinion",
    component: () => import("./Opinion.vue"),
  },
  {
    path: "/learn",
    name: "learn",
    component: () => import("./Learn.vue"),
  },
  {
    path: "/discounts",
    name: "discounts",
    component: () => import("./Discounts.vue"),
  },
  {
    path: "/card",
    name: "card",
    component: () => import("./Card.vue"),
  },
  {
    path: "/svip",
    name: "svip",
    component: () => import("./Svip.vue"),
  },
  {
    path: "/open",
    name: "open",
    component: () => import("./Open.vue"),
  },
  {
    path: "/Personal",
    name: "Personal",
    component: () => import("./infoModule/Personal"),
  },
  {
    path: "/Gender",
    name: "Gender",
    component: () => import("./infoModule/Gender"),
  },
  {
    path: "/Courses",
    name: "Courses",
    component: () => import("./orderForm/Courses"),
  },
  {
    path: "/Appointment",
    name: "Appointment",
    component: () => import("./orderForm/Appointment"),
  },
]
