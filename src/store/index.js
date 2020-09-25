import { createStore } from 'vuex'
import api from '../api'

const JOBS = 'JOBS'
// const MY_JOBS = 'MY_JOBS'
// const FAVOURITE_JOBS = 'FAVOURITE_JOBS'
// const MY_ACCOUNT = 'MY_ACCOUNT'

export default createStore({
  namesapced: true,
  state: {
    token: null,
    isAuthenticated: false,
    jobs: [],
    credentials: [{ username: '', password: '' }],
    registerActive: false
  },

  getters: {
    authenticated () {
      const token = localStorage.getItem('token')
      const expirationDate = new Date(localStorage.getItem('expirationDate'))
      if (token === undefined || !token) return false
      else if (expirationDate <= new Date()) return false
      else return true
    }
  },

  mutations: {
    SET_AUTH (state, token) {
      state.token = token
      state.isAuthenticated = true
    },
    REMOVE_AUTH (state) {
      state.token = null
      state.isAuthenticated = null
      state.credentials = []
    },
    JOBS (state, jobs) {
      state.jobs = jobs
    }
  },

  actions: {
    getJobs ({ commit }) {
      api.fetchJobs().then(response => {
        commit(JOBS, response.body)
      })
    },

    async register (_, newUserData) {
      await api.register(newUserData).then(response => {
        localStorage.setItem('username', response.body.username)
        localStorage.setItem('first_name', response.body.first_name)
        localStorage.setItem('last_name', response.body.last_name)
        localStorage.setItem('role', response.body.role)
        window.location.replace('/login')
      }).catch(error => {
        console.log(error.response.text, error.response.status)
      })
    },

    async login ({ dispatch }, credentials) {
      await api.login(credentials).then(response => {
        const token = response.body.token
        const expirationDate = new Date(new Date().getTime() + 1296000000)
        localStorage.setItem('token', token)
        localStorage.setItem('expirationDate', expirationDate)
        localStorage.setItem('isAuthenticated', true)
        alert('Login Success!. Welcome ' + response.body.name)
        dispatch('handleLogin', token)
        window.location.replace('/')
      }).catch(error => {
        console.log(error.response.text, error.response.status)
        if (error.response.status === 404) alert('User not found')
        else if (error.response.status === 400) alert('Wrong Password')
        else if (error.response.status === 422) alert('Invalid Username or Password')
        else alert('Unable to login, Try Again')
      })
    },

    async logout ({ dispatch }) {
      localStorage.removeItem('token')
      localStorage.removeItem('expirationDate')
      localStorage.removeItem('isAuthenticated')
      window.location.replace('/')
      dispatch('handleLogout')
    },

    async handleLogin ({ commit }, token) {
      commit('SET_AUTH', token)
    },

    async handleLogout ({ commit }) {
      commit('REMOVE_AUTH')
    },

    registerActive ({ commit }) {
      commit('registerActive')
    }
  },

  modules: {
  }
})
