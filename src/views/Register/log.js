export default [{
  path: '/login',
  name: 'login',
  component: () => import('./login.vue'),
  meta:{
    title:"登录",
  },
},
{
  path: '/register',
  name: 'register',
  component: () => import('./Register.vue'),
  meta:{
    title:"验证码登录",
  },
}, 
{
  path: '/Phone',
  name: 'Phone',
  component: () => import('./Phone'),
  meta:{
    title:"绑定手机号",
  },
},
{
  path: '/Retrieve',
  name: 'Retrieve',
  component: () => import('./Retrieve'),
  meta:{
    title:"找回密码",
  },
},
{
  path: '/Formation',
  name: 'Formation',
  component: () => import('./Formation'),
  meta:{
    title:"信息填写",
  },
},
]