
## 展开更多

对每个节点可以进行分页加载，使用`more-enable`属性开启加载更多功能

`load-more`加载更多数据的方法

`current-size`表示每一页加载的行数

`load-node`的第一个参数`node`中会返回下次查询的`limit`和`offset`值，在展开节点和加载更多功能调用

  

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
    @load-node="loadNode"
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
const _selectChange = (node) => {
  console.log('change', node)
}
</script>
<style lang="less" scoped>
</style>
```
