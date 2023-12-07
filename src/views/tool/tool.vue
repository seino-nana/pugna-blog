<script setup>
import { ref, onMounted } from "vue";
import { getCategory, getTools } from "@/api/blog.js";
import NavBar from "@/views/tool/cpns/NavBar/NavBar.vue";
import Card from "@/views/tool/cpns/Card/Card.vue";
onMounted( () => {
  getCategory().then((res) => {
    cateList.value = res;
    _getTools(cateList.value[0].nm)
  });
});

const cateList = ref([]);
const contentList = ref([]);
// 获取文章
const _getTools = (category) => {
  getTools(category).then((res) => {
    contentList.value = res;
  });
};
// 点击tabcontrol
const tabBtn = (category) => {
  _getTools(category)
};
</script>

<template>
  <div class="tool">
    <NavBar :list="cateList" title="技术与资源" @tabClick="tabBtn"/>
    <Card :list="contentList" />
    
  </div>
</template>

<style lang="scss" scoped>
.tool {
}
</style>