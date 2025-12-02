<template>
  <el-space>
    <el-button type="primary" :icon="Plus">新增</el-button>
    <el-button type="primary" plain :icon="Edit">编辑</el-button>
    <el-dropdown>
      <el-button type="primary" plain>
        更多
        <el-icon class="el-icon--right">
          <arrow-down/>
        </el-icon>
      </el-button>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>导入</el-dropdown-item>
          <el-dropdown-item>下载模板</el-dropdown-item>
          <el-dropdown-item>导出</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
    <el-checkbox>选择</el-checkbox>
  </el-space>
</template>

<script setup lang="ts">
import { ElButton, ElDropdown, ElDropdownMenu, ElSpace, ElDropdownItem, ElIcon, ElCheckbox } from 'element-plus';

import {
  ArrowDown, Edit, Plus,
} from '@element-plus/icons-vue';
</script>

<style scoped>

</style>