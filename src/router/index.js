import Vue from 'vue'
import VueRouter from 'vue-router'
import BasicLayout from '@/layouts/BasicLayout'
import Home from '@/views/Home';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: BasicLayout,
    children: [
      {
        path:'/',
        name:'home',
        component:Home
      },
      {
        path:'/article/:id',
        name:'articleDetail',
        component:()=> import('../views/ArticleDetail.vue')
      },
      {
        path:'/archives',
        name:'archives',
        component:()=> import('../views/Archives.vue')
      },
      {
        path:'/categories',
        name:'categories',
        component:()=> import('../views/Categories.vue')
      },
      {
        path:'/about',
        name:'about',
        component:()=> import('../views/About.vue')
      },
    ]
  },
  {
    path:'*',
    redirect:"/"
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
