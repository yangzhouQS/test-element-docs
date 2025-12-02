<template>
  <el-button type="primary" :icon="Plus" size="large">Large 大按钮</el-button>
  <el-button type="primary" :icon="Plus">Default 标准按钮</el-button>
  <el-button type="primary" :icon="Plus" size="small">Small 小按钮</el-button>
</template>

<script setup lang="ts">
import { ElButton,  } from 'element-plus';
import {
  Plus,
} from '@element-plus/icons-vue';
</script>

<style scoped>

</style>