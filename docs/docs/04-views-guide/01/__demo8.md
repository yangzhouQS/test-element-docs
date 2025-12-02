
## 默认展开和选中

组件默认不自动展开节点，如果需要展开并且选中某个节点，可以设置`default-expanded-keys`属性设置展开节点

```
<template>
  <div style="width:300px;height:300px">
    <panel border :show-header="false" padding-size="small">
      <search-tree-panel
        ref="searchTreeRef"
        v-model="ghId"
        :default-text="ghName"
        :default-props="{ label: 'name', value: 'id', fullId: 'fullId', split: '|' }"
        width="300px"
        :more-enable="true"
        :root-node="{id: -1, name: '根节点'}"
        clearable
        :search-enable="true"
        :default-expanded-keys="defaultExpandedKeys"
        @load-node="loadNode"
        @load-search-data="loadSearchData"
        @select-change="_selectChange"
        @reload="reloadTree"
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
const searchTreeRef = ref()
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
  if(node.id===-1) {
    ghId.value = null
    ghName.value = ''
  } else {
    ghId.value = node.id
    ghName.value = node.name
  }
  const fullId = node.fullId.split('|').map(id => Number(id))
  defaultExpandedKeys.value = [-1, ...fullId]
}
onMounted(async () => {
  const fullId = '708942789300224|708942999990272'.split('|').map(id => Number(id))
  ghId.value = fullId[1]
  ghName.value = '核算工号1.2'
  defaultExpandedKeys.value = [-1, ...fullId]
})
const reloadTree = () => {
  defaultExpandedKeys.value = [-1, 708942789300224, 708942999990272]
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

