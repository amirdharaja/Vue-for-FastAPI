import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Favourite from '../views/Favourite.vue'
import Job from '../views/Job.vue'
import MyJob from '../views/MyJob.vue'
import Login from '../views/Login.vue'
import Signup from '../views/Signup.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/jobs',
    name: 'Job',
    component: Job
  },
  {
    path: '/favourites',
    name: 'Favourite',
    component: Favourite
  },
  {
    path: '/my/jobs',
    name: 'MyJob',
    component: MyJob
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
