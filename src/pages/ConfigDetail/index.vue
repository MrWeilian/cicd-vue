<template>
  <el-card class="w-screen">
    <template #header>
      <span class="font-bold">{{ detailData.projectName }} 的配置详情</span>
    </template>

    <el-form class="flex flex-wrap justify-between" :model="detailData">
      <el-form-item class="basis-[48%]" label="项目名称" prop="projectName">
        <el-input v-model="detailData.projectName" placeholder="输入项目名称" />
      </el-form-item>
      <el-form-item class="basis-[48%]" label="仓库地址" prop="gitUrl">
        <el-input v-model="detailData.gitUrl" placeholder="输入仓库地址" />
      </el-form-item>
      <el-form-item class="basis-[48%]" label="构建分支" prop="gitBranch">
        <el-input v-model="detailData.gitBranch" placeholder="输入构建分支" />
      </el-form-item>
      <el-form-item class="basis-[48%]" label="shell 命令" prop="buildCommand">
        <el-input v-model="detailData.buildCommand" placeholder="输入shell 命令" />
      </el-form-item>
      <el-form-item class="basis-[48%]" label="上传路径" prop="uploadPath">
        <el-input v-model="detailData.uploadPath" placeholder="输入上传路径" />
      </el-form-item>
    </el-form>
    <el-divider>操作区域</el-divider>
    <section >
      <el-button type="primary" @click="handleBuild">{{ isRollBack ? '开始回滚' : '开始构建'}}</el-button>
      <el-button type="primary">构建历史</el-button>
      <el-button type="warning" @click="handleRollBack">{{ isRollBack ? '取消回滚' : '版本回滚' }}</el-button>
      <el-select class="ml-[8px]" placeholder="选择回滚版本" v-model="rollBackHash" v-if="isRollBack">
        <el-option v-for="item in historyList" :label="item.label" :value="item.value" />
      </el-select>
    </section>
    <el-divider>构建日志</el-divider>
    <el-card class="box-card min-h-[320px]">
      <pre>{{ stream }}</pre>
    </el-card>
  </el-card>
</template>

<script setup>
import {useConfigDetail} from './useConfigDetail';

const {
  detailData,
  stream,
  isRollBack,
  historyList,
  rollBackHash,
  handleBuild,
  handleRollBack
} = useConfigDetail()
</script>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: "ConfigDetail"
})
</script>

<style scoped>

</style>