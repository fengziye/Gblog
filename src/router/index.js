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
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/anima',
    name: 'Anima',
    component: () => import( '../views/anima.vue')
  },
  {
    path: '/fishy',
    name: 'Fishy',
    component: () => import( '../views/fishy.vue')
  },
  {
    path: '/peep',
    name: 'Peep',
    component: () => import( '../views/people.vue')
  },
  {
    path: '/matrix',
    name: 'Matrix',
    component: () => import( '../views/matrix.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
