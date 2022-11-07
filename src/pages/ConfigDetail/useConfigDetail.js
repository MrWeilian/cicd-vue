import {onMounted, reactive} from 'vue';
import {getConfigDetail} from './api';
import { useRoute } from 'vue-router';

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
    console.log(route);
    const { id } = route.params
    try {
      const res = await getConfigDetail({ id })
      Object.keys(detailData).forEach(key => {
        detailData[key] = res[key]
      })
    } catch (e) {

    }
  }

  onMounted(() => {
    initDetail()
  })

  return {
    detailData
  }
}