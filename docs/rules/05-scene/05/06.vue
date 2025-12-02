<template>
  <el-tooltip
      class="box-item"
      effect="dark"
      content="查看明细"
      placement="top">
    <el-button type="info" circle size="small" :icon="ZoomIn" plain></el-button>
  </el-tooltip>
</template>

<script setup lang="ts">
import { ZoomIn } from '@element-plus/icons-vue';
import { ElButton, ElTooltip } from 'element-plus';
</script>


<style scoped>

</style>