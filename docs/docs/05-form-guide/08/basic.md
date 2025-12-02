##  基础用法

支持`tool-bar`组件的属性和插槽，直接挂载在`dynamic-filter`

`filter-items`属性将表单项以对象数组的形式配置，其中`renderContent`为表单项的内容渲染函数



```html
<template>
  <el-switch v-model="bool"></el-switch>
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
  name: '',
  region: '',
  date1: '',
  date2: '',
  delivery: false,
  type: [],
  resource: '',
  desc: '',
});
const dynamicFilterRef = ref();
const bool = ref(false)
const items = computed(() => {
  if(bool.value) {
    return [
    {
      display: true,
      label: '活动名称',
      name: 'a',
      layout: {
        span: 8
      },
      renderContent: () => {
        return (
          <el-input v-model={formModel.name}> </el-input>
        )
      },
    },
    {
      display: true,
      label: '活动时间',
      name: 'b',
      layout: {
        span: 8
      },
      renderContent: () => {
        return (
          <el-date-picker
            v-model={formModel.date1}
            type="date"
            placeholder="选择日期"
            style="width: 100%"
          />
        )
      },
    },
    {
      display: true,
      label: '活动区域',
      name: 'c',
      layout: {
        span: 8
      },
      renderContent: () => {
        return (
          <el-select v-model={formModel.region} placeholder="请选择">
            <el-option label="上海" value="上海" />
            <el-option label="北京" value="北京" />
          </el-select>
        )
      },
    },
    {
      display: true,
      name: 'd',
      label: '实时送达',
      layout: {
        span: 8
      },
      renderContent: () => {
        return (
          <el-switch v-model={formModel.delivery}></el-switch>
        )
      },
    }
  ]
  }
  return [
    {
      display: true,
      label: '活动名称',
      name: 'a',
      layout: {
        span: 8
      },
      renderContent: () => {
        return (
          <el-input v-model={formModel.name}> </el-input>
        )
      },
    },
    {
      display: true,
      label: '活动区域',
      name: 'c',
      layout: {
        span: 8
      },
      renderContent: () => {
        return (
          <el-select v-model={formModel.region} placeholder="请选择">
            <el-option label="上海" value="上海" />
            <el-option label="北京" value="北京" />
          </el-select>
        )
      },
    },
    {
      display: true,
      label: '活动时间',
      name: 'b',
      layout: {
        span: 8
      },
      renderContent: () => {
        return (
          <el-date-picker
            v-model={formModel.date1}
            type="date"
            placeholder="选择日期"
            style="width: 100%"
          />
        )
      },
    },
    {
      display: true,
      name: 'd',
      label: '实时送达',
      layout: {
        span: 8
      },
      renderContent: () => {
        return (
          <el-switch v-model={formModel.delivery}></el-switch>
        )
      },
    }
  ]
})
const onSubmit = async () => {
  console.log('submit!', formModel);
};
</script>

```
