export default [
    {
        path:'/preface',
        name:"preface",
        component:()=>import('./Preface.vue'),
        meta:{
            title:"考点专练"
        },
    },
    {
        path:'/file',
        name:"file",
        component:()=>import('./File.vue'),
        meta:{
            title:"套卷练习"
        },
    },
    {
        path:'/xam',
        name:'xam',
        component:()=>import('./Exam.vue'),
        meta:{
            title:"仿真考试"
        },
    },
    {
        path:'/mistakes',
        name:'mistakes',
        component:()=>import('./Mistakes.vue'),
        meta:{
            title:"错题练习"
        },
    },
    {
        path:'/appraisal',
        name:"appraisal",
        component:()=>import('./Appraisal.vue'),
        meta:{
            title:"测评记录"
        },
    },
    {
        path:'/enshrine',
        name:'enshrine',
        component:()=>import('./Enshrine.vue'),
        meta:{
            title:"习题收藏"
        },
    },
    {
        path:'/revamp',
        name:'revamp',
        component:()=>import('./Revamp.vue'),
        meta:{
            title:"错题"
        },
    }
]