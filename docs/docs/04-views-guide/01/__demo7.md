
## 默认加载第一级

设置`expand-first`属性开启

```
<template>
  <div style="width:300px;height:300px">
    <panel border :show-header="false" padding-size="small">
      <search-tree-panel
        v-model="ghId"
        :default-text="ghName"
        :default-props="{ label: 'name', value: 'id' }"
        width="300px"
        :more-enable="true"
        :root-node="rootNode"
        clearable
        :search-enable="true"
        expand-first
        @load-node="loadNode"
        @load-search-data="loadSearchData"
        @select-change="_selectChange"
        >
      </search-tree-panel>
    </panel>
  </div>
</template>

<script lang="ts" setup>
import axios from 'axios'
const { ref, onMounted } = Vue


const ghId = ref(null)
const ghName = ref('')
const rootNode = ref({})

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

onMounted(() => {
  rootNode.value = { id: -1, name: '根节点' }
})
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

