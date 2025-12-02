<template>
  <el-button type="primary" :icon="Plus">新增</el-button>
  <el-tooltip
      effect="dark"
      content="查看信息"
      placement="top"
  >
    <el-button type="info" circle size="small" :icon="ZoomIn" plain></el-button>
  </el-tooltip>
  <el-button
      link
      type="danger"
      :icon="Delete"
      size="small"
  >
    删除
  </el-button>

</template>

<script setup lang="ts">
import { ElButton, ElTooltip } from 'element-plus';
import {
  Plus,
  ZoomIn,
  Delete,
} from '@element-plus/icons-vue';
</script>

<style scoped>

</style>