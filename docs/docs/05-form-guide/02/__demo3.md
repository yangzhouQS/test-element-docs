

## 搜索

搜索列表不分页，加载固定行数

设置`search-enable`属性，开启搜索功能

`load-search-data`方法加载搜索数据列表，`filter`参数为搜索框中所填的值

  

```html
<template>
  <search-tree-select
    v-model="ghId"
    :default-text="ghName"
    :default-props="{ label: 'name', value: 'id', fullId: 'fullId', split: '|' }"
    width="300px"
    :root-node="{id: -1, name: '根节点'}"
    :search-enable="true"
    :default-expanded-keys="defaultExpandedKeys"
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
const defaultExpandedKeys = ref([])

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
  const arr = node.fullId.split('|')
  defaultExpandedKeys.value = [-1, ...arr]
}
</script>
<style lang="less" scoped>
</style>
```
