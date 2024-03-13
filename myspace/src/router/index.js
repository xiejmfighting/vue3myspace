import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import NotFound from '../views/NotFound.vue'
import Register from '../views/Register.vue'
import UserList from '../views/UserList.vue'
import UserProfile from '../views/UserProfile.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },

  {
    path: '/404',
    name: '404',
    component: NotFound
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/userlist',
    name: 'userlist',
    component: UserList
  },
  {
    path: '/userprofile',
    name: 'userprofile',
    component: UserProfile
  },




]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
