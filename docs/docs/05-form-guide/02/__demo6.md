
## 列表禁用

在`default-props`中的`disabled`设置禁用字段,值为`true`则禁用

:::demo  

```html
<template>
  <search-tree-select
    v-model="ghId"
    :default-text="ghName"
    :default-props="{ label: 'name', value: 'id', disabled: 'isCheck' }"
    width="300px"
    :root-node="{id: -1, name: '根节点'}"
    :search-enable="true"
    @load-node="loadNode"
    @load-search-data="loadSearchData"
    @select-change="_selectChange"
    >
  </search-tree-select>
</template>

<script lang="ts" setup>
import axios from 'axios'
const { ref } = Vue


const ghId = ref(null)
const ghName = ref('')

const loadData = async (params, resolve) => {
  const result =  await axios({
    url: 'http://dev.mctech.vip/mp-sso/c-gh-data-params',
    method: 'post',
    data: params
  })
  resolve(result.data.rows)
}
const loadNode = async (node, resolve) => {
  const params =  {
        "limit": node.limit,
        "draw": 1,
        "offset": node.offset,
        "order": [["sortCode"], ["id"]],
        "condtionItems": [{
            "fieldName": "orgId",
            "op": "eq",
            "fieldValue": 609531394904064
        },
        {
            "fieldName": "parentId",
            "op": "eq",
            "fieldValue": node.id
        }]
    }
  loadData(params, resolve)
}
const loadSearchData = async (filter, resolve) => {
  const params =  {
        "limit": 20,
        "draw": 1,
        "offset": 0,
        "order": [["sortCode"], ["id"]],
        "condtionItems": [{
            "fieldName": "orgId",
            "op": "eq",
            "fieldValue": 609531394904064
        },
        {
            "fieldName": "name",
            "op": "like",
            "fieldValue": `%${filter}%`
        }]
    }
  loadData(params, resolve)
}
const _selectChange = (node) => {
  if(node.id===-1) {
    ghId.value = null
    ghName.value = ''
  }
}
</script>
<style lang="less" scoped>
.list-item-org {
  .second-title {
    font-size: var(--el-font-size-extra-small);
    color: var(--el-text-color-secondary);
  }
}
</style>
```
:::

