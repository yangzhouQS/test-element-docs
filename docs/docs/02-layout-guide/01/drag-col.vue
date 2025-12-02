<template>
  <div style="background: var(--el-bg-color-page);">
    <flex-box :is-row="false" height="600px" :item-num="flexConfig9.length" :item-config="flexConfig9">
      <template #item-1>
        <panel title="固定区域" :show-header="true" :padding-size="'base'">下方显示拖动按钮</panel>
      </template>
      <template #item-2>
        <panel title="弹性区域" :show-header="true" :padding-size="'base'">弹性挤压区域</panel>
      </template>
      <template #item-3>
        <panel title="固定区域" :show-header="true" :padding-size="'base'">上方显示拖动按钮</panel>
      </template>
    </flex-box>
  </div>
</template>

<script setup lang="ts">
import ElementPro from '@cs/element-pro';

const { FlexBox, Panel } = ElementPro;

const flexConfig9 = [
  {
    tag: 'item-1',
    isFixed: true,
    showDragButton: true,
    dragButtonPosition: 'bottom',
    size: '',
    paddingSize: 'large',
    clearPadding: [],
  },
  {
    tag: 'item-2',
    isFixed: false,
    size: '',
    paddingSize: 'large',
    clearPadding: [ 'top', 'bottom' ],
  },
  {
    tag: 'item-3',
    isFixed: true,
    dragButtonPosition: 'top',
    showDragButton: true,
    size: '100px',
    paddingSize: 'large',
    clearPadding: [],
  },
];
</script>