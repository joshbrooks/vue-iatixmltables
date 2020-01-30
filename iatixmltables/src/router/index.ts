import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

// see https://stackoverflow.com/questions/54476294/using-async-components-with-loading-and-error-components-in-vue-router
function lazyLoadView(AsyncView: any) {
  const AsyncHandler = () => ({
    component: AsyncView,
    // A component to use while the component is loading.
    loading: require('../components/LoadingState.vue').default,
    // A fallback component in case the timeout is exceeded
    // when loading the component.
    error: require('../components/FailedState.vue').default,
    // Delay before showing the loading component.
    // Default: 200 (milliseconds).
    delay: 0,
    // Time before giving up trying to load the component.
    // Default: Infinity (milliseconds).
    timeout: 10000
  })

  return Promise.resolve({
    functional: true,
    render(h: any, { data = {}, children = {} }) {
      // Transparently pass any props or children
      // to the view component.
      return h(AsyncHandler, data, children)
    }
  })
}

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
      lazyLoadView(
        import(/* webpackChunkName: "about" */ '../components/TestMap.vue')
      )
  },
  {
    path: '/activities',
    name: 'activities',
    component: () =>
      lazyLoadView(
        import(
          /* webpackChunkName: "activitytable" */ '../components/ActivityTable.vue'
        )
      )
  },
  {
    path: '/transactions',
    name: 'transactions',
    component: () =>
      lazyLoadView(
        import(
          /* webpackChunkName: "activitytable" */ '../components/TransactionTable.vue'
        )
      )
  }
]

const router = new VueRouter({
  routes
})

export default router
