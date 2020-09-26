import request from 'superagent'

const BASE_URL = 'http://localhost:8000'
const TOKEN = localStorage.getItem('token')

export default {
  fetchJobs: () => {
    return request.get(`${BASE_URL}/jobs`).accept('json')
  },
  fetchPostedJobs: () => {
    return request.get(`${BASE_URL}/jobs/my/posted`).set({ token: TOKEN, Accept: 'application/json' })
  },
  removeJob: (jobID) => {
    return request.delete(`${BASE_URL}/jobs/${jobID}`).set({ token: TOKEN, Accept: 'application/json' })
  },
  fetchMyJobs: () => {
    return request.get(`${BASE_URL}/users/jobs/my`).set({ token: TOKEN, Accept: 'application/json' })
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
  },
  applyJob: (jobID) => {
    const data = {}
    return request.post(`${BASE_URL}/users/jobs/${jobID}`, data).set({ token: TOKEN, Accept: 'application/json' })
  }
}
