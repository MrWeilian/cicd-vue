import Axios from 'axios'

export const axios = Axios.create({
  baseURL: import.meta.env.VITE_BASE_URL
})

axios.interceptors.response.use(function (response) {
  const data = response.data
  if (data.code === 0) {
    return data.data
  }
  data.message = data.message || data.msg
  return Promise.reject(data)
})