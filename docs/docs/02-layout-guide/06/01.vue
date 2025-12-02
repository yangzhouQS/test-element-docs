<template>
  <filter-item label="材料名称" :label-width="'80px'">
    <el-input v-model="input" placeholder="请输入内容"></el-input>
  </filter-item>
  <filter-item label="材料名称材料名称材料名称" :label-width="'80px'">
    <el-input v-model="input" placeholder="请输入内容"></el-input>
  </filter-item>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import ElementPro from '@cs/element-pro';
import { ElInput } from 'element-plus';

const { FilterItem } = ElementPro;
const input = ref('');
</script>
