<template>
  <tool-bar :show-more="true" :divider="true" :padding-size="paddingSize" border tool-max-width="160px">
    <template v-slot:tool>
      <el-button type="info" :icon="Search" plain>查询</el-button>
      <el-button type="success" plain><i class="cs-common excel"></i>&nbsp;导 出</el-button>
    </template>
    <template v-slot:filter>
      <el-col v-for="i in 10" :key="i" :xs="24" :sm="12" :md="8" :lg="6" :xl="4">
        <filter-item label="材料名称" :label-width="'70px'">
          <el-input v-model="input" placeholder="请输入内容"></el-input>
        </filter-item>
      </el-col>
    </template>
    <flex-line :left-padding="true" :right-padding="true" :left-clear-padding="[]" :right-clear-padding="[]">
      <el-button type="primary" :icon="Plus" @click="add">新增</el-button>
      <el-button type="primary" plain :icon="Edit" @click="edit">编辑</el-button>
      <el-button type="danger" plain :icon="Delete">删除</el-button>
      <span style="padding-left:10px">合计金额：<span style="color:red">333433.88</span></span>
      <template v-slot:right>
        <el-button type="success" plain><i class="cs-common excel"></i>&nbsp;导 出</el-button>
      </template>
    </flex-line>
  </tool-bar>
</template>

<script lang="ts" setup>
import ElementPro from '@cs/element-pro';
import { Delete, Edit, Plus, Search } from '@element-plus/icons-vue';
import { ElButton, ElRow, ElCol } from 'element-plus';

const { ToolBar, FlexLine, FilterItem } = ElementPro;
import { ref } from 'vue';

const input = ref('');
const inputNum = ref(1);
const paddingSize = ref('large');

const add = () => {
  console.log('add click:', new Date().toISOString());
};
const edit = () => {
  console.log('edit click:', new Date().toISOString());
};
</script>
