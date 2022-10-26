import {onMounted, reactive} from 'vue';
import {getConfig} from './api';

export default function useConfigList () {
  const searchParams = reactive({
    projectName: '',
    pageNo: 1,
    pageSize: 20,
    total: 0
  })

  const initData = async () => {
    const res = await getConfig(searchParams)
  }

  const handleSizeChange = () => {}

  const handleCurrentChange = () => {}

  onMounted(() => {
    initData()
  })

  return {
    searchParams,
    handleSizeChange,
    handleCurrentChange
  }
}