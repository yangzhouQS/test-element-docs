<template>
  <el-button type="primary" :icon="Plus">主功能</el-button>
  <el-button type="primary" plain :icon="Edit">次功能</el-button>
  <el-button type="warning" :icon="Edit">主功能</el-button>
  <el-button type="warning" plain :icon="Edit">次功能</el-button>
</template>
<script setup lang="ts">
import { ElButton } from 'element-plus';
import {
  Plus,
  Edit,
} from '@element-plus/icons-vue';
</script>

<style scoped>

</style>