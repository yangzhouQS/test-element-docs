代码示例：
```
<template>
  <div>
    <div style="width:640px;">
      <WebCamera ref="cameraRef" @init="initcom"/>
    </div>
      <div>
        <el-select v-model="currentVideo" placeholder="Select" style="width: 240px">
          <el-option
            v-for="item in videoList"
            :key="item.deviceId"
            :label="item.label"
            :value="item.deviceId"
          />
        </el-select>
        <el-button @click="init">初始化</el-button>
        <el-button @click="getPhoto">拍照</el-button>
      </div>
      <img v-for="(item, i) in srcList" :key="i" :src="item" style="width:800px" />
  </div>
</template>

<script lang="ts" setup>
const { ref, onMounted } = Vue;
const cameraRef = ref();
const srcList = ref([]);
const videoList = ref([]);
const currentVideo = ref('');
const getPhoto = () => {
  srcList.value.push(cameraRef.value.getPhotoBase64());
};
const initcom = (videos, currentDeviceId) => {
  videoList.value = videos;
  currentVideo.value = currentDeviceId;
};
const init = () => {
  cameraRef.value.initCamera(currentVideo.value);
};
</script>
```