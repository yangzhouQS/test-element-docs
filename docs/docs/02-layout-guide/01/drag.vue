<template>
  <div style="background: var(--el-bg-color-page);">
    <flex-box :is-row="true" height="600px" :item-num="flexConfig.length" :item-config="flexConfig">
      <template #item-1>
        <panel title="固定区域" :show-header="true" :padding-size="'base'">右侧 显示拖动按钮
          默认折叠
        </panel>
      </template>
      <template #item-2>
        <panel title="弹性区域" :show-header="true" :padding-size="'base'">弹性挤压区域</panel>
      </template>
      <template #item-3>
        <panel title="固定区域" :show-header="true" :padding-size="'base'">左侧显示拖动按钮</panel>
      </template>
      <template #item-4>
        <panel title="固定区域" :show-header="true" :padding-size="'base'">左侧显示拖动按钮</panel>
      </template>
    </flex-box>
  </div>
</template>
<script setup lang="ts">
import ElementPro from '@cs/element-pro';
import { ref } from 'vue';
const { FlexBox, Panel } = ElementPro;

const flexConfig = [
  {
    tag: 'item-1',
    isFixed: true,
    showDragButton: true,
    dragButtonPosition: 'right',
    size: '',
    paddingSize: 'large',
    isFold: true,
    expandSize: '200px',
    clearPadding: [],
  },
  {
    tag: 'item-2',
    isFixed: false,
    size: '',
    paddingSize: 'large',
    clearPadding: [ 'left', 'right' ],
  },
  {
    tag: 'item-3',
    isFixed: true,
    dragButtonPosition: 'left',
    showDragButton: true,
    size: '100px',
    paddingSize: 'large',
    clearPadding: [ 'right' ],
    isHidden: false,
  },
  {
    tag: 'item-4',
    isFixed: true,
    dragButtonPosition: 'left',
    showDragButton: true,
    size: '100px',
    paddingSize: 'large',
    clearPadding: [],
  },
];

</script>

<style scoped>

</style>