<template>
  <el-button type="warning" :icon="Edit" >主警告功能</el-button>
  <el-button type="warning" plain :icon="Edit" >次警告功能</el-button>
</template>
<script setup lang="ts">
import { ElButton } from 'element-plus';
import {
  Edit,
} from '@element-plus/icons-vue';
</script>

<style scoped>

</style>