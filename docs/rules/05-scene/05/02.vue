<template>
  <el-tooltip class="box-item" effect="dark" content="查看明细" placement="top">
    <el-button type="info" circle size="small" :icon="ZoomIn" plain></el-button>
  </el-tooltip>
  <el-tooltip class="box-item" effect="dark" content="打印" placement="top">
    <el-button type="success" circle size="small" plain><i class="cs-common dayin" style="font-size:12px"></i>
    </el-button>
  </el-tooltip>
  <el-tooltip class="box-item" effect="dark" content="导出" placement="top">
    <el-button type="success" circle size="small" plain><i class="cs-common excel" style="font-size:12px"></i>
    </el-button>
  </el-tooltip>
</template>

<script setup lang="ts">
import { ElButton, ElTooltip } from 'element-plus';
import { Delete, Download, Upload, ZoomIn } from '@element-plus/icons-vue';
</script>


<style scoped>

</style>