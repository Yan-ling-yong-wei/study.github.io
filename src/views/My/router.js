export default [
  {
    path: "/info",
    name: "name",
    component: () => import("./Info.vue"),
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
]
