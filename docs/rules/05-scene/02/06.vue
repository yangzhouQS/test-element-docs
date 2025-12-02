<template>
  <el-button type="success" :icon="Paperclip">主辅助功能</el-button>
  <el-button type="success" plain :icon="Paperclip">次辅助功能</el-button>
</template>
<script setup lang="ts">
import { ElButton } from 'element-plus';
import {
  Paperclip,
} from '@element-plus/icons-vue';
</script>

<style scoped>

</style>