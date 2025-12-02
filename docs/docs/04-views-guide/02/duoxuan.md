## 多选

调用`el-table`原生的`selection-change`事件可以获取到当前选中行

`toggleRowSelection`方法用来设置行点击选中


:::demo  

```html
<template>
  <div style="height:400px;">
    <table-only
      ref="tableOnlyRef"
      :table-data="tableData"
      :column-configs="tableConfig"
      @selection-change="tableSelect"
      @row-click="toggleSelect"
      >
    </table-only>
  </div>
</template>
<script lang="ts" setup>
  import materialDataSet from '../../../test-data/material-data-set.json';
  const {ref, computed, onMounted} = Vue
  const tableData = ref(materialDataSet)
  const tableOnlyRef = ref(null)
  const tableRef = ref(null)
  const tableConfig = computed(() => {
    return [
        { attr: { prop: "code", type: 'selection', label: "选择", width: 50, headerAlign: 'center', align: 'center' } },
        { attr: { prop: "code", label: "编码", width: 90, headerAlign: 'center' } },
        { attr: { prop: "name", label: "名称", width: 120 } },
        { attr: { prop: "spec", label: "规格", width: 120   } },
        { attr: { prop: "unit", label: "单位", width: 60 } },
        { attr: { prop: "quantity", label: "数量"} },
        { attr: { prop: "orgName", label: "组织名称"} },
        { attr: { prop: "createdAt", label: "添加时间", width: 210 }}
      ]
  })
const tableSelect = (rows) => {
  console.log(rows)
}
const toggleSelect = (row,column) => {
  tableRef.value!.toggleRowSelection(row, undefined)
}
onMounted(()=>{
  tableRef.value = tableOnlyRef.value.getNativeRefs()
})
</script>
```
:::

