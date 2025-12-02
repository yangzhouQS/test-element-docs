##  基础用法

通过列的配置项属性`column-configs`渲染表格

`table-data`为表格数据

`tree-config` 中 `expandAll` 表示展开所有节点，`expandRowKeys`展开指定节点

:::demo  

```html
<template>
  <div style="height:400px;">
     <tree-table
      ref="tableRef"
      :table-data="tableData"
      :column-configs="tableConfig"
      :row-config="{keyField: 'id'}"
      :tree-config="{lazy: false, expandAll:false, expandRowKeys: [10050, 24300]}"
      >
    </tree-table>
  </div>
</template>
<script lang="ts" setup>
  const {ref, computed, onMounted, reactive} = Vue
  const tableData = ref([
    {
        "id": -1,
        "sortId": null,
        "parentId": null,
        "materialName": "空类别",
        "materialModel": "",
        "materialUnit": "",
        "applyQuantity": 55,
        "deliveryQuantity": 25,
        "signQuantity": 0,
        "planQuantity": 55
    },
    {
        "id": 1384781283766272,
        "sortId": null,
        "parentId": -1,
        "materialName": "常用材料旧  版添加",
        "materialModel": "",
        "materialUnit": "吨",
        "applyQuantity": 55,
        "deliveryQuantity": 25,
        "signQuantity": 0,
        "planQuantity": 55
    },
    {
        "id": 591145938833922,
        "sortId": 591145938833922,
        "parentId": null,
        "materialName": "盘条",
        "materialModel": "",
        "materialUnit": "",
        "applyQuantity": 81.67,
        "deliveryQuantity": 28.219,
        "signQuantity": 6.9,
        "planQuantity": 259.7
    },
    {
        "id": 753318169022976,
        "sortId": 591145938833922,
        "parentId": 591145938833922,
        "materialName": "12131313412",
        "materialModel": "121212",
        "materialUnit": "吨",
        "applyQuantity": 6.9,
        "deliveryQuantity": 0,
        "signQuantity": 6.9,
        "planQuantity": 6.9
    },
    {
        "id": 591154085098041,
        "sortId": 591145938833922,
        "parentId": 591145938833922,
        "materialName": "低合金钢盘条",
        "materialModel": "热轧 H08MnSi 6.5mm",
        "materialUnit": "吨",
        "applyQuantity": 74.77,
        "deliveryQuantity": 26,
        "signQuantity": 0,
        "planQuantity": 252.8
    },
    {
        "id": 591154085097984,
        "sortId": 591145938833922,
        "parentId": 591145938833922,
        "materialName": "盘条",
        "materialModel": "HPB300Φ14mm",
        "materialUnit": "吨",
        "applyQuantity": 0,
        "deliveryQuantity": 2.219,
        "signQuantity": 0,
        "planQuantity": 0
    },
    {
        "id": 591145938833923,
        "sortId": 591145938833923,
        "parentId": null,
        "materialName": "圆钢",
        "materialModel": "",
        "materialUnit": "",
        "applyQuantity": 995.209,
        "deliveryQuantity": 222.568,
        "signQuantity": 18.086,
        "planQuantity": 780.894
    },
    {
        "id": 771605671907840,
        "sortId": 591145938833923,
        "parentId": 591145938833923,
        "materialName": "222",
        "materialModel": " ",
        "materialUnit": "吨",
        "applyQuantity": 56.269,
        "deliveryQuantity": 15.072,
        "signQuantity": 18.086,
        "planQuantity": 56.269
    },
    {
        "id": 1308982960336896,
        "sortId": 591145938833923,
        "parentId": 591145938833923,
        "materialName": "切片",
        "materialModel": "01",
        "materialUnit": "吨",
        "applyQuantity": 0,
        "deliveryQuantity": 0.256,
        "signQuantity": 0,
        "planQuantity": 0
    },
    {
        "id": 591154085098107,
        "sortId": 591145938833923,
        "parentId": 591145938833923,
        "materialName": "圆钢",
        "materialModel": "热轧 Q235 6.5mm",
        "materialUnit": null,
        "applyQuantity": 0.08,
        "deliveryQuantity": 0,
        "signQuantity": 0,
        "planQuantity": 0.08
    },
    {
        "id": 591154085098107,
        "sortId": 591145938833923,
        "parentId": 591145938833923,
        "materialName": "圆钢",
        "materialModel": "热轧 Q235 6.5mm",
        "materialUnit": "吨",
        "applyQuantity": 524.2,
        "deliveryQuantity": 200.84,
        "signQuantity": 0,
        "planQuantity": 460.82
    },
    {
        "id": 934561952149504,
        "sortId": 591145938833923,
        "parentId": 591145938833923,
        "materialName": "圆钢test12345",
        "materialModel": "",
        "materialUnit": "吨",
        "applyQuantity": 398.26,
        "deliveryQuantity": 0,
        "signQuantity": 0,
        "planQuantity": 247.325
    },
    {
        "id": 1407356222902272,
        "sortId": 591145938833923,
        "parentId": 591145938833923,
        "materialName": "扁钢",
        "materialModel": "ppp",
        "materialUnit": "吨",
        "applyQuantity": 10,
        "deliveryQuantity": 0,
        "signQuantity": 0,
        "planQuantity": 10
    },
    {
        "id": 1516889461575680,
        "sortId": 591145938833923,
        "parentId": 591145938833923,
        "materialName": "是否添加成功",
        "materialModel": "SS",
        "materialUnit": "吨",
        "applyQuantity": 6.4,
        "deliveryQuantity": 6.4,
        "signQuantity": 0,
        "planQuantity": 6.4
    },
    {
        "id": 591145938833925,
        "sortId": 591145938833925,
        "parentId": null,
        "materialName": "螺纹钢",
        "materialModel": "",
        "materialUnit": "",
        "applyQuantity": 705.05,
        "deliveryQuantity": 200.95,
        "signQuantity": 0,
        "planQuantity": 687.05
    },
    {
        "id": 591154085098497,
        "sortId": 591145938833925,
        "parentId": 591145938833925,
        "materialName": "精轧螺纹钢",
        "materialModel": "PSB1080Φ40mm",
        "materialUnit": "吨",
        "applyQuantity": 705.05,
        "deliveryQuantity": 200.95,
        "signQuantity": 0,
        "planQuantity": 687.05
    },
    {
        "id": 591145938833926,
        "sortId": 591145938833926,
        "parentId": null,
        "materialName": "钢板",
        "materialModel": "",
        "materialUnit": "",
        "applyQuantity": 1826.512,
        "deliveryQuantity": 1010.776,
        "signQuantity": 0,
        "planQuantity": 1898.544
    },
    {
        "id": 591154085098690,
        "sortId": 591145938833926,
        "parentId": 591145938833926,
        "materialName": "钢板",
        "materialModel": "Q235 10mm",
        "materialUnit": "吨",
        "applyQuantity": 1202.166,
        "deliveryQuantity": 738.776,
        "signQuantity": 0,
        "planQuantity": 1220.994
    },
    {
        "id": 591154085098690,
        "sortId": 591145938833926,
        "parentId": 591145938833926,
        "materialName": "钢板",
        "materialModel": "Q235 10mm",
        "materialUnit": null,
        "applyQuantity": 341.55,
        "deliveryQuantity": 0,
        "signQuantity": 0,
        "planQuantity": 341.55
    },
    {
        "id": 591154085098691,
        "sortId": 591145938833926,
        "parentId": 591145938833926,
        "materialName": "钢板",
        "materialModel": "Q235 50mm",
        "materialUnit": "吨",
        "applyQuantity": 282.796,
        "deliveryQuantity": 272,
        "signQuantity": 0,
        "planQuantity": 336
    },
    {
        "id": 591145938833928,
        "sortId": 591145938833928,
        "parentId": null,
        "materialName": "工字钢",
        "materialModel": "",
        "materialUnit": "",
        "applyQuantity": 2,
        "deliveryQuantity": 2,
        "signQuantity": 0,
        "planQuantity": 2
    },
    {
        "id": 769710954082816,
        "sortId": 591145938833928,
        "parentId": 591145938833928,
        "materialName": "工字钢",
        "materialModel": "",
        "materialUnit": "吨",
        "applyQuantity": 2,
        "deliveryQuantity": 2,
        "signQuantity": 0,
        "planQuantity": 2
    },
    {
        "id": 591145938833937,
        "sortId": 591145938833937,
        "parentId": null,
        "materialName": "胶合板",
        "materialModel": "",
        "materialUnit": "",
        "applyQuantity": 2056.32,
        "deliveryQuantity": 0,
        "signQuantity": 0,
        "planQuantity": 5685.12
    },
    {
        "id": 1151172599975936,
        "sortId": 591145938833937,
        "parentId": 591145938833937,
        "materialName": "木材11",
        "materialModel": "",
        "materialUnit": "平方米",
        "applyQuantity": 2056.32,
        "deliveryQuantity": 0,
        "signQuantity": 0,
        "planQuantity": 5685.12
    },
    {
        "id": 591145938833940,
        "sortId": 591145938833940,
        "parentId": null,
        "materialName": "砂",
        "materialModel": "",
        "materialUnit": "",
        "applyQuantity": 95.256,
        "deliveryQuantity": 0.92,
        "signQuantity": 0,
        "planQuantity": 148.981
    },
    {
        "id": 771605943235072,
        "sortId": 591145938833940,
        "parentId": 591145938833940,
        "materialName": "22",
        "materialModel": " ",
        "materialUnit": "ww",
        "applyQuantity": 95.256,
        "deliveryQuantity": 0,
        "signQuantity": 0,
        "planQuantity": 148.176
    },
    {
        "id": 591154085111196,
        "sortId": 591145938833940,
        "parentId": 591145938833940,
        "materialName": "河砂",
        "materialModel": "特细1.5mm以下",
        "materialUnit": "吨",
        "applyQuantity": 0,
        "deliveryQuantity": 0.92,
        "signQuantity": 0,
        "planQuantity": 0.805
    },
    {
        "id": 591145938833941,
        "sortId": 591145938833941,
        "parentId": null,
        "materialName": "碎石",
        "materialModel": "",
        "materialUnit": "",
        "applyQuantity": 107.76,
        "deliveryQuantity": 0,
        "signQuantity": 0,
        "planQuantity": 2350
    },
    {
        "id": 1305245033779200,
        "sortId": 591145938833941,
        "parentId": 591145938833941,
        "materialName": "批量移动测试",
        "materialModel": "",
        "materialUnit": null,
        "applyQuantity": 4.6,
        "deliveryQuantity": 0,
        "signQuantity": 0,
        "planQuantity": 4.6
    },
    {
        "id": 1305245033779200,
        "sortId": 591145938833941,
        "parentId": 591145938833941,
        "materialName": "批量移动测试",
        "materialModel": "",
        "materialUnit": "吨",
        "applyQuantity": 103.16,
        "deliveryQuantity": 0,
        "signQuantity": 0,
        "planQuantity": 2345.4
    },
    {
        "id": 591145938833942,
        "sortId": 591145938833942,
        "parentId": null,
        "materialName": "片石",
        "materialModel": "",
        "materialUnit": "",
        "applyQuantity": 14.64,
        "deliveryQuantity": 7.32,
        "signQuantity": 14.64,
        "planQuantity": 14.64
    },
    {
        "id": 1151157265567744,
        "sortId": 591145938833942,
        "parentId": 591145938833942,
        "materialName": "片石5",
        "materialModel": "",
        "materialUnit": "吨",
        "applyQuantity": 14.64,
        "deliveryQuantity": 7.32,
        "signQuantity": 14.64,
        "planQuantity": 14.64
    },
    {
        "id": 591145938833957,
        "sortId": 591145938833957,
        "parentId": null,
        "materialName": "减水剂",
        "materialModel": "",
        "materialUnit": "",
        "applyQuantity": 119.68,
        "deliveryQuantity": 0,
        "signQuantity": 0,
        "planQuantity": 119.68
    },
    {
        "id": 591154085111439,
        "sortId": 591145938833957,
        "parentId": 591145938833957,
        "materialName": "减水剂",
        "materialModel": "PCA-I",
        "materialUnit": "吨",
        "applyQuantity": 119.68,
        "deliveryQuantity": 0,
        "signQuantity": 0,
        "planQuantity": 119.68
    },
    {
        "id": 591145938833958,
        "sortId": 591145938833958,
        "parentId": null,
        "materialName": "速凝剂",
        "materialModel": "",
        "materialUnit": "",
        "applyQuantity": 0,
        "deliveryQuantity": 0.792,
        "signQuantity": 0,
        "planQuantity": 0.594
    },
    {
        "id": 591154085111514,
        "sortId": 591145938833958,
        "parentId": 591145938833958,
        "materialName": "混凝土速凝剂",
        "materialModel": "粉状 合格品",
        "materialUnit": "吨",
        "applyQuantity": 0,
        "deliveryQuantity": 0.792,
        "signQuantity": 0,
        "planQuantity": 0.594
    },
    {
        "id": 591145938833971,
        "sortId": 591145938833971,
        "parentId": null,
        "materialName": "自拌混凝土",
        "materialModel": "",
        "materialUnit": "",
        "applyQuantity": 1848,
        "deliveryQuantity": 1848,
        "signQuantity": 0,
        "planQuantity": 1848
    },
    {
        "id": 591154085111901,
        "sortId": 591145938833971,
        "parentId": 591145938833971,
        "materialName": "自拌混凝土",
        "materialModel": "A C30 P.O",
        "materialUnit": "立方米",
        "applyQuantity": 1848,
        "deliveryQuantity": 1848,
        "signQuantity": 0,
        "planQuantity": 1848
    },
    {
        "id": 591145938834393,
        "sortId": 591145938834393,
        "parentId": null,
        "materialName": "其它通用周转材料",
        "materialModel": "",
        "materialUnit": "",
        "applyQuantity": 586.55,
        "deliveryQuantity": 66.5,
        "signQuantity": 31.5,
        "planQuantity": 937.55
    },
    {
        "id": 1566482933002240,
        "sortId": 591145938834393,
        "parentId": 591145938834393,
        "materialName": "钢筋鹏",
        "materialModel": "",
        "materialUnit": "平方米",
        "applyQuantity": 586.55,
        "deliveryQuantity": 66.5,
        "signQuantity": 31.5,
        "planQuantity": 937.55
    },
    {
        "id": 689498401944064,
        "sortId": 689498401944064,
        "parentId": null,
        "materialName": "其他料",
        "materialModel": "",
        "materialUnit": "",
        "applyQuantity": 63.42,
        "deliveryQuantity": 26.46,
        "signQuantity": 0,
        "planQuantity": 63.42
    },
    {
        "id": 1414302755229696,
        "sortId": 689498401944064,
        "parentId": 689498401944064,
        "materialName": "水桶",
        "materialModel": "5L",
        "materialUnit": "个",
        "applyQuantity": 44.94,
        "deliveryQuantity": 26.46,
        "signQuantity": 0,
        "planQuantity": 44.94
    },
    {
        "id": 1414302755229696,
        "sortId": 689498401944064,
        "parentId": 689498401944064,
        "materialName": "水桶",
        "materialModel": "5L",
        "materialUnit": null,
        "applyQuantity": 18.48,
        "deliveryQuantity": 0,
        "signQuantity": 0,
        "planQuantity": 18.48
    },
    {
        "id": 700406048690688,
        "sortId": 700406048690688,
        "parentId": null,
        "materialName": "脚手架",
        "materialModel": "",
        "materialUnit": "",
        "applyQuantity": 12,
        "deliveryQuantity": 12,
        "signQuantity": 0,
        "planQuantity": 12
    },
    {
        "id": 700407155577344,
        "sortId": 700406048690688,
        "parentId": 700406048690688,
        "materialName": "钢管",
        "materialModel": "中型",
        "materialUnit": "吨",
        "applyQuantity": 12,
        "deliveryQuantity": 12,
        "signQuantity": 0,
        "planQuantity": 12
    },
    {
        "id": 700406237696512,
        "sortId": 700406237696512,
        "parentId": null,
        "materialName": "模板",
        "materialModel": "",
        "materialUnit": "",
        "applyQuantity": 430.66,
        "deliveryQuantity": 104.98,
        "signQuantity": 0,
        "planQuantity": 441.54
    },
    {
        "id": 1566484458180608,
        "sortId": 700406237696512,
        "parentId": 700406237696512,
        "materialName": "木模板",
        "materialModel": "1.83*0.95*1.2",
        "materialUnit": null,
        "applyQuantity": 44,
        "deliveryQuantity": 0,
        "signQuantity": 0,
        "planQuantity": 44
    },
    {
        "id": 1566484458180608,
        "sortId": 700406237696512,
        "parentId": 700406237696512,
        "materialName": "木模板",
        "materialModel": "1.83*0.95*1.2",
        "materialUnit": "张",
        "applyQuantity": 386.66,
        "deliveryQuantity": 104.98,
        "signQuantity": 0,
        "planQuantity": 397.54
    },
    {
        "id": 725199000096768,
        "sortId": 725199000096768,
        "parentId": null,
        "materialName": "光圆钢筋",
        "materialModel": "",
        "materialUnit": "",
        "applyQuantity": 657.44,
        "deliveryQuantity": 105.7105,
        "signQuantity": 0,
        "planQuantity": 666.44
    },
    {
        "id": 591154085097988,
        "sortId": 725199000096768,
        "parentId": 725199000096768,
        "materialName": "盘条",
        "materialModel": "HPB300Φ8mm",
        "materialUnit": null,
        "applyQuantity": 3.68,
        "deliveryQuantity": 0,
        "signQuantity": 0,
        "planQuantity": 3.68
    },
    {
        "id": 591154085097988,
        "sortId": 725199000096768,
        "parentId": 725199000096768,
        "materialName": "盘条",
        "materialModel": "HPB300Φ8mm",
        "materialUnit": "吨",
        "applyQuantity": 11.36,
        "deliveryQuantity": 7.68,
        "signQuantity": 0,
        "planQuantity": 11.36
    },
    {
        "id": 591154085097990,
        "sortId": 725199000096768,
        "parentId": 725199000096768,
        "materialName": "非合金钢盘条",
        "materialModel": "热轧 H08A 5.5mm",
        "materialUnit": "吨",
        "applyQuantity": 642.4,
        "deliveryQuantity": 98.0305,
        "signQuantity": 0,
        "planQuantity": 651.4
    },
    {
        "id": 725199000195072,
        "sortId": 725199000195072,
        "parentId": null,
        "materialName": "H型钢",
        "materialModel": "",
        "materialUnit": "",
        "applyQuantity": 173738.8,
        "deliveryQuantity": 275,
        "signQuantity": 0,
        "planQuantity": 364608.3
    },
    {
        "id": 591154085097987,
        "sortId": 725199000195072,
        "parentId": 725199000195072,
        "materialName": "盘条",
        "materialModel": "HPB300Φ6mm",
        "materialUnit": "吨",
        "applyQuantity": 173738.8,
        "deliveryQuantity": 275,
        "signQuantity": 0,
        "planQuantity": 364608.3
    },
    {
        "id": 771828479693312,
        "sortId": 771828479693312,
        "parentId": null,
        "materialName": "无需审批",
        "materialModel": "",
        "materialUnit": "",
        "applyQuantity": 1073.94,
        "deliveryQuantity": 255.348,
        "signQuantity": 235.38,
        "planQuantity": 1533.14
    },
    {
        "id": 1409988045213696,
        "sortId": 771828479693312,
        "parentId": 771828479693312,
        "materialName": "1125m02",
        "materialModel": "1125m02",
        "materialUnit": "吨",
        "applyQuantity": 1061.46,
        "deliveryQuantity": 234.9,
        "signQuantity": 234.9,
        "planQuantity": 1520.66
    },
    {
        "id": 1390487099961344,
        "sortId": 771828479693312,
        "parentId": 771828479693312,
        "materialName": "1286688",
        "materialModel": "ggxh",
        "materialUnit": "吨",
        "applyQuantity": 0,
        "deliveryQuantity": 6.468,
        "signQuantity": 0,
        "planQuantity": 0
    },
    {
        "id": 1410197815488512,
        "sortId": 771828479693312,
        "parentId": 771828479693312,
        "materialName": "m2502",
        "materialModel": "m2502g",
        "materialUnit": "吨",
        "applyQuantity": 12,
        "deliveryQuantity": 12,
        "signQuantity": 0,
        "planQuantity": 12
    },
    {
        "id": 922486492828160,
        "sortId": 771828479693312,
        "parentId": 771828479693312,
        "materialName": "人形道板",
        "materialModel": "98CM*35CM*8MM A3",
        "materialUnit": "吨",
        "applyQuantity": 0.48,
        "deliveryQuantity": 0,
        "signQuantity": 0.48,
        "planQuantity": 0.48
    },
    {
        "id": 1625918036602880,
        "sortId": 771828479693312,
        "parentId": 771828479693312,
        "materialName": "调拨测试",
        "materialModel": "",
        "materialUnit": "樘",
        "applyQuantity": 0,
        "deliveryQuantity": 1.98,
        "signQuantity": 0,
        "planQuantity": 0
    },
    {
        "id": 843394168926257,
        "sortId": 843394168926257,
        "parentId": null,
        "materialName": "非合金钢盘条",
        "materialModel": "",
        "materialUnit": "",
        "applyQuantity": 40148.873,
        "deliveryQuantity": 14634.301,
        "signQuantity": 0,
        "planQuantity": 39320.715
    },
    {
        "id": 591154085097986,
        "sortId": 843394168926257,
        "parentId": 843394168926257,
        "materialName": "盘条",
        "materialModel": "HPB300Φ6.5mm",
        "materialUnit": "吨",
        "applyQuantity": 55,
        "deliveryQuantity": 45,
        "signQuantity": 0,
        "planQuantity": 45
    },
    {
        "id": 591154085097992,
        "sortId": 843394168926257,
        "parentId": 843394168926257,
        "materialName": "非合金钢盘条",
        "materialModel": "热轧 H08A 6.5mm",
        "materialUnit": "吨",
        "applyQuantity": 39806.633,
        "deliveryQuantity": 14499.581,
        "signQuantity": 0,
        "planQuantity": 38904.715
    },
    {
        "id": 591154085097993,
        "sortId": 843394168926257,
        "parentId": 843394168926257,
        "materialName": "非合金钢盘条",
        "materialModel": "热轧 H08A 7mm",
        "materialUnit": "吨",
        "applyQuantity": 287.24,
        "deliveryQuantity": 89.72,
        "signQuantity": 0,
        "planQuantity": 371
    },
    {
        "id": 929591987671040,
        "sortId": 929591987671040,
        "parentId": null,
        "materialName": "钢材",
        "materialModel": "",
        "materialUnit": "",
        "applyQuantity": 360,
        "deliveryQuantity": 0,
        "signQuantity": 0,
        "planQuantity": 560
    },
    {
        "id": 1576058969617408,
        "sortId": 929591987671040,
        "parentId": 929591987671040,
        "materialName": "卡控逻辑",
        "materialModel": "",
        "materialUnit": "千克/千米",
        "applyQuantity": 360,
        "deliveryQuantity": 0,
        "signQuantity": 0,
        "planQuantity": 560
    },
    {
        "id": 1288404033819136,
        "sortId": 1288404033819136,
        "parentId": null,
        "materialName": "qwww",
        "materialModel": "",
        "materialUnit": "",
        "applyQuantity": 0,
        "deliveryQuantity": 1.26,
        "signQuantity": 0,
        "planQuantity": 0
    },
    {
        "id": 1380468873335296,
        "sortId": 1288404033819136,
        "parentId": 1288404033819136,
        "materialName": "7号材料",
        "materialModel": "77规格型号",
        "materialUnit": "吨",
        "applyQuantity": 0,
        "deliveryQuantity": 1.26,
        "signQuantity": 0,
        "planQuantity": 0
    },
    {
        "id": 1303188500860928,
        "sortId": 1303188500860928,
        "parentId": null,
        "materialName": "测试类别0627",
        "materialModel": "",
        "materialUnit": "",
        "applyQuantity": 32,
        "deliveryQuantity": 4,
        "signQuantity": 0,
        "planQuantity": 32
    },
    {
        "id": 1390492697636864,
        "sortId": 1303188500860928,
        "parentId": 1303188500860928,
        "materialName": "1028PC材料 1001",
        "materialModel": "ggxh1001",
        "materialUnit": "千米",
        "applyQuantity": 32,
        "deliveryQuantity": 4,
        "signQuantity": 0,
        "planQuantity": 32
    },
    {
        "id": 1464556534575196,
        "sortId": 1464556534575196,
        "parentId": null,
        "materialName": "其他",
        "materialModel": "",
        "materialUnit": "",
        "applyQuantity": 299.568,
        "deliveryQuantity": 115.05,
        "signQuantity": 0,
        "planQuantity": 800.3
    },
    {
        "id": 1464556558831710,
        "sortId": 1464556534575196,
        "parentId": 1464556534575196,
        "materialName": "z",
        "materialModel": "z",
        "materialUnit": "",
        "applyQuantity": 299.568,
        "deliveryQuantity": 115.05,
        "signQuantity": 0,
        "planQuantity": 800.3
    },
    {
        "id": 1794470206542848,
        "sortId": 1794470206542848,
        "parentId": null,
        "materialName": "防水板",
        "materialModel": "",
        "materialUnit": "",
        "applyQuantity": 14.519,
        "deliveryQuantity": 14.52,
        "signQuantity": 14.52,
        "planQuantity": 14.519
    },
    {
        "id": 1794516744262656,
        "sortId": 1794470206542848,
        "parentId": 1794470206542848,
        "materialName": "隧道二衬防水板",
        "materialModel": "",
        "materialUnit": "平方米",
        "applyQuantity": 14.519,
        "deliveryQuantity": 14.52,
        "signQuantity": 14.52,
        "planQuantity": 14.519
    }
])
  const tableConfig = computed(() => {
    return [
        { attr: { prop: "code", type: 'index', label: "序号", treeNode: true } },
        { attr: { prop: "name", label: "Name", width: 120 } },
        { attr: { prop: "size", label: "Size", width: 120 } },
        { attr: { prop: "type", label: "Type", width: 120   } },
        { attr: { prop: "date", label: "Date", width: 120  } }
      ]
  })
  
</script>
```
:::

