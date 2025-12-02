

## 自定义模板

`treeitem`插槽渲染树节点

`listitem`插槽渲染列表

  

```html
<template>
  <search-tree-select
    v-model="ghId"
    :default-text="ghName"
    :default-props="{ label: 'name', value: 'id' }"
    width="300px"
    :more-enable="true"
    :current-size="6"
    :root-node="{id: -1, name: '根节点'}"
    :search-enable="true"
    @load-node="loadNode"
    @load-search-data="loadSearchData"
    @select-change="_selectChange"
    >
     <template #treeitem="scope">
      {{ scope.row.name }}
      <el-tag v-if="scope.row.isDelivery">发</el-tag>
      <el-tag v-if="scope.row.isCheck" type="success">核</el-tag>
    </template>
     <template #listitem="scope">
        <div class="list-item-org">
          <div class="title">{{ scope.row.name }}</div>
          <div class="second-title">{{ scope.row.fullName }}</div>
        </div>
    </template>
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
  console.log('change', node)
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
