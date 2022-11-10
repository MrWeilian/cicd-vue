import {onMounted, reactive} from 'vue';
import {getConfigDetail} from './api';
import { useRoute } from 'vue-router';
import { io } from 'socket.io-client'

export function useConfigDetail () {
  const route = useRoute()

  const detailData = reactive({
    id: '',
    projectName: '',
    gitUrl: '',
    gitBranch: '',
    buildCommand: '',
    uploadPath: ''
  })

  const initDetail = async () => {
    const { id } = route.params
    try {
      const res = await getConfigDetail({ id })
      Object.keys(detailData).forEach(key => {
        detailData[key] = res[key]
      })
    } catch (e) {

    }
  }

  const initSocket = () => {
    const { id } = route.params
    const ioInstance = io( {
      path: '/jenkins/build',
      query: {
        id
      }
    })

    ioInstance.on('', function () {})
  }

  onMounted(async () => {
    await initDetail()

    initSocket()
  })

  return {
    detailData
  }
}