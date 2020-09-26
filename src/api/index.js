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
  register: (data) => {
    return request.post(`${BASE_URL}/users`, data).accept('json')
  },
  login: (data) => {
    return request.post(`${BASE_URL}/auth/login`, data).accept('json')
  },
  postJob: (data) => {
    return request.post(`${BASE_URL}/jobs`, data).set({ token: TOKEN, Accept: 'application/json' })
  },
  postCategory: (data) => {
    return request.post(`${BASE_URL}/jobs/category`, data).set({ token: TOKEN, Accept: 'application/json' })
  }
}
