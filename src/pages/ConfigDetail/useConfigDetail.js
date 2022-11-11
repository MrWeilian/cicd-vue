import {onMounted, reactive, ref} from 'vue';
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

  const ioInstance = ref()

  const stream = ref('')

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
    ioInstance.value = io( {
      path: '/jenkins/build',
      query: {
        id
      }
    })
    initLogStream()
  }

  const initLogStream = () => {
    ioInstance.value.on('build:data', function (data) {
      console.log('接数据', data);
      stream.value = data
    })
    ioInstance.value.on('build:error', function (err) {})
    ioInstance.value.on('build:end', function () {})
  }

  const handleBuild = () => {
    ioInstance.value.emit('build:start')

    initLogStream()
  }

  onMounted(async () => {
    await initDetail()

    initSocket()
  })

  return {
    detailData,
    stream,
    handleBuild
  }
}