##  填充

通过 `fill`**（布尔类型）**参数，您可以控制子节点是否自动填充容器。

下面的例子中，当设置为 `fill` 时，子节点的宽度会自动适配容器的宽度。

用 `fill` 属性让子节点自动填充容器

:::tip
有些时候当列表布局改变时需要刷新滚动条状态，`getScrollRef`方法可以拿到`el-scrollbar`的实例
:::

  

```html
<template>
<el-switch v-model="isOverflow"
    active-text="超出范围"
    inactive-text="范围内"
    @change="overflowChange"
    ></el-switch>
  <box border height="400px" padding-size="small" :clear-padding="['bottom']">
    <list-only ref="listOnlyRef"
      :list-data="data" :loading="loading"
      :fill="true"
      :list-item-props="{
        height: '100px',
        border: true,
        paddingSize: 'small'
      }">
      <template #item="scope">
        <div style="display:flex;padding: 6px; background:var(--el-fill-color);color:var(--el-text-color-regular)">
          <div style="width:200px; padding: 0px 6px">
          <!-- 单据编号：{{scope.row.orderCode}} -->
            <filter-item label="单据编号" :label-width="'80px'">
              <label-extend :content="scope.row.orderCode" />
            </filter-item> 
          </div>
          <div style="padding: 0px 6px; width: 200px">
            <filter-item label="组织机构" :label-width="'80px'">
              <label-extend :content="scope.row.orgName" />
            </filter-item> 
          </div>
          <div style="padding: 0px 6px; width: 200px">
            <filter-item label="车牌号" :label-width="'80px'">
              <label-extend :content="scope.row.plateNumber" />
            </filter-item> 
          </div>
          <div v-if="isOverflow && scope.row.itemId % 2 === 0" style="padding: 0px 6px; width: 200px">
            <filter-item label="收料时间" :label-width="'80px'">
              <label-extend :content="scope.row.exitTime" />
            </filter-item> 
          </div>
        </div>
        <div style="display:flex;padding: 6px; font-size:16px;font-weight:600;color:var(--el-text-color-regular)">
          <div style="width:160px; padding: 0px 6px">{{scope.row.supplierName}}</div>
          <div style="padding: 0px 6px;width:160px">{{scope.row.materialName}}</div>
          <div style="padding: 0px 6px;width:160px">{{scope.row.materialModel}}</div>
          <div style="padding: 0px 6px;width:160px">{{scope.row.materialUnit}}</div>
          <div v-if="isOverflow && scope.row.itemId % 2 === 0" style="padding: 0px 6px;width:100px">{{scope.row.maker}}</div>
          <div v-if="isOverflow && scope.row.itemId % 2 === 0" style="padding: 0px 6px;width:100px"><el-tag type="success">正常</el-tag></div>
        </div>
      </template>
    </list-only>
  </box>
  <div style="font-size:16px;margin-top:10px">
    也可以使用 fillRatio 参数，自定义填充的比例， 默认值为 100，代表基于父容器宽度的 100% 进行填充
    需要注意的是，水平布局和垂直布局的表现形式稍有不同，具体的效果可以查看下面的例子
    用 fillRatio 自定义填充比例
  </div>
    direction:
      <el-radio v-model="direction" label="horizontal">horizontal</el-radio>
      <el-radio v-model="direction" label="vertical">vertical</el-radio>
   <div style="margin-bottom: 15px">
      fillRatio:<el-slider v-model="fillRatio" />
    </div>
  <box border height="300px" padding-size="small" :clear-padding="['bottom']">
    <list-only :list-data="data" :loading="loading"
      :fill="true"
      wrap
      :fill-ratio="fillRatio"
      alignment="center"
      :direction="direction"
      space-style="width:100%"
      >
      <template #item="scope">
        <el-card class="box-card">
           <div >{{scope.row.supplierName}}</div>
          <div>{{scope.row.materialName}}</div>
        </el-card>
        </template>
    </list-only>
  </box>
</template>
<script lang="ts" setup>
import listDataSet from '../../../test-data/list-data-set.json';
const { ref, onMounted, nextTick } = Vue
const data = ref([])
const loading = ref(false)
onMounted(() => {
  loading.value = true
  setTimeout(() => {
    data.value = listDataSet
    loading.value = false
  }, 1000);
})
const isOverflow = ref(false)
const listOnlyRef = ref()
const overflowChange = () => {
  nextTick(() => {
    const scrollRef = listOnlyRef.value.getScrollRef()
    scrollRef.update()
  })
}
const direction = ref('horizontal')
const fillRatio = ref(30)
</script>
<style>
  
</style>
```
:::
