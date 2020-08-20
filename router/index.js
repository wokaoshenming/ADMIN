import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/home',
    name:'系统设置',
    component: ()=>import('@/views/layout/index.vue'),
    redirect:'/home/index',
    children:[
      {
        path:'index',
        name:"主页",
        component:()=>import('@/views/Home/home'),
        meta: { title: "通用设置", icon: "table" }
      }
    ]
  },
  {
    path:'/user',
    name:"用户中心",
    component:()=>import('@/views/layout/index.vue'),
    redirect:'/user/index',
    children:[
      {
        path:'index',
        name:'用户列表',
        component:()=>import("@/views/user/userList/index"),
        meta: { title: "用户列表", icon: "table" }
      },
      {
        path:'userPermission',
        name:"用户权限",
        component:()=>import("@/views/user/userPermission/index"),
        meta: { title: "用户权限", icon: "table" }
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
