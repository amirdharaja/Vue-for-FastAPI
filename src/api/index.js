import request from 'superagent'

const BASE_URL = 'http://localhost:8000'

export default {
  fetchJobs: () => {
    return request.get(`${BASE_URL}/jobs`).accept('json')
  },
  register: (newUserData) => {
    return request.post(`${BASE_URL}/users`, newUserData).accept('json')
  },
  login: (credentials) => {
    return request.post(`${BASE_URL}/auth/login`, credentials).accept('json')
  }
}
