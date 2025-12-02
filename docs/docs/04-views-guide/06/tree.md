##  树形表


:::demo  

```html
<template>
  <div style="height:300px;">
    <table-only
      :table-data="tableData"
      :column-configs="tableConfig"
      row-key="id"
      border
      default-expand-all
      >
    </table-only>
  </div>
  <div style="height:300px;">
    <table-only
      :table-data="tableData1"
      :column-configs="tableConfig"
      row-key="id"
      border
      lazy
      :load="load"
      :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
      >
    </table-only>
  </div>
</template>
<script lang="ts" setup>
  const {ref, computed, onMounted} = Vue
  const tableData: User[] = [
    {
      id: 1,
      date: '2016-05-02',
      name: 'wangxiaohu',
      address: 'No. 189, Grove St, Los Angeles',
    },
    {
      id: 2,
      date: '2016-05-04',
      name: 'wangxiaohu',
      address: 'No. 189, Grove St, Los Angeles',
    },
    {
      id: 3,
      date: '2016-05-01',
      name: 'wangxiaohu',
      address: 'No. 189, Grove St, Los Angeles',
      children: [
        {
          id: 31,
          date: '2016-05-01',
          name: 'wangxiaohu',
          address: 'No. 189, Grove St, Los Angeles',
        },
        {
          id: 32,
          date: '2016-05-01',
          name: 'wangxiaohu',
          address: 'No. 189, Grove St, Los Angeles',
        },
      ],
    },
    {
      id: 4,
      date: '2016-05-03',
      name: 'wangxiaohu',
      address: 'No. 189, Grove St, Los Angeles',
    },
  ]

  const tableData1: User[] = [
    {
      id: 1,
      date: '2016-05-02',
      name: 'wangxiaohu',
      address: 'No. 189, Grove St, Los Angeles',
    },
    {
      id: 2,
      date: '2016-05-04',
      name: 'wangxiaohu',
      address: 'No. 189, Grove St, Los Angeles',
    },
    {
      id: 3,
      date: '2016-05-01',
      name: 'wangxiaohu',
      hasChildren: true,
      address: 'No. 189, Grove St, Los Angeles',
    },
    {
      id: 4,
      date: '2016-05-03',
      name: 'wangxiaohu',
      address: 'No. 189, Grove St, Los Angeles',
    },
  ]
  const tableConfig = computed(() => {
    return [
        { attr: { prop: "code", type: 'index', label: "序号", width: 50, headerAlign: 'center', align: 'center' } },
        { attr: { prop: "date", label: "日期", width: 150, headerAlign: 'center' } },
        { attr: { prop: "name", label: "姓名", width: 120 } },
        { attr: { prop: "address", label: "地址"  } } 
      ]
  })
const load = (
  row: User,
  treeNode: unknown,
  resolve: (date: User[]) => void
) => {
  setTimeout(() => {
    resolve([
      {
        id: 31,
        date: '2016-05-01',
        name: 'wangxiaohu',
        address: 'No. 189, Grove St, Los Angeles',
      },
      {
        id: 32,
        date: '2016-05-01',
        name: 'wangxiaohu',
        address: 'No. 189, Grove St, Los Angeles',
      },
    ])
  }, 1000)
}
</script>
```
:::

