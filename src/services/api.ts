import axios from "axios";

const api = axios.create({
  baseURL: "https://beta.guardia-api.box3.work/api"
})

api.interceptors.request.use(config => {
  const token = localStorage.getItem('token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
    config.headers['Content-Type'] = 'application/json'
  }
  return config
})

export default api