import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Order from '../pages/order.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/order', component: Order },
]

export default createRouter({
    history: createWebHistory(),
    routes,
})