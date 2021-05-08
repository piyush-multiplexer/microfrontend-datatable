import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    {path: '/', name: 'App', component: () => import(/* webpackChunkName: "App" */ '../App.vue')},
]

const router = createRouter({
    base: '/datatable/',
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
