import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      console.log(savedPosition)
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})
export default router
