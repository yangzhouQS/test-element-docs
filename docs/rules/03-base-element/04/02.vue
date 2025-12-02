<template>
  <el-icon :size="20" color="red">
    <Delete/>
  </el-icon>
  <el-icon :size="20" class="is-loading">
    <Loading/>
  </el-icon>
  <el-icon :size="20" class="el-icon--left">
    <Message/>
  </el-icon>
  <el-icon :size="20" class="el-icon--right">
    <Search/>
  </el-icon>
</template>
<script lang="ts" setup>
import { ElIcon } from 'element-plus';
import {
  Delete,
  Loading,
  Message,
  Search,
} from '@element-plus/icons-vue';
</script>
