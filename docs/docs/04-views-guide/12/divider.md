##  分割线

在`items`属性中添加分割线配置项,`type`值为`divider`，没有分割线设置就不会显示分割线





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
  const layout = {
    xs: 24,
    sm: 12,
    md: 8,
    lg: 6,
    xl: 4,
  }
  return [
    {
      display: true,
      label: '活动名称',
      layout: layout,
      renderContent: () => {
        return '活动名称名称'
      },
    },
    {
      display: true,
      label: '活动区域',
      layout: layout,
      renderContent: () => {
        return '陕西省西安市雁塔区'
      },
    },
    {
      display: true,
      type: 'divider',
      title: '禁用折叠功能',
      disableFold: true,
    },
    {
      display: true,
      label: '活动时间',
      layout: layout,
      renderContent: () => {
        return '2023年11月'
      },
    },
    {
      display: true,
      label: '实时送达',
      layout: layout,
      renderContent: () => {
        return (
          <el-tag type="success">准时</el-tag>
        )
      },
    },
    {
      display: true,
      label: '活动区域',
      layout: layout,
      renderContent: () => {
        return '陕西省西安市雁塔区'
      },
    },
    {
      display: true,
      label: '活动区域1',
      layout: layout,
      renderContent: () => {
        return '陕西省西安市雁塔区'
      },
    },
    {
      display: true,
      label: '活动区域2',
      layout: layout,
      renderContent: () => {
        return '陕西省西安市雁塔区'
      },
    },
    {
      display: true,
      type: 'divider',
      title: '默认展开',
      disableFold: false,
      defaultExpand: true,
    },
    {
      display: true,
      label: '活动区域3',
      layout: layout,
      renderContent: () => {
        return '陕西省西安市雁塔区'
      },
    },
    {
      display: true,
      label: '活动区域4',
      layout: layout,
      renderContent: () => {
        return '陕西省西安市雁塔区'
      },
    },
    {
      display: true,
      label: '活动区域5',
      layout: layout,
      renderContent: () => {
        return '陕西省西安市雁塔区'
      },
    },
    {
      display: true,
      type: 'divider',
      title: '默认折叠',
      disableFold: false,
    },
    {
      display: true,
      label: '活动区域6',
      layout: layout,
      renderContent: () => {
        return '陕西省西安市雁塔区'
      },
    },
    {
      display: true,
      label: '活动区域7',
      layout: layout,
      renderContent: () => {
        return '陕西省西安市雁塔区'
      },
    },
    {
      display: true,
      label: '活动区域8',
      layout: layout,
      renderContent: () => {
        return '陕西省西安市雁塔区'
      },
    },
    {
      display: true,
      label: '活动区域9',
      layout: layout,
      renderContent: () => {
        return '陕西省西安市雁塔区'
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