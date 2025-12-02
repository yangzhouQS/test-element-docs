<template>
  <div class="btn-items">
    新增：
    <el-button type="primary" :icon="Plus">新增
    </el-button>
  </div>
  <div class="btn-items">
    编辑：
    <el-button type="primary" :icon="Edit">编辑</el-button>
  </div>
  <div class="btn-items">
    保存：
    <el-button type="primary"><i class="cs-common baocun" style="font-size:14px"></i>&nbsp;保存</el-button>
  </div>
  <div class="btn-items">
    提交：
    <el-button type="primary"><i class="cs-common tijiao" style="font-size:14px"></i>&nbsp;提交</el-button>
  </div>
  <div class="btn-items">
    选材：
    <el-button type="primary"><i class="cs-common multi-add" style="font-size:14px"></i>&nbsp;合同选材</el-button>
  </div>
  <div class="btn-items">
    查询：
    <el-button type="info" :icon="Search">查询</el-button>
  </div>
  <div class="btn-items">
    设置：
    <el-button type="info" :icon="Setting">设置</el-button>
  </div>
  <div class="btn-items">
    打印：
    <el-button type="success"><i class="cs-common dayin"></i>&nbsp;打印</el-button>
  </div>
  <div class="btn-items">
    导出：
    <el-button type="success"><i class="cs-common excel" style="font-size:14px"></i>&nbsp;导出</el-button>
  </div>
  <div class="btn-items">
    撤销提交：
    <el-button type="warning"><i class="cs-common chexiao" style="font-size:14px"></i>&nbsp;撤销提交</el-button>
  </div>
  <div class="btn-items">
    删除：
    <el-popover :visible="btnVisible" placement="bottom" :width="160" trigger="click">
      <p>删除以后无法恢复，是否继续?</p>
      <div style="text-align: right; margin: 0">
        <el-button size="small" text
                   @click="btnVisible = false">取消
        </el-button>
        <el-button size="small" type="primary">确认</el-button>
      </div>
      <template #reference>
        < el - button type = "danger" :icon = "Delete" @click= "btnVisible=true" > 删除 < /el-button>
      </template>
    </el-popover>
  </div>
  <div class="btn-items">
    上传附件：
    <el-button type="primary" :icon="Upload">上传附件</el-button>
  </div>
  <div class="btn-items">
    下载附件：
    <el-button type="primary" :icon="Download">下载附件</el-button>
  </div>
  <div class="btn-items">
    重置：
    <el-button type="warning"
               :icon="Refresh">重置
    </el-button>
  </div>
  <div class="btn-items">
    启用：
    <el-button type="primary"><i class="cs-common qiyong" style="font-size:14px"></i>&nbsp; 启用</el-button>
  </div>
  <div class="btn-items">
    停用：
    <el-button type="warning"><i class="cs-common tingyong" style="font-size:14px"></i>&nbsp; 停用</el-button>
  </div>
</template>

<script setup lang="ts">
import { ElButton } from 'element-plus';
import {ref} from 'vue';
import {
  Download, Edit, Plus, Refresh, Search, Setting, Upload,
} from '@element-plus/icons-vue';

const btnVisible = ref(false);

</script>

<style scoped>
.btn-items {
  padding-bottom: 10px
}
</style>