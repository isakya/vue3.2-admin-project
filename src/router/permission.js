import router from './index'
import store from '@/store'

const whiteList = ['/login']
router.beforeEach((to, from, next) => {
  console.log(store.getters, 66)
  if (store.getters.token) {
    if (to.path === '/login') {
      next('/')
    } else {
      next()
    }
  } else {
    if (whiteList.includes(to.path)) {
      next()
    } else {
      next('/login')
    }
  }
})
