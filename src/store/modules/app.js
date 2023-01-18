import { login as loginApi } from '@/api/login'
import router from '@/router'

export default {
  namespaced: true,
  stats: () => ({
    token: localStorage.getItem('token') || ''
  }),
  mutations: {
    setToken(state, token) {
      state.token = token
      localStorage.setItem('token', token)
    }
  },
  actions: {
    login({ commit }, userInfo) {
      return new Promise((resolve, reject) => {
        loginApi(userInfo).then(res => {
          console.log(res, 66)
          commit('setToken', res.token)
          router.replace('/')
          resolve()
        }).catch(err => {
          reject(err)
        })
      })
    }
  }
}
