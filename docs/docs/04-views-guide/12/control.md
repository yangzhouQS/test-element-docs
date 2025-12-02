##  项之间控制

卡控可以在`renderContent`中做逻辑判断

:::demo  

```html
<template>
  <panel title="动态信息面板" border padding-size="small">
    <dynamic-description ref="dynamicFilterRef"
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
      label: '替换',
      renderContent: () => {
        return (
          <el-switch v-model={formModel.isChange} />
        )
      },
      layout: {
        span: 6
      }
    },
    {
      display: true,
      label: '显示项',
      renderContent: () => {
        if( formModel.isChange ) {
          return (
            <el-tag type="success">动态替换组件</el-tag>
          )
        } else {
          return (
            '信息展示显示项'
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
:::