##  基础用法

初始化或者追加数据时配置`map-config`属性，然后使用`generateData`方法来映射数据，配置`not-repeat-filed`来判断字段重复

`column-configs`设置列信息，`scopedSlot`渲染自定义列

  

```html
<template>
  <div style="padding-bottom:10px">
    <el-input-number v-model="length"></el-input-number>
    <el-button @click="initData(length)">追加{{length}}条数据</el-button>
  </div>
  <div style="height:500px;overflow: hidden;">
    <table-edit-v2
      ref="tableEditRef"
      :table-data="tableData"
      :column-configs="tableConfig"
      :map-config="dataMap"
      :not-repeat-filed="'materialId'"
      >
      <template #materialName="{row}">
        <el-input v-model="row.materialName" size="small"></el-input>
      </template>
      <template #column2="{row}">
        <el-input v-model="row.column2" size="small"></el-input>
      </template>
      <template #column3="{row}">
        <el-select v-model="row.column3" style="width: 100%" size="small">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </template>
      <template #column5="{row}">
        <el-tag type="primary">{{row.column5 || '空'}}</el-tag>
      </template>
      <template #column6="{row}">
        <el-select v-model="row.column6" style="width: 100%" size="small">
          <el-option
            v-for="item in [{ value: '西安', label: '西安' },
                            { value: '咸阳', label: '咸阳' }]"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </template>
    </table-edit-v2>
  </div>
</template>
<script lang="tsx" setup>
const { computed, ref, reactive } = Vue
const length = ref(20)
const tableEditRef = ref()
const tableData = ref([])
const options = [
  {
    value: '选项一',
    label: '选项一',
  },
  {
    value: '选项二',
    label: '选项二',
  }
]
const tableConfig = computed(() => {
  return [
    { attr: { prop: 'code', type: 'index', label: '序号', width: 80, align: 'center' } },
    { attr: { prop: 'materialName', label: 'materialName', width: 120, scopedSlot: 'materialName' } },
    { attr: { prop: 'materialModel', label: 'materialModel', width: 120, scopedSlot: 'materialModel' } },
    { attr: { prop: 'materialUnit', label: 'materialUnit', width: 120, scopedSlot: 'materialUnit' } },
    { attr: { prop: 'quantity', label: 'quantity', width: 120, scopedSlot: 'quantity' } },
    { attr: { prop: 'taxRate', label: 'taxRate', width: 120, scopedSlot: 'taxRate' } },
    { attr: { prop: 'taxFreePrice', label: 'taxFreePrice', width: 120, scopedSlot: 'taxFreePrice' } },
  ];
});
const dataMap = {
  dataSource1: [
    { prop: 'materialId', isReplace: true, defaultVal: '', selprop: 'id' },
    { prop: 'materialName', isReplace: true, defaultVal: '', selprop: 'materialName' },
    { prop: 'materialModel', isReplace: true, defaultVal: '', selprop: 'materialModel' },
    { prop: 'materialUnit', isReplace: true, defaultVal: '', selprop: 'materialUnit' },
    { prop: 'quantity', isReplace: false, defaultVal: 0, selprop: '' },
    { prop: 'taxRate', isReplace: false, defaultVal: 13, selprop: 'taxRate' },
    { prop: 'taxFreePrice', isReplace: false, defaultVal: 0, selprop: 'taxFreePrice' },
    { prop: 'taxFreeSum', isReplace: false, defaultVal: 0, selprop: 'taxFreeSum' },
    { prop: 'taxIncludedPrice', isReplace: false, defaultVal: 0, selprop: 'taxIncludedPrice' },
    { prop: 'taxIncludedSum', isReplace: false, defaultVal: 0, selprop: 'taxIncludedSum' },
    { prop: 'taxAmount', isReplace: false, defaultVal: 0, selprop: 'taxAmount' },
    { prop: 'bookPrice', isReplace: false, defaultVal: 0, selprop: 'bookPrice' },
    { prop: 'bookSum', isReplace: false, defaultVal: 0, selprop: 'bookSum' },
    { prop: 'difference', isReplace: false, defaultVal: 0, selprop: 'difference' },
    { prop: 'manufacturer', isReplace: false, defaultVal: '', selprop: 'manufacturer' },
    { prop: 'batchNo', isReplace: false, defaultVal: '', selprop: 'batchNo' },
    { prop: 'storageRoom', isReplace: false, defaultVal: '', selprop: 'storageRoom' },
    { prop: 'itemRemark', isReplace: false, defaultVal: '', selprop: 'itemRemark' }
  ]
}
let id = 0
const initData = (length = 10) => {
  const rows = [{"id":606706095171811,"remark":null,"orgId":736233131388928,"materialCode":"0001","materialName":"河砂","materialModel":"粗 平均粒径不小于0.5 mm","materialUnit":"吨","firstConversionRate":1,"firstAuxiliaryUnit":"吨","classId":606705025028251,"isWeight":false,"oriMaterialId":null,"oriClassId":null,"oriOrgId":null,"classFullId":"606705025028096|606705025028249|606705025028250|606705025028251","classFullName":"主要材料|地材|砂子|河砂","useCount":21,"selectSortCode":3},{"id":652099031658496,"remark":null,"orgId":736233131388928,"materialCode":"001","materialName":"钢模板","materialModel":"","materialUnit":"m2","firstConversionRate":1,"firstAuxiliaryUnit":"m2","classId":611735397036879,"isWeight":false,"oriMaterialId":null,"oriClassId":null,"oriOrgId":null,"classFullId":"611735397036876|611735397036877|611735397036879","classFullName":"周转材料|A类|平面模板","useCount":22,"selectSortCode":2},{"id":606706095157248,"remark":null,"orgId":736233131388928,"materialCode":"0001","materialName":"盘条","materialModel":"HPB300Φ14mm","materialUnit":"AAA","firstConversionRate":1,"firstAuxiliaryUnit":"AAA","classId":null,"isWeight":false,"oriMaterialId":null,"oriClassId":null,"oriOrgId":null,"classFullId":null,"classFullName":null,"useCount":42,"selectSortCode":1}]
  tableData.value = tableEditRef.value.generateData('dataSource1', rows)
  console.log(tableData.value)
}
</script>

```
