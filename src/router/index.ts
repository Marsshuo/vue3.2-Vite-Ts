
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Management',
        component: () => import(/* webpackChunkName: "about" */ '../views/Management.vue')
    },
]
// const routerHistory = createWebHistory();
// const router = createRouter({
//     history: routerHistory,
//     routes: [
//         {
//             path: '/',
//             name: 'Management',
//             component: () => import(/* webpackChunkName: "about" */ '../views/Management.vue')
//         }
//     ]
// });
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router