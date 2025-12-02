<template>
  <el-tabs v-model="activeName">
    <el-tab-pane label="供应商材料汇总" name="first" class="padding-small">
    </el-tab-pane>
    <el-tab-pane label="项目部材料汇总" name="second" class="padding-small">
    </el-tab-pane>
  </el-tabs>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { ElTabs, ElTabPane } from 'element-plus';

const activeName = ref('first');
</script>
<style scoped>

</style>