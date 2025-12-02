## 多级表头

父节点在列配置中设置`isParent`为`true`，子级节点放在`items`中
:::demo  

```html
<template>
  <div style="height:400px;">
    <table-only
      :table-data="tableData"
      :column-configs="tableConfig"
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
        {
          isParent :true,
          attr: { label: "开累收料", headerAlign: "center"},
          items: [
            {
              isParent :true,
              attr: { label: "材料信息", headerAlign: "center"},
              items: [
                { attr: { prop: "code", label: "编码", width: 90, headerAlign: 'center' } },
                { attr: { prop: "name", label: "名称", width: 120 } },
                { attr: { prop: "spec", label: "规格", width: 120   } },
                { attr: { prop: "unit", label: "单位", width: 60 } },
              ]
            },
            { attr: { prop: "quantity", label: "数量"} },
          ]
        },
        { attr: { prop: "orgName", label: "组织名称"} }
      ]
  })
  
</script>
```
:::

