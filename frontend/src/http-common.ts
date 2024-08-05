import axios from 'axios'
import { authService } from './services/firebase/auth/authService'

const api = axios.create({
  baseURL: import.meta.env.VITE_APP_API_BACKEND ?? 'http://localhost:3000/',
  headers: {
    'Content-Type': 'application/json',
  },
})

api.interceptors.request.use(async (config) => {
  const token = await authService.userIdToken()
  if (token) {
    config.headers.Authorization = `${token}`
  }
  return config
})

export default api
