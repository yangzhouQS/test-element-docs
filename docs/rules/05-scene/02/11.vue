<template>
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
</template>

<script setup lang="ts">
import { ElButton, ElDropdown, ElDropdownMenu, ElDropdownItem, ElIcon } from 'element-plus';
import {
  ArrowDown,
} from '@element-plus/icons-vue';
</script>

<style scoped>

</style>