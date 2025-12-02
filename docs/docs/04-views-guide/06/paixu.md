
## 排序

通过给需要排序功能的列加上 sortable 属性可以支持排序

配置 sort-by 指定字段排序、或者方法返回自定义排序的值
:::demo  

```html
<template>
  <div style="height:400px;">
    <tree-table
      ref="tableRef"
      :table-data="tableData"
      :column-configs="tableConfig"
      :tree-config="{lazy: true}"
      :row-config="{keyField: 'id'}"
      @load-node="loadMethod"
      >
    </tree-table>
  </div>
</template>
<script lang="ts" setup>
  const {ref, computed, onMounted, reactive} = Vue
const tableRef = ref()
let key = 1
const tableData = ref([
  { id: ++key, parentKey: null, name: 'vxe-table test abc1', type: 'mp3', size: 1024, date: '2020-08-01' },
  { id: ++key, parentKey: null, name: 'Test2', type: 'mp4', size: 0, date: '2021-04-01', hasChild: true },
  { id: ++key, parentKey: null, name: 'Test23', type: 'mp4', size: 0, date: '2021-01-02', hasChild: true },
  { id: ++key, parentKey: null, name: 'vxe-table test abc9', type: 'avi', size: 224, date: '2020-10-04' },
  { id: ++key, parentKey: null, name: 'test abc', type: 'avi', size: 224, date: '2020-04-01' },
  { id: ++key, parentKey: null, name: 'test abc', type: 'avi', size: 224, date: '2020-10-03' },
  { id: ++key, parentKey: null, name: 'test abc', type: 'avi', size: 224, date: '2020-10-09' },
  { id: ++key, parentKey: null, name: 'test abc', type: 'avi', size: 224, date: '2020-05-01' }
])
const loadMethod = ({ row }, resolve) => {
  // 异步加载子节点
  // 模拟后台接口
  setTimeout(() => {
    const childs = [
      { id: ++key, parentId: row.id, name: row.name + 'Test', type: 'mp4', size: null, date: '2021-10-03', hasChild: true },
      { id: ++key, parentId: row.id, name: row.name + 'Test', type: 'mp3', size: null, date: '2021-07-09', hasChild: false },
      { id: ++key, parentId: row.id, name: row.name + 'Test', type: 'mp3', size: null, date: '2021-07-09', hasChild: true },
      { id: ++key, parentId: row.id, name: row.name + 'Test', type: 'mp3', size: null, date: '2021-08-05', hasChild: false },
      { id: ++key, parentId: row.id, name: row.name + 'Test', type: 'mp3', size: null, date: '2021-07-01', hasChild: false },
      { id: ++key, parentId: row.id, name: row.name + 'Test', type: 'mp3', size: null, date: '2021-07-01', hasChild: true },
      { id: ++key, parentId: row.id, name: row.name + 'Test', type: 'mp3', size: null, date: '2021-07-01', hasChild: false }
    ]
    resolve(childs)
  }, 1000)
}
const display = ref(true)
const tableConfig = computed(() => {
  return [
    { attr: { prop: "code", type: 'index', label: "序号", treeNode: true } },
    { attr: { prop: "name", label: "Name", width: 120,sortable: true,sortBy: sortNameMethod } },
    { attr: { prop: "size", label: "Size", width: 120 } },
    { attr: { prop: "type", label: "Type", width: 120,  } },
    { attr: { prop: "date", label: "Date",sortable: true, width: 120  } }
  ];
});
const sortNameMethod = ({ row }) => {
  // 按名称长度进行排序
  return row.name.length
}
</script>
```
:::
