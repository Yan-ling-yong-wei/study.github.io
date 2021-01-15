export default [{
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
  {
    path: "/collect",
    name: "collect",
    component: () => import('./Collect.vue')
  },
  {
    path: "/attention",
    name: "attention",
    component:()=>import('./Attention.vue')
  },
  {
    path:'/opinion',
    name:"opinion",
    component:()=>import('./Opinion.vue')
  },
  {
    path:'/learn',
    name:"learn",
    component:()=>import('./Learn.vue')
  },
  {
    path: '/discounts',
    name: "discounts",
    component:()=>import('./Discounts.vue')
  }
]