import { axios } from '../../services'

export async function getConfigDetail (params) {
  return axios.get('/jobDetail', { params })
}