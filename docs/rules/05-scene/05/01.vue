<template>
  <el-button type="primary" link size="small" plain :icon="Upload"> 上传附件</el-button>
  <el-button type="primary" link size="small" plain :icon="Download"> 下载</el-button>
  <el-button type="danger" link size="small" plain :icon="Delete">删除</el-button>
</template>

<script setup lang="ts">
import { ElButton } from 'element-plus';
import { Delete, Download, Upload } from '@element-plus/icons-vue';
</script>


<style scoped>

</style>