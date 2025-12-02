
## 排序

列配置中设置`sortable`属性为`true`，则会打开排序

如需设置自定义排序规则，列配置中设置`sortable`属性为`custom`，表格加载时则会触发`sort-change`事件，在这个事件里可以自定义排序规则，或者`异步调用接口`查询

:::demo  

```html
<template>
  <div style="height:400px;">
    <table-only
      :table-data="tableData"
      :column-configs="tableConfig"
      @sort-change="sortChange"
      >
    </table-only>
  </div>
</template>
<script lang="ts" setup>
  import materialDataSet from '../../../test-data/material-data-set.json';
  const {ref, computed, onMounted} = Vue
  const tableData = ref(materialDataSet)
  const tableConfig = computed(() => {
    return [
        { attr: { prop: "code", type: 'index', label: "序号", width: 50, headerAlign: 'center', align: 'center' } },
        { attr: { prop: "code", label: "编码", width: 90, headerAlign: 'center', sortable:true } },
        { attr: { prop: "name", label: "名称", width: 120 } },
        { attr: { prop: "spec", label: "规格", width: 120   } },
        { attr: { prop: "unit", label: "单位", width: 60 } },
        { attr: { prop: "quantity", label: "数量"} },
        { attr: { prop: "orgName", label: "组织名称"} },
        { attr: { prop: "createdAt", label: "添加时间", width: 210 }}
      ]
  })
  
const sortChange = ({column, prop, order}) => {
  console.log('后端排序字段：', column, prop, order)
}
</script>
```
:::

