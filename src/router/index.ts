
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: () => import(/* webpackChunkName: "about" */ '../views/home.vue')
    },
    {
        path: '/management',
        name: 'Management',
        component: () => import(/* webpackChunkName: "about" */ '../views/management.vue')
    }
]
// const routerHistory = createWebHistory();
// const router = createRouter({
//     history: routerHistory,
//     routes: [
//         {
//             path: '/',
//             name: 'Management',
//             component: () => import(/* webpackChunkName: "about" */ '../views/management.vue')
//         }
//     ]
// });
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router