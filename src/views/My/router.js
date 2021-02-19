export default [
  {
    path: "/info",
    name: "name",
    component: () => import("./Info.vue"),
    meta: {
      needLogin: true,
      title:"个人信息",
    },
  },
  {
    path: "/myStudy",
    name: "myStudy",
    component: () => import("./Study"),
    meta:{
      title:"我的学习",
    },
  },
  {
    path: "/calendar",
    name: "calendar",
    component: () => import("./Calendar.vue"),
    meta:{
      title:"学习日历",
    },
  },
  {
    path: "/collect",
    name: "collect",
    component: () => import("./Collect.vue"),
    meta:{
      title:"我的收藏",
    },
  },
  {
    path: "/attention",
    name: "attention",
    component: () => import("./Attention.vue"),
    meta:{
      title:"我的关注",
    },
  },
  {
    path: "/opinion",
    name: "opinion",
    component: () => import("./Opinion.vue"),
    meta:{
      title:"意见反馈",
    },
  },
  {
    path: "/learn",
    name: "learn",
    component: () => import("./Learn.vue"),
    meta:{
      title:"学习卡兑换",
    },
  },
  {
    path: "/discounts",
    name: "discounts",
    component: () => import("./Discounts.vue"),
    meta:{
      title:"我的优惠券",
    },
  },
  {
    path: "/card",
    name: "card",
    component: () => import("./Card.vue"),
    meta:{
      title:"我的学习卡",
    },
  },
  {
    path: "/svip",
    name: "svip",
    component: () => import("./Svip.vue"),
    meta:{
      title:"会员列表",
    },
  },
  {
    path: "/open",
    name: "open",
    component: () => import("./Open.vue"),
    meta:{
      title:"卡通会员",
    },
  },
  {
    path: "/Personal",
    name: "Personal",
    component: () => import("./infoModule/Personal"),
    meta:{
      title:"我的账户",
    },
  },
  {
    path: "/Gender",
    name: "Gender",
    component: () => import("./infoModule/Gender"),
    meta:{
      title:"修改性别",
    },
  },
  {
    path: "/setting",
    name: "setting",
    component: () => import("./Setting"),
    meta:{
      title:"设置",
    },
  },
  {
    path: "/setpwd",
    name: "setpwd",
    component: () => import("./SetPwd.vue"),
    meta:{
      title:"设置密码",
    },
  },
  {
    path: "/Courses",
    name: "Courses",
    component: () => import("./orderForm/Courses"),
    meta:{
      title:"我的订单",
    },
  },
  {
    path: "/Appointment",
    name: "Appointment",
    component: () => import("./orderForm/Appointment"),
    meta:{
      title:"我的预约",
    },
  },
]
