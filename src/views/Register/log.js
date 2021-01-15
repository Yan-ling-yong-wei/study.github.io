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
]