##  添加数据

需要开启搜索模式，并且设置`allow-create`开启添加功能

方法`filter-current-create`用来过滤服务器中是否存在输入内容

方法`get-current-create`用来构造临时添加的数据，可临时存储一条数据；

添加完数据以后会自动刷新列表

  

```html
<template>
  <search-select
    ref="searchRef"
    v-model="value"
    :default-props="{label: 'orderCode',subLabel: 'makerDate',nextLabel: 'planType', value: 'id'}"
    :limit="20"
    placeholder="请选择"
    width="260px"
    :filter-current-create="filterCurrentCreate"
    :get-current-create="_create"
    allow-create
    @load-data="loadData"
    @change="changeData"
    >
  </search-select>
  <div>
    选中行：{{currRow}}
  </div>
</template>
<script lang="ts" setup>
  import { ref, reactive } from 'vue'
  import { ArrowDown, Search, Refresh } from '@element-plus/icons-vue'
  import axios from 'axios'
  const value = ref('')
  const currRow = ref()
  const searchRef = ref()
  
  const loadData = async (params, filter, resolve) => {
    if (filter) {
      params.condtionItems = [{
        fieldName: 'orderCode',
        fieldValue: `%${filter}%`,
        op: 'like'
      }]
    } else {
      params.condtionItems = []
    }
    const result =  await axios({
      url: 'http://dev.mctech.vip/mp-sso/q-master-plans-params',
      method: 'post',
      data: params
    })
    resolve(result.data.rows)
  }
  const changeData = (item) => {
    // console.log('change', item)
    currRow.value = item
  }
  const filterCurrentCreate = async (filter, resolve) => {
    // console.log('filterCurrentCreate')
    let params = {"limit":21,"offset":0,"draw":1,"condtionItems":[]}
    if (filter) {
      params.condtionItems = [{
        fieldName: 'orderCode',
        fieldValue: `${filter}`,
        op: 'eq'
      }]
    } else {
      params.condtionItems = []
    }
    const result =  await axios({
      url: 'http://dev.mctech.vip/mp-sso/q-master-plans-params',
      method: 'post',
      data: params
    })
    resolve(result.data.rows)
  }
  const _create = (label, resolve) => {
    // 创建明细，刷新列表
    const obj = {
      orderCode:  label,
      makerDate: '2023-01-01',
      planType: '哈哈哈',
      value:  new Date().getTime()
    }
    resolve(obj)
  }
</script>
```
