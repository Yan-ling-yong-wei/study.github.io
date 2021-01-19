export default [
    {
        path:'/search',
        name:'search',
        component:()=>import('./Search.vue')
    },
    {
        path:'/courDetail',
        name:"courDetail",
        component:()=>import('./CourDetail.vue')
    }
  ]
  