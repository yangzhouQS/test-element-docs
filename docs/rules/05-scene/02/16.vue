<template>
  <div class="btn-items">编辑： <el-button link type="primary" :icon="Edit">编辑</el-button></div>
  <div class="btn-items">删除： <el-button link type="danger" :icon="Delete">删除</el-button></div>
  <div class="btn-items">上传附件： <el-button type="primary" link :icon="Upload" >上传附件</el-button></div>
  <div class="btn-items">下载附件： <el-button type="success" link :icon="Download" >下载附件</el-button></div>
  <div class="btn-items">关闭：<el-button link type="primary">关闭</el-button></div>
  <div class="btn-items">返回：<el-button link type="primary">返回</el-button></div>
  <div class="btn-items">重置：<el-button link type="warning">重置</el-button></div>
  <div class="btn-items">取消：<el-button link type="primary">取消</el-button></div>
  <div class="btn-items">
    说明信息：
    <el-tooltip effect="dark" content="查看信息" placement="top">
      <el-button type="info" link plain size="small" style="height: 100%" :icon="InfoFilled"></el-button>
    </el-tooltip>
  </div>
</template>
<script setup lang="ts">
import { ElButton } from 'element-plus';
import { Delete, Download, Edit, InfoFilled, Upload } from '@element-plus/icons-vue';
</script>



<style scoped>
.btn-items {
  padding-bottom: 10px
}
</style>