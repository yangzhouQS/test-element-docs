<template>
  <panel title="标题" :show-header="true" border :padding-size="'base'">
    <template #tool>
      <flex-line :left-padding="true" :right-padding="true" :left-clear-padding="['left']">
        <el-button type="primary" :icon="Plus">新增</el-button>
        <el-button type="primary" plain :icon="Edit">编辑</el-button>
        <el-button type="danger" plain :icon="Delete">删除</el-button>
        <template #right>
          <el-button type="primary" link>更多>></el-button>
        </template>
      </flex-line>
    </template>
    <div v-for="i in 10 " :key="i">这是内容{{ i }}</div>
  </panel>
</template>

<script lang="ts" setup>
import ElementPro from '@cs/element-pro';
import { Delete, Edit, Plus } from '@element-plus/icons-vue';
import { ElButton } from 'element-plus';

const { Panel, FlexLine } = ElementPro;
</script>
