##  布局

组件使用`el-col`布局

`items`属性明细中的`layout`属性设置`el-col`的参数

:::demo  

```html
<template>
  <el-switch v-model="isTrue"
    active-text="响应式"
    inactive-text="非响应式"
    @change="switchChange"
    ></el-switch>
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
  name: ''
});
const dynamicRef = ref();
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
      layout: itemLayout,
      renderContent: () => {
        return '活动名称名称'
      },
    },
    {
      display: true,
      label: '活动区域',
      layout: itemLayout,
      name: 'name1',
      renderContent: () => {
        return '陕西省西安市雁塔区'
      },
    },
    {
      display: true,
      label: '活动时间',
      name: 'name2',
      layout: itemLayout,
      renderContent: () => {
        return '2023年11月'
      },
    },
    {
      display: true,
      label: '实时送达',
      name: 'name3',
      layout: itemLayout,
      renderContent: () => {
        return (
          <el-tag type="success">准时</el-tag>
        )
      },
    }
  ]
})
const switchChange = () => {
}
</script>

```
:::