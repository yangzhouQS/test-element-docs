<template>
  <div>
    <div>
      <h3>启用状态</h3>
      <el-tag type="success" size="small">启用</el-tag> <el-tag type="danger" size="small">禁用</el-tag>
    </div>
    <div>
      <h3>提交状态</h3>
      <el-tag type="success" size="small">已提交</el-tag> <el-tag type="danger" size="small">未提交</el-tag>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ElTag } from 'element-plus';
</script>


<style scoped>

</style>