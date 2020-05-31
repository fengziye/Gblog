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
    // 最多延迟 关闭 loading
    setTimeout(() => {
        store.dispatch('setLoading', false);
    }, 1500)
})
export default router
