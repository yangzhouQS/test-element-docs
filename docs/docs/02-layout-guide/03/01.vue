<template>
  <fold-divider v-model="isFold" title="禁用折叠功能" disable-fold></fold-divider>
  <div v-if="!isFold" style="height:100px;background:var(--el-color-primary-light-9)">区域1</div>
  <fold-divider v-model="isFold1" title="默认折叠"></fold-divider>
  <div v-if="!isFold1" style="height:100px;background:var(--el-color-primary-light-9)">区域2</div>
  <fold-divider v-model="isFold2" title="默认展开" default-expand></fold-divider>
  <div v-if="!isFold2" style="height:100px;background:var(--el-color-primary-light-9)">区域3</div>
</template>
<script lang="ts" setup>
import { ElDivider } from 'element-plus';
import ElementPro from '@cs/element-pro';

const { FoldDivider } = ElementPro;
import { ref } from 'vue';

const isFold = ref(false);
const isFold1 = ref(false);
const isFold2 = ref(false);
</script>