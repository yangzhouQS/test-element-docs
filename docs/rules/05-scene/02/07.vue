<template>
  <el-button link type="primary" :icon="Edit">编辑</el-button>
  <el-button link type="danger" :icon="Delete">删除</el-button>
</template>

<script setup lang="ts">
import { ElButton } from 'element-plus';
import {
  Edit,
  Delete,
} from '@element-plus/icons-vue';
</script>

<style scoped>

</style>