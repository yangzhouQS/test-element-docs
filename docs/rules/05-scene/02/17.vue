<template>
  <div class="btn-items">
    打印：
    <el-tooltip class="box-item" effect="dark" content="打印" placement="top">
      <el-button type="success" circle size="small" plain
                 @click="_printExport('print')"><i class="cs-common dayin" style="font-size:12px"
      ></i></el-button>
    </el-tooltip>
  </div>
  <div class="btn-items">
    导出：
    <el-tooltip class="box-item" effect="dark" content="导出" placement="top">
      <el-button type="success" circle size="small" plain @click="_printExport('export')">
        <i class="cs-common excel" style="font-size:12px"></i>
      </el-button>
    </el-tooltip>
  </div>

  <div class="btn-items">
    详情：
    <el-tooltip
        effect="dark"
        content="查看信息"
        placement="top"
    >
      <el-button type="info" circle size="small" plain><i class="cs-common xiangqing" style="font-size:12px"></i>
      </el-button>
    </el-tooltip>
  </div>
  <div class="btn-items">
    审批流：
    <el-tooltip
        effect="dark"
        content="查看信息"
        placement="top"
    >
      <el-button type="info" circle size="small" plain><i class="cs-common shenpiliu" style="font-size:12px"></i>
      </el-button>
    </el-tooltip>
  </div>
</template>
<script setup lang="ts">
import { ElButton, ElTooltip } from 'element-plus';

const _printExport = (type) => {
  console.log('click type:', type);
};
</script>


<style scoped>
.btn-items {
  padding-bottom: 10px
}
</style>