<template>
  <div style="border:solid 1px #ccc">
    <flex-line :left-padding="true" :right-padding="true" :right-clear-padding="['right']" left-width="300px">
      <el-button type="primary" :icon="Plus" @click="dialogVisible=true">新增</el-button>
      <el-button type="primary" plain :icon="Edit">编辑</el-button>
      <el-button class="button-margin-left" type="danger" plain :icon="Delete">删除</el-button>
      <template #right>
        <el-space>
          <el-input></el-input>
          <el-button type="success" plain><i class="cs-common excel"></i> 导出</el-button>
        </el-space>
      </template>
    </flex-line>
  </div>
</template>
<script lang="ts" setup>
import { ElSpace, ElButton, ElInput } from 'element-plus';
import ElementPro from '@cs/element-pro';
import { Plus, Edit, Delete } from '@element-plus/icons-vue';
import { ref } from 'vue';

const { FlexLine } = ElementPro;
const dialogVisible = ref(false);

</script>

<style scoped>

</style>