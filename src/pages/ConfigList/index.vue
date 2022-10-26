<template>
  <el-card class="w-screen">
    <template #header>
      <span class="font-bold">项目配置</span>
    </template>

    <el-form inline>
      <el-form-item label="项目名称">
        <el-input v-model="searchParams.projectName" placeholder="输入项目名搜索"></el-input>
      </el-form-item>
    </el-form>

    <el-table>
      <el-table-column label="项目名称" prop="projectName" />
      <el-table-column label="仓库地址" prop="gitUrl" />
      <el-table-column label="构建分支" prop="gitBranch" />
      <el-table-column label="shell 命令" prop="buildCommand" />
      <el-table-column label="上传路径" prop="uploadPath" />
    </el-table>

    <el-pagination
        class="mt-[16px]"
        v-model:currentPage="searchParams.pageNo"
        v-model:page-size="searchParams.pageSize"
        :page-sizes="[10, 20, 30]"
        layout="sizes, prev, pager, next"
        :total="searchParams.total"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
    />
  </el-card>
</template>

<script setup>
import useConfigList from './useConfigList';

const {
  searchParams,
  handleSizeChange,
  handleCurrentChange
} = useConfigList()
</script>

<script>
import {defineComponent} from 'vue';
export default defineComponent({
  name: "ConfigList"
})
</script>

<style scoped>

</style>