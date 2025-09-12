import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL 
})

// Toda vez que uma requisição é feita os interceptors verificam
// se há algum token salvo no localStorage e usa-o na requisição
api.interceptors.request.use(config => {
  const token = localStorage.getItem('token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
    config.headers['Content-Type'] = 'application/json'
  }
  return config
})

export default api