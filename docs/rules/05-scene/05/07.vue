<template>
  <el-button type="danger" link size="small" plain :icon="Delete">删除 </el-button>
  <el-button type="danger" link size="small" plain :icon="Warning">冲红</el-button>
</template>

<script setup lang="ts">
import { Delete, Warning } from '@element-plus/icons-vue';
import { ElButton } from 'element-plus';
</script>


<style scoped>

</style>