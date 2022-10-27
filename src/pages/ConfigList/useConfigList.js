import {onMounted, reactive, ref} from 'vue';
import {getConfig} from './api';

export default function useConfigList () {
  const searchParams = reactive({
    projectName: '',
    pageNo: 1,
    pageSize: 20,
    total: 0
  })

  const tableData = ref([])

  const initData = async () => {
    const res = await getConfig(searchParams)
    tableData.value = res.list
    searchParams.total = res.total
  }

  const handleSizeChange = () => {}

  const handleCurrentChange = () => {}

  const onSearch = () => {
    initData()
  }

  onMounted(() => {
    initData()
  })

  return {
    searchParams,
    tableData,
    handleSizeChange,
    handleCurrentChange,
    onSearch
  }
}