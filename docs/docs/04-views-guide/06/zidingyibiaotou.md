## 自定义表头

列配置属性中设置`headerSlot`属性
:::demo  

```html
<template>
  <div style="height:400px;">
    <table-only
      :table-data="tableData"
      :column-configs="tableConfig"
      @select="tableSelect"
      @row-click="toggleSelect"
      >
      <template #createdatheader >
        <el-button type="info" :icon="InfoFilled" plain size="small" circle></el-button>
        标题自定义
      </template>
    </table-only>
  </div>
</template>
<script lang="ts" setup>
  import { InfoFilled } from '@element-plus/icons-vue'
  import materialDataSet from '../../../test-data/material-data-set.json';
  const {ref, computed, onMounted} = Vue
  const tableData = ref(materialDataSet)
  const tableConfig = computed(() => {
    return [
        { attr: { prop: "code", type: 'index', label: "序号", width: 50, headerAlign: 'center', align: 'center' } },
        { attr: { prop: "code", label: "编码", width: 90, headerAlign: 'center' } },
        { attr: { prop: "name", label: "名称", width: 120 } },
        { attr: { prop: "spec", label: "规格", width: 120   } },
        { attr: { prop: "unit", label: "单位", width: 60 } },
        { attr: { prop: "quantity", label: "数量"} },
        { attr: { prop: "orgName", label: "组织名称"} },
        { attr: { prop: "createdAt", label: "添加时间", width: 210, headerSlot: 'createdatheader' }}
      ]
  })
  
</script>
```
:::