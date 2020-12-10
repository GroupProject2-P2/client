import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import GamePlay from '../views/GamePlay.vue'
import WaitingRoom from '../views/WaitingRoom.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/gameplay',
    name: 'GamePlay',
    component: GamePlay
  },
  {
    path: '/waitingroom',
    name: 'WaitingRoom',
    component: WaitingRoom
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
