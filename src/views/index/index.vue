<script setup>
import { ref, onMounted } from "vue";
// 导入路由
import { useRouter } from "vue-router";
const router = useRouter();
const addTools = () => {
  router.push({ name: 'addTools' });
}

const addArticle = () => {
  router.push({ name: 'addArticle' });
}
</script>

<template>
  <div class="btn-list">
    <el-button type="primary" @click="addTools">添加资源</el-button>
    <el-button type="primary" @click="addArticle">添加文章</el-button>
  </div>
</template>

<style lang="scss" scoped>
.btn-list {
  display: flex;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
}
</style>