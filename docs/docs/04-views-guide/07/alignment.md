##  对齐方式

设置该值可以调整所有子节点在容器内的对齐方式，可设置的值与[align-items](https://developer.mozilla.org/en-US/docs/Web/CSS/align-items)一致。

使用 alignment 属性来对齐
  

```html
<template>
  <el-radio-group v-model="radio2">
    <el-radio-button label="flex-start"></el-radio-button>
    <el-radio-button label="flex-end" ></el-radio-button>
    <el-radio-button label="center" ></el-radio-button>
  </el-radio-group>
  <box border height="300px" padding-size="small" :clear-padding="['bottom']">
    <list-only :list-data="data" :loading="loading"
      :alignment="radio2"
      >
      <template #item="scope">
        <div style="background:var(--el-color-primary-light-9);
            color:var(--el-color-primary);
            padding:10px;
            text-align:center"
            :style="{
              width: scope.row.id % 2 === 0 ? '200px' :'250px',
              height: scope.row.id % 2 === 0 ? '100px' :'150px',
            }"
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
const radio2 = ref('flex-start')
</script>
```
:::