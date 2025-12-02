##  隐藏表单项

`filter-items`属性明细中的`display`属性来控制表单项的显示或隐藏

:::demo  

```html
<template>
  <el-switch v-model="isTrue"
    active-text="显示"
    inactive-text="隐藏"
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
  name: '',
  name1: '',
  isCheck: false
});
const dynamicFormRef = ref();
const isTrue = ref(true);
const items = computed(() => {
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
      layout: {
        span: 12
      }
    },
    {
      display: isTrue.value,
      label: '表单显示项',
      name: 'name1',
      renderContent: () => {
        return (
          <el-checkbox v-model={formModel.isCheck}> </el-checkbox>
        )
      },
      layout: {
        span: 12
      }
    },
    {
      display: true,
      label: '活动地址',
      name: 'name2',
      renderContent: () => {
        return (
          <el-input v-model={formModel.name1}> </el-input>
        )
      },
      layout: {
        span: 12
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
:::