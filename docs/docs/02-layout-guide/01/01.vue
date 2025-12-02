<template>
  <div style="border:solid 1px #ccc">
    <flex-box :item-num="flexConfig.length" :item-config="flexConfig" height="300px">
      <template #item-1>
        固定区域1
      </template>
      <template #item-2>
        <div style="border-top:solid 1px #ccc">
          固定区域2
        </div>
      </template>
      <template #item-3>
        <div style="border-top:solid 1px #ccc">
          弹性区域3
        </div>
      </template>
      <template #item-4>
        <div style="border-top:solid 1px #ccc">
          弹性区域4
        </div>
      </template>
    </flex-box>
  </div>
</template>
<script lang="ts" setup>
import ElementPro from '@cs/element-pro';
const { FlexBox } = ElementPro;
const { reactive } = Vue;
const flexConfig = reactive([
  {
    tag: 'item-1',
    isFixed: true,
    size: '50px',
  },
  {
    tag: 'item-2',
    isFixed: true,
    size: '50px',
  },
  {
    tag: 'item-3',
    isFixed: false,
    size: '',
  },
  {
    tag: 'item-4',
    isFixed: false,
    size: '',
  },
]);
</script>

<style scoped>

</style>