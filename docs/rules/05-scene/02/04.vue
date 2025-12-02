<template>
  <el-button type="danger" :icon="Warning">主危险功能</el-button>
  <el-button type="danger" plain :icon="Warning">次危险功能</el-button>
</template>
<script setup lang="ts">
import { ElButton } from 'element-plus';
import {
  Warning,
} from '@element-plus/icons-vue';
</script>

<style scoped>

</style>