import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [

  {
    path: '/',
    name: 'loginIn',
    component: () => import('../views/loginIn.vue'),
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/',
        name: 'home_index',
        component: () => import('../views/home_index.vue'),
        meta: ['首页',]
      },
      {
        path: '/home/addZH',
        name: 'addZH',
        component: () => import('../views/addZH.vue'),
        meta: ['账户管理', '添加账号']
      },
      {
        path: '/home/changePsd',
        name: 'changePsd',
        component: () => import('../views/changePsd.vue'),
        meta: ['账户管理', '改变密码']
      },
      {
        path: '/home/ZHList',
        name: 'ZHList',
        component: () => import('../views/ZHList.vue'),
        meta: ['账户管理', '账号列表']
      },
      {
        path: '/home/orderManage',
        name: 'orderManage',
        component: () => import('../views/orderManage.vue'),
        meta: ['订单管理']
      },
      {
        path: '/home/goodlist',
        name: 'goodlist',
        component: () => import('../views/goodlist.vue'),
        meta: ['商品管理', '商品列表']
      },
      {
        path: '/home/addgoods',
        name: 'addgoods',
        component: () => import('../views/addgoods.vue'),
        meta: ['商品管理', '添加商品']
      },
      {
        path: '/home/goodsStatistics',
        name: 'goodsStatistics',
        component: () => import('../views/goodsStatistics.vue'),
        meta: ['销售统计', '商品统计']
      },
      {
        path: '/home/DDTJ',
        name: 'DDTJ',
        component: () => import('../views/DDTJ.vue'),
        meta: ['销售统计', '订单统计']
      },
    ]
  }, {
    path: '*',
    redirect: '/home'
  },
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router