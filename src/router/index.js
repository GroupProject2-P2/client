import Vue from 'vue'
import VueRouter from 'vue-router'
import RoomDasboard from '../views/RoomDasboard'
import Login from '../views/Login'
import GamePlay from '../views/GamePlay'
Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/play',
    name: 'gamePlay',
    component: GamePlay
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/dasboard',
    name: 'roomDasboard',
    component: RoomDasboard
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
