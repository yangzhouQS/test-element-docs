##  基础用法

传入`list-data`, 使用`item`插槽渲染每行的内容

设置`list-item-props`属性，用来设置每个列表项的大小、边框等参数

:::demo  

```html
<template>
  <box border height="300px" padding-size="small" :clear-padding="['bottom']">
    <list-only :list-data="data" :loading="loading"
      :list-item-props="{
        height: '100px',
        width: '300px',
        border: true,
        paddingSize: 'small'
      }">
      <template #item="scope">
        <div>{{ scope.row.supplierName }}</div>
        <div style="font-size:12px; color:var(--el-text-color-secondary)">{{ scope.row.materialName }}</div>
        <div style="font-size:12px; color:var(--el-text-color-secondary)">{{ scope.row.materialModel }}|{{ scope.row.materialUnit }}</div>
        <div style="text-align:right">
          <el-button type="primary" :icon="Search" plain >详情</el-button>
        </div>
      </template>
    </list-only>
  </box>
</template>
<script lang="ts" setup>
import listDataSet from '../../../test-data/list-data-set.json';
import {
  Search,
} from '@element-plus/icons-vue'
const { ref, onMounted } = Vue
const data = ref([])
const loading = ref(false)
onMounted(() => {
  loading.value = true
  setTimeout(() => {
    data.value = listDataSet
    loading.value = false
  }, 1000);
})
</script>
```
:::