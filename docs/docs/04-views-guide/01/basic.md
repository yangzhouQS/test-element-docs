##  基础用法

异步加载树形表数据，传入`root-node`属性，初始化树的根节点

`v-model`设置选择值，双向绑定

`loadNode`方法的第二个参数`resolve`是一个回调函数，使用`resolve`函数传递数据列表，用来加载下级数据

```
<template>
  <div style="width:300px;height:300px">
    <panel border :show-header="false" padding-size="small">
      <search-tree-panel
        ref="searchTreeRef"
        v-model="ghId"
        :default-text="ghName"
        :default-props="{ label: 'name', value: 'id' }"
        width="300px"
        :more-enable="false"
        :expand-first="true"
        :root-node="rootNode"
        placeholder="请选择工号"
        @load-node="loadNode"
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
const searchTreeRef = ref()

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
        "limit": 100,
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
onMounted(() => {
  rootNode.value = { id: -1, name: '根节点' }
})
</script>
<style lang="less" scoped>
</style>
```
