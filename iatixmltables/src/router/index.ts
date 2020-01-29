import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    // route level code-splitting
    // this generates a separate chunk (testmap.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../components/TestMap.vue')
  },
  {
    path: '/activities',
    name: 'activities',
    component: () =>
      import(
        /* webpackChunkName: "activitytable" */ '../components/ActivityTable.vue'
      )
  }
]

const router = new VueRouter({
  routes
})

export default router
