import { axios } from '../../services'

export async function getConfig (params) {
  return axios.get('/job', { params })
}

export async function postSave (data) {
  return axios.post('/job/save', data)
}

export async function postUpdate (data) {
  return axios.post('/job/update', data)
}

export async function postDelete (data) {
  return axios.post('/job/delete', data)
}