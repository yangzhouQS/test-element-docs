<template>
  <div style="border:solid 1px #ccc">
    <flex-line :left-padding="true" :right-padding="true" :right-clear-padding="['right']" left-width="400px">
      <el-button type="primary" :icon="Plus">新增</el-button>
      <el-button type="primary" plain :icon="Edit"> 编辑</el-button>
      <el-button type="warning" class="button-margin-left" plain :icon="Remove"> 停用</el-button>
      <el-button plain type="danger" :icon="Delete"> 删除</el-button>
    </flex-line>
  </div>
</template>

<script setup lang="ts">
import { ElButton } from 'element-plus';
import ElementPro from '@cs/element-pro';
const { FlexLine } = ElementPro;

import {
  Remove,
  Delete,
  Plus,
  Edit,
} from '@element-plus/icons-vue';
</script>

<style scoped>

</style>