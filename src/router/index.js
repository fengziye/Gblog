import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('../views/Home.vue')
    },
    {
        path: '/category/:cate',
        name: 'category',
        component: () => import('../views/Home.vue')
    },
    {
        path: '/search/:words',
        name: 'search',
        component: () => import('../views/Home.vue')
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('../views/About.vue')
    },
    {
        path: '/friend',
        name: 'friend',
        component: () => import('../views/Friend.vue')
    },
    {
        path: '/anima',
        name: 'anima',
        component: () => import('../views/anima.vue')
    },
    {
        path: '/fishy',
        name: 'fishy',
        component: () => import('../views/fishy.vue')
    },
    {
        path: '/peep',
        name: 'Peep',
        component: () => import('../views/people.vue')
    },
    {
        path: '/matrix',
        name: 'matrix',
        component: () => import('../views/matrix.vue')
    },
    {
        path: '/article/:id',
        name: 'article',
        component: () => import('../views/Articles.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})
router.beforeEach((to, from, next) => {
    store.dispatch('setLoading', true);
    next();
})
router.afterEach((to, from) => {
    // 最多延迟 3s 关闭 loading
    // setTimeout(() => {
        store.dispatch('setLoading', false);
    // }, 3000)
})
export default router
