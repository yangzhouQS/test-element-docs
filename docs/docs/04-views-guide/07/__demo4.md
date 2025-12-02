##  自定义列表项

如果组件内部提供的列表项的样式无法满足使用，可以使用自定义列表项

:::demo  

```html
<template>
  <box border height="300px" padding-size="small" :clear-padding="['bottom']">
    <list-only :list-data="data" :loading="loading"
      :list-item-props="{
        height: '100px',
        width: '200px'
      }">
      <template #item="scope">
        <div style="background:var(--el-color-primary-light-9);
            color:var(--el-color-primary);
            padding:10px;
            margin-bottom:6px;
            height: 100%;
            text-align:center"
          >
          {{ scope.row.value }}
        </div>
      </template>
    </list-only>
  </box>
</template>
<script lang="ts" setup>
const { ref, onMounted } = Vue
const data = ref([])
const loading = ref(false)
onMounted(() => {
  loading.value = true
  setTimeout(() => {
    data.value = [
      {id: 1, value: '列表内容1'},
      {id: 2, value: '列表内容2'},
      {id: 3, value: '列表内容3'},
      {id: 4, value: '列表内容4'},
      {id: 5, value: '列表内容5'},
      {id: 6, value: '列表内容6'},
      {id: 7, value: '列表内容7'},
      {id: 8, value: '列表内容8'},
      {id: 9, value: '列表内容9'},
      {id: 10, value: '列表内容10'}
    ]
    loading.value = false
  }, 1000);
})
</script>
```
:::