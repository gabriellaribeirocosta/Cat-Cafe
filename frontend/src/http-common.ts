import axios from 'axios'

export default axios.create({
  baseURL: import.meta.env.VITE_APP_API_BACKEND ?? 'http://localhost:3000/',
  headers: {
    'Content-Type': 'application/json',
  },
})
