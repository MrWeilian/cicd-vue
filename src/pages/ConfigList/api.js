import { axios } from '../../services'

export async function getConfig (params) {
  return axios.get('/job', { params })
}