##  布局

组件使用`el-col`布局

`filter-items`属性明细中的`layout`属性设置`el-col`的参数

:::demo  

```html
<template>
  <el-switch v-model="isTrue"
    active-text="响应式"
    inactive-text="非响应式"
    @change="switchChange"
    ></el-switch>
  <dynamic-filter ref="dynamicFilterRef"
    :filter-items="items"
    padding-size="small"
    border
    divider
    tool-max-width="160px"
    >
    <template v-slot:tool>
      <el-button type="info" :icon="Search" plain >查询</el-button>
      <el-button type="success" plain ><i class="cs-common excel"></i>&nbsp;导 出</el-button>
    </template>
    <flex-line :left-padding="true" :right-padding="true" :left-clear-padding="[]" :right-clear-padding="[]">
      <el-button type="primary" :icon="Plus" @click="add">新增</el-button>
      <el-button type="primary" plain :icon="Edit" @click="edit">编辑</el-button>
      <el-button type="danger" plain  :icon="Delete">删除</el-button>
    </flex-line>
  </dynamic-filter>
</template>
<script lang="tsx" setup>
import { Search, Plus, Edit, Delete } from '@element-plus/icons-vue';
const { reactive, watch, ref, computed } = Vue;

const flexConfig = [
  {
    tag: 'item-1',
    isFixed: false,
  },
  {
    tag: 'item-2',
    isFixed: true,
  }
]
const formModel = reactive({
  name: ''
});
const dynamicFilterRef = ref();
const layout = reactive({
  justify: 'start'
})
const isTrue = ref(false);
const items = computed(() => {
  const itemLayout = {
    xs: isTrue.value ? 24 : null,
    sm: isTrue.value ? 12 : null,
    md: isTrue.value ? 8 : null,
    lg: isTrue.value ? 6 : null,
    xl: isTrue.value ? 4 : null,
    span: isTrue.value ? null : 12
  }
  return [
    {
      display: true,
      label: '活动名称',
      name: 'name',
      renderContent: () => {
        return (
          <el-input v-model={formModel.name}> </el-input>
        )
      },
      layout: itemLayout
    },
    {
      display: true,
      label: '活动名称',
      name: 'name1',
      renderContent: () => {
        return (
          <el-input v-model={formModel.name}> </el-input>
        )
      },
      layout: itemLayout
    },
    {
      display: true,
      label: '活动名称',
      name: 'name2',
      renderContent: () => {
        return (
          <el-input v-model={formModel.name}> </el-input>
        )
      },
      layout: itemLayout
    },
    {
      display: true,
      label: '活动名称',
      name: 'name3',
      renderContent: () => {
        return (
          <el-input v-model={formModel.name}> </el-input>
        )
      },
      layout: itemLayout
    }
  ]
})
const onSubmit = async () => {
  console.log('submit!', formModel);
};
const switchChange = () => {
}
</script>

```
:::