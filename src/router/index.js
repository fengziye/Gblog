import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from '@/store'

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
    },
    {
        path: '/article/:id',
        name: 'Article',
        component: () => import( '../views/Article.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})
router.beforeEach((to, from, next) => {
    store.commit('SET_LOADING', true);
    next();
})
router.afterEach((to, from) => {
    // 最多延迟 3s 关闭 loading
    setTimeout(() => {
        store.commit('SET_LOADING', false);
    }, 3000)
})
export default router
