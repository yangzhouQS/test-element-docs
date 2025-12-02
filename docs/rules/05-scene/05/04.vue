<template>
  <el-button type="primary" link size="small" plain :icon="Upload"> 上传附件 </el-button>
  <el-button type="primary" link size="small" plain :icon="Download"> 下载 </el-button>
</template>

<script setup lang="ts">
import { Download, Upload } from '@element-plus/icons-vue';
import { ElButton } from 'element-plus';
</script>


<style scoped>

</style>