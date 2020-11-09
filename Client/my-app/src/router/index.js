import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import Login from '../components/Login.vue'
import About from '../components/About.vue'
import Tracker from'../components/Tracker.vue'
import Exercise from'../components/Exercise.vue'
import Nutrition from'../components/Nutrition.vue'
import { authGuard } from "../auth/authGuard";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    beforeEnter: authGuard
  },
  {
    path: '/tracker',
    name: 'Tracker',
    component: Tracker,
    beforeEnter: authGuard
  },
  {
    path: '/exercise',
    name: 'Exercise',
    component: Exercise,
    beforeEnter: authGuard
  },
  {
    path: '/nutrition',
    name: 'Nutrition',
    component: Nutrition,
    beforeEnter: authGuard
  },
  {
    path: '/event/:id',
    name: 'eventSingle',
    component: () => import('../components/Home.vue'),
    beforeEnter: authGuard
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
