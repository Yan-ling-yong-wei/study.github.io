export default [{
    path: '/search',
    name: 'search',
    component: () => import('./Search.vue'),
    meta: {
      title: "搜索课程",
    },
  },
  {
    path: '/courDetail',
    name: "courDetail",
    component: () => import('./CourDetail.vue'),
    meta: {
      title: "课程详情",
    },
  },
  {
    path: '/qrCode',
    name: 'qrCode',
    component: () => import('./QRCode.vue'),
    meta: {
      title: "分享二维码",
    },
  },
  {
    path:'/danPresent',
    name:'danPresent',
    component:()=>import('./DanPresent.vue'),
    meta:{
      title:"确认订单",
    }
  }
]