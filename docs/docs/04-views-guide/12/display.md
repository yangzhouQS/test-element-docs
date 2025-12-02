##  隐藏

`items`属性明细中的`display`属性来控制信息面板项的显示或隐藏

:::demo  

```html
<template>
  <el-switch v-model="isTrue"
    active-text="显示"
    inactive-text="隐藏"
    @change="switchChange"
    ></el-switch>
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
        return '活动名称名称'
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
        return '表单显示项'
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
        return '陕西省西安市雁塔区'
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