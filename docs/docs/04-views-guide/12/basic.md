##  基础用法

`items`属性将展示内容项以对象数组的形式配置，其中`renderContent`为每项的内容渲染函数



```html
<template>
  <panel title="动态信息面板" border padding-size="small">
    <dynamic-description ref="dynamicRef"
      :items="items"
      label-width="100px"
      >
    </dynamic-description>
  </panel>
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
const dynamicRef = ref();
const items = computed(() => {
  return [
    {
      display: true,
      label: '活动名称',
      layout: {
        span: 8
      },
      renderContent: () => {
        return '活动名称名称'
      },
    },
    {
      display: true,
      label: '活动区域',
      layout: {
        span: 8
      },
      renderContent: () => {
        return '陕西省西安市雁塔区'
      },
    },
    {
      display: true,
      label: '活动时间',
      layout: {
        span: 8
      },
      renderContent: () => {
        return '2023年11月'
      },
    },
    {
      display: true,
      label: '实时送达',
      layout: {
        span: 8
      },
      renderContent: () => {
        return (
          <el-tag type="success">准时</el-tag>
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
:::