##  换行

`wrap`属性设置是否换行

:::demo  

```html
<template>
<el-switch v-model="isOverflow"
    active-text="换行"
    inactive-text="不换行"
    @change="overflowChange"
    ></el-switch>
  <box border height="300px" padding-size="small" :clear-padding="['bottom']">
    <list-only ref="listOnlyRef"
      :list-data="data" :loading="loading"
      :wrap="isOverflow"
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
const { ref, onMounted, nextTick } = Vue
const data = ref([])
const loading = ref(false)
onMounted(() => {
  loading.value = true
  setTimeout(() => {
    data.value = listDataSet
    loading.value = false
  }, 1000);
})
const isOverflow = ref(true)
const listOnlyRef = ref()
const overflowChange = () => {
  nextTick(() => {
    const scrollRef = listOnlyRef.value.getScrollRef()
    scrollRef.update()
  })
}
</script>
```
:::