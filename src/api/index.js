import request from 'superagent'

const BASE_URL = 'http://localhost:8000'
const TOKEN = localStorage.getItem('token')

export default {
  fetchJobs: () => {
    return request.get(`${BASE_URL}/jobs`).accept('json')
  },
  fetchCategories: () => {
    return request.get(`${BASE_URL}/jobs/category`).accept('json')
  },
  register: (newUserData) => {
    return request.post(`${BASE_URL}/users`, newUserData).accept('json')
  },
  login: (credentials) => {
    return request.post(`${BASE_URL}/auth/login`, credentials).accept('json')
  },
  postJob: (newJobData) => {
    return request.post(`${BASE_URL}/jobs`, newJobData).set({ token: TOKEN, Accept: 'application/json' })
  }
}
