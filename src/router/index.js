import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/staking',
    name: 'Staking',
    component: () => import(/* webpackChunkName: "Staking" */ '../views/Staking.vue')
  },
  {
    path: '/voting',
    name: 'Voting',
    component: () => import(/* webpackChunkName: "Voting" */ '../views/Voting.vue')
  },
  {
    path: '/vision-mission',
    name: 'VisionMission',
    component: () => import(/* webpackChunkName: "VisionMission" */ '../views/VisionMission.vue')
  },
  {
    path: '/value-vaults',
    name: 'ValueVaults',
    component: () => import(/* webpackChunkName: "ValueVaults" */ '../views/ValueVaults.vue')
  },
  {
    path: '/value',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
