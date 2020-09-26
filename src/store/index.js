import { createStore } from 'vuex'
import api from '../api'
import VueJwtDecode from 'vue-jwt-decode'

const JOBS = 'JOBS'
const CATEGORIES = 'CATEGORIES'
const MY_JOBS = 'MY_JOBS'
const POSTED_JOBS = 'POSTED_JOBS'

export default createStore({
  namesapced: true,
  state: {
    token: null,
    isAuthenticated: false,
    role: null,
    user_id: null,
    credentials: [{ username: '', password: '' }],
    registerActive: false
  },

  getters: {
    authenticated (state) {
      const token = localStorage.getItem('token')
      const expirationDate = new Date(localStorage.getItem('expirationDate'))
      if (token === undefined || !token) return false
      else if (expirationDate <= new Date()) return false
      else {
        try {
          const user = VueJwtDecode.decode(token)
          if (!user) return false
          else {
            state.token = token
            state.isAuthenticated = true
            state.role = user.role
            state.user_id = user.user_id
            return true
          }
        } catch {
          return false
        }
      }
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
    },
    POSTED_JOBS (state, jobs) {
      state.postedJobs = jobs.Jobs
    },
    MY_JOBS (state, jobs) {
      console.log(jobs.Jobs)
      state.myJobs = jobs.Jobs
      state.myJobsTotal = jobs.Total
    },
    CATEGORIES (state, categories) {
      state.categories = categories
    }
  },

  actions: {
    getJobs ({ commit }) {
      api.fetchJobs().then(response => {
        commit(JOBS, response.body)
      })
    },
    getPostedJobs ({ commit }) {
      api.fetchPostedJobs().then(response => {
        commit(POSTED_JOBS, response.body)
      })
    },
    getMyJobs ({ commit }) {
      api.fetchMyJobs().then(response => {
        commit(MY_JOBS, response.body)
      })
    },
    getCategories ({ commit }) {
      api.fetchCategories().then(response => {
        commit(CATEGORIES, response.body)
      })
    },

    async register (_, data) {
      await api.register(data).then(response => {
        localStorage.setItem('username', response.body.username)
        localStorage.setItem('first_name', response.body.first_name)
        localStorage.setItem('last_name', response.body.last_name)
        localStorage.setItem('role', response.body.role)
        window.location.replace('/login')
      }).catch(error => {
        console.log(error.response.text, error.response.status)
      })
    },

    async postCategory (_, data) {
      data.user_id = this.state.user_id
      await api.postCategory(data).then(response => {
        alert('CATEGORY CREATED')
        window.location.replace('/job/create')
      }).catch(error => {
        alert('UNABLE TO CREATE, TRY AGAIN')
        console.log(error.response.text, error.response.status)
      })
    },

    async postJob (_, data) {
      data.user_id = this.state.user_id
      await api.postJob(data).then(response => {
        alert('JOB POSTED')
        window.location.replace('/jobs')
      }).catch(error => {
        alert('UNABLE TO POST JOB, TRY AGAIN')
        console.log(error.response.text, error.response.status)
      })
    },

    async applyJob (_, jobID) {
      await api.applyJob(jobID).then(response => {
        alert('APPLIED!')
      }).catch(error => {
        if (error.response.status === 406) alert('ALREADY APPLIED')
        else alert('UNABLE TO  APPLY, TRY AGAIN')
        console.log(error.response.text, error.response.status)
      })
    },

    async removeJob (_, jobID) {
      await api.removeJob(jobID).then(response => {
        alert('REMOVED!')
        window.location.replace('/job/posted')
      }).catch(error => {
        alert('UNABLE TO  REMOVE, TRY AGAIN')
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
