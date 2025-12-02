<template>
  <div style="border:solid 1px #ccc">
    <flex-box :is-row="true" :item-num="4" :item-config="flexConfig" height="300px">
      <template #item-1>
        <div style="height:100%;background:var(--el-fill-color-dark)">
          固定区域1
        </div>
      </template>
      <template #item-2>
        <div style="height:100%;background:var(--el-fill-color-dark)">
          固定区域2
        </div>
      </template>
      <template #item-3>
        <div style="height:100%;background:var(--el-fill-color-dark)">
          弹性区域3
        </div>
      </template>
      <template #item-4>
        <div style="height:100%; background:var(--el-fill-color-dark)">
          弹性区域4
        </div>
      </template>
    </flex-box>
  </div>
</template>
<script lang="ts" setup>
import ElementPro from '@cs/element-pro';

const { FlexBox } = ElementPro;

const flexConfig = [
  {
    tag: 'item-1',
    isFixed: true,
    size: '100px',
    paddingSize: 'large',
    clearPadding: [ 'right' ],
  },
  {
    tag: 'item-2',
    isFixed: true,
    size: '100px',
    paddingSize: 'large',
    clearPadding: [ 'right' ],
  },
  {
    tag: 'item-3',
    isFixed: false,
    size: '',
    paddingSize: 'large',
    clearPadding: [ 'right' ],
  },
  {
    tag: 'item-4',
    isFixed: false,
    size: '',
    paddingSize: 'large',
  },
];
</script>