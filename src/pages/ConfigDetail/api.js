import { axios } from '../../services'

export async function getConfigDetail (params) {
  return axios.get('/jobDetail', { params })
}

export async function getHistory (params) {
  return axios.get('/historyList', { params })
}