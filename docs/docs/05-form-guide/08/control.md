##  表单项控制

表单项的卡控可以在`renderContent`中做逻辑判断

  

```html
<template>
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
  isDisable: false,
  isChange: false,
  name1: '',
  name2: ''
});
const dynamicFilterRef = ref();
const items = computed(() => {
  return [
    {
      display: true,
      label: '禁用',
      renderContent: () => {
        return (
          <el-checkbox v-model={formModel.isDisable} />
        )
      },
      layout: {
        span: 6
      }
    },
    {
      display: true,
      label: '表单显示项',
      renderContent: () => {
        return (
          <el-input v-model={formModel.name1} disabled={formModel.isDisable}> </el-input>
        )
      },
      layout: {
        span: 18
      }
    },
    {
      display: true,
      label: '替换',
      renderContent: () => {
        return (
          <el-checkbox v-model={formModel.isChange} />
        )
      },
      layout: {
        span: 6
      }
    },
    {
      display: true,
      label: '表单显示项',
      renderContent: () => {
        if( formModel.isChange ) {
          return (
            <el-tag type="success">动态替换组件</el-tag>
          )
        } else {
          return (
            <el-input v-model={formModel.name2} disabled={formModel.isChange}> </el-input>
          )
        }
      },
      layout: {
        span: 18
      }
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
