##  基础用法

鼠标滑动可以查看更多没有显示出来的信息


:::demo  

```html
<template>
  <div style="width:100px">
    <label-extend content="文本信息"/>
  </div>
  <div style="width:100px">
    <label-extend style="color:red" :content="content" />
  </div>
  <div style="width:100%">
  <el-form>
    <el-row>
      <el-col v-for="i in 6" :span="4">
        <el-form-item label="标题">
          <label-extend style="color:red" :content="content" />
        </el-form-item>
      </el-col>
    </el-row>
  </el-form>
  </div>
</template>
<script lang="ts" setup>
  import {ref} from 'vue'
  const input = ref('')
  const content = ref('鼠标滑动可以查看更多没有显示出来的信息鼠标滑动可以查看更多没有显示出来的信息鼠标滑动可以查看更多没有显示出来的信息')
</script>
```
:::