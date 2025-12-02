<template>
  <el-button plain @click="dialogVisible = true">
    打开弹窗
  </el-button>
  <br/>
  <el-radio-group v-model="radio3">
    <el-radio-button v-for="item in dialogConfig" :key="item.type" :label="item.title" :value="item"></el-radio-button>
  </el-radio-group>
  <el-dialog
      v-model="dialogVisible"
      :title="radio3.title"
      :width="radio3.width"
      :fullscreen="radio3.fullscreen"
  >
    <flex-box :item-num="flexConfig.length" :item-config="flexConfig" height="500px;overflow: hidden;">
      <template #item-1>
        <box>
          {{ radio3.title }} 宽度：{{ radio3.width }}
        </box>
      </template>
    </flex-box>
  </el-dialog>
</template>
<script setup lang="ts">
import { ref, reactive } from 'vue';
import { ElDialog, ElButton, ElMessageBox, ElRadioGroup, ElRadioButton } from 'element-plus';
import ElementPro from '@cs/element-pro';

const { FlexBox, Box } = ElementPro;

const dialogVisible = ref(false);

const flexConfig = reactive([
  {
    tag: 'item-1',
    isFixed: false,
    size: '',
    paddingSize: 'large',
  },
]);
const dialogConfig = reactive([
  {
    type: 'form',
    title: '单列表单',
    width: 450,
  },
  {
    type: 'doubleForm',
    title: '两列表单',
    width: 720,
  },
  {
    type: 'full',
    title: '普通弹窗-满屏',
    width: '100%',
    fullscreen: true,
  },
  {
    type: 'large',
    title: '普通弹窗-大',
    width: '80%',
  },
  {
    type: 'middle',
    title: '普通弹窗-中',
    width: '50%',
  },
  {
    type: 'small',
    title: '普通弹窗-小',
    width: '30%',
  },
]);
const radio3 = ref(dialogConfig[0]);
</script>
<style scoped>

</style>