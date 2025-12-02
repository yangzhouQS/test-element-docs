##  基础用法

默认自带搜索功能

- 数据加载：`load-data`事件分页加载数据, `params`会返回当前翻页参数，`reload`事件用来刷新列表；这两个事件传递`resolve`方法，用来给列表追加数据

- 数据绑定：设置`default-props`属性，设置列表信息和`value`值，`value`就是`v-model`所绑定的字段值
- 数据选择：`change`事件返回当前选中的行


```html
<template>
  <search-select
    v-model="value"
    :default-props="{label: 'orderCode',subLabel: 'makerDate',nextLabel: 'planType', value: 'id'}"
    :limit="20"
    placeholder="请选择"
    width="260px"
    @load-data="loadData"
    @change="changeData"
    >
  </search-select>
</template>
<script lang="ts" setup>
  import { ref, reactive } from 'vue'
  import { ArrowDown, Search, Refresh } from '@element-plus/icons-vue'
  import axios from 'axios'
  const value = ref('')
  const currRow = ref({})
  
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
    console.log(item)
    currRow.value = item
  }
</script>
```
