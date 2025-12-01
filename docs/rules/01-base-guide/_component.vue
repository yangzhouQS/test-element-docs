<template>
  <div class="example">
    Hello World VUE
  </div>
  <el-button type="primary" @click="handleTest">hello</el-button>
</template>
<script setup lang="ts">
import { ElButton } from 'element-plus';
const handleTest = () => {
  console.log(new Date().toISOString());
}
</script>
<style scoped>
.example {
  color: green;
}
</style>
