<template>
  <Navigation :routers="navData"></Navigation>
</template>
<script lang="ts" setup>
import ElementPro from '@cs/element-pro';
import { ElBreadcrumb, ElBreadcrumbItem } from 'element-plus';
import { ref } from 'vue';

const { Navigation } = ElementPro;
console.log(Navigation);

const navData = ref([
  { title: '基础数据' },
  { title: '收料登记', to: '/navigation' },
  { title: '单据详情' },
]);

</script>