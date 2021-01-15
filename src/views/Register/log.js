export default [{
  path: '/login',
  name: 'login',
  component: () => import('./login.vue'),
},
{
  path: '/register',
  name: 'register',
  component: () => import('./Register.vue'),
}, 
{
  path: '/Phone',
  name: 'Phone',
  component: () => import('./Phone')
},
{
  path: '/Retrieve',
  name: 'Retrieve',
  component: () => import('./Retrieve')
},
{
  path: '/Formation',
  name: 'Formation',
  component: () => import('./Formation')
},
]