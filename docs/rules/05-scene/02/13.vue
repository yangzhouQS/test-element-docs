<template>
  <el-popover :visible="btnVisible" placement="bottom" :width="160" trigger="click">
    <p> 删除以后无法恢复，是否继续 ?</p>
    <div style="text-align: right; margin: 0">
      <el-button size="small" text @click="btnVisible = false">取消</el-button>
      <el-button size="small" type="primary">确认</el-button>
    </div>
    <template #reference>
      <el-button type="danger" plain @click="btnVisible=true" :icon="Delete">删除</el-button>
    </template>
  </el-popover>
</template>

<script setup lang="ts">
import { ElButton, ElPopover } from 'element-plus';
import { ref } from 'vue';

import {
  Delete,
} from '@element-plus/icons-vue';
const btnVisible = ref(false);

</script>

<style scoped>

</style>