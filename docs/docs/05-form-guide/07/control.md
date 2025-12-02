##  表单项控制

表单项的卡控可以在`renderContent`中做逻辑判断

  

```html
<template>
  <flex-box :item-num="flexConfig.length" :item-config="flexConfig">
    <template #item-1>
      <box :clear-padding="['bottom']">
        <dynamic-form ref="dynamicFormRef"
          :model="formModel"
          label-width="100px"
          :form-items="items"
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
  isDisable: false,
  isChange: false,
  name1: '',
  name2: ''
});
const dynamicFormRef = ref();
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
