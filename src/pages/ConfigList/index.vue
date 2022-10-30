<template>
  <el-card class="w-screen">
    <template #header>
      <span class="font-bold">项目配置</span>
    </template>

    <el-form inline class="flex">
      <el-form-item label="项目名称">
        <el-input v-model="searchParams.projectName" placeholder="输入项目名搜索"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSearch">搜索</el-button>
      </el-form-item>
      <el-button type="primary" class="ml-[auto]" @click="onAdd">新增配置</el-button>
    </el-form>

    <el-table :data="tableData">
      <el-table-column label="项目名称" prop="projectName" />
      <el-table-column label="仓库地址" prop="gitUrl" />
      <el-table-column label="构建分支" prop="gitBranch" />
      <el-table-column label="shell 命令" prop="buildCommand" />
      <el-table-column label="上传路径" prop="uploadPath" />
      <el-table-column label="操作">
        <template #default="scope">
          <el-button type="primary" link @click="onEdit(scope.row)">编辑</el-button>
          <el-popconfirm title="确认删除该配置?" @confirm="onDel(scope.row)">
            <template #reference>
              <el-button type="danger" link>删除</el-button>
            </template>
          </el-popconfirm>
        </template>
      </el-table-column>
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

  <el-dialog
      v-model="dialogVisible"
      :title="dialogTitle"
      width="50%"
      align-center
  >
    <el-form :model="formData">
      <el-form-item label="项目名称" prop="projectName">
        <el-input v-model="formData.projectName" placeholder="输入项目名称" />
      </el-form-item>
      <el-form-item label="仓库地址" prop="gitUrl">
        <el-input v-model="formData.gitUrl" placeholder="输入仓库地址" />
      </el-form-item>
      <el-form-item label="构建分支" prop="gitBranch">
        <el-input v-model="formData.gitBranch" placeholder="输入构建分支" />
      </el-form-item>
      <el-form-item label="shell 命令" prop="buildCommand">
        <el-input v-model="formData.buildCommand" placeholder="输入shell 命令" />
      </el-form-item>
      <el-form-item label="上传路径" prop="uploadPath">
        <el-input v-model="formData.uploadPath" placeholder="输入上传路径" />
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="onSubmit">确认</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup>
import useConfigList from './useConfigList';

const {
  searchParams,
  tableData,
  formData,
  dialogVisible,
  dialogTitle,
  handleSizeChange,
  handleCurrentChange,
  onSearch,
  onAdd,
  onSubmit,
  onEdit,
  onDel
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