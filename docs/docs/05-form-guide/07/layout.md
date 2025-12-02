##  布局

组件使用`el-row`和`el-col`布局

`layout`属性设置`el-row`的参数

`form-items`属性明细中的`layout`属性设置`el-col`的参数

  

```html
<template>
  <el-switch v-model="isTrue"
    active-text="响应式"
    inactive-text="非响应式"
    @change="switchChange"
    ></el-switch>
  <flex-box :item-num="flexConfig.length" :item-config="flexConfig">
    <template #item-1>
      <box :clear-padding="['bottom']">
        <dynamic-form ref="dynamicFormRef"
          :model="formModel"
          label-width="100px"
          :form-items="items"
          :layout="layout"
          >
        </dynamic-form>
      </box>
    </template>
    <template #item-2>
    <flex-line :left-padding="true" :right-padding="true" >
      <template #right>
        <box>
          <el-button type="primary" link >取消</el-button>
          <el-button type="primary" @click="onSubmit">保存</el-button>
        </box>
      </template>
    </flex-line>
    </template>
  </flex-box>
</template>
<script lang="tsx" setup>
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
const dynamicFormRef = ref();
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
