import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name:'设置',
    component: ()=>import('@/views/layout/index.vue'),
    redirect:'/home',
    children:[
      {
        path:'home',
        name:"主页",
        component:()=>import('@/views/Home/home')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
