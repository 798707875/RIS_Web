import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/login',
        name: 'LoginView',
        component: () => import('../views/login/index.vue')
    },
    {
        path: '/',
        name: 'LayoutView',
        component: () => import('../layouts/index.vue'),
        children: [
            {
                path: '/imaging-review',
                name: 'imaging-review',
                component: () => import('../views/imaging-review/index.vue')
            },
            {
                path: '/information-registration',
                name: 'information-registration',
                component: () => import('../views/information-registration/index.vue')
            },
        ]
    },

]

const router = createRouter({
    history: createWebHistory(),
    routes
    })

export default router