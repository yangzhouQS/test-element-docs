<template>
  <el-button type="info" :icon="Search">主普通功能</el-button>
  <el-button type="info" plain :icon="Search">次普通功能</el-button>
</template>
<script setup lang="ts">
import { ElButton } from 'element-plus';
import {
  Search,
} from '@element-plus/icons-vue';
</script>

<style scoped>

</style>