<template>
  <el-button type="primary" :icon="Plus">主操作功能</el-button>
  <el-button type="primary" plain :icon="Edit">次操作功能</el-button>
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