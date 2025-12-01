<template>
  <el-button type="primary" :icon="Plus">主功能</el-button>
  <el-button type="primary" plain :icon="Edit">次功能</el-button>
  <el-button type="warning" :icon="Edit">主功能</el-button>
  <el-button type="warning" plain :icon="Edit">次功能</el-button>
</template>
<script setup lang="ts">
import { ElButton } from 'element-plus';
import {
  Plus,
  Edit,
  Delete,
  Search,
  Paperclip,
  Setting,
  Printer,
  Coordinate,
  Upload,
  Download,
  Warning,
  ArrowDown,
  Remove,
  ZoomIn,
  Refresh,
  CircleCheck,
  InfoFilled,
} from '@element-plus/icons-vue';

const { ref } = Vue;
const btnVisible = ref(false);
</script>