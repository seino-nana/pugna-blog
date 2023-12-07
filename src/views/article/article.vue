<script setup>
import { ref, onMounted } from "vue";
import { getArticleText } from "@/api/blog.js";
import { MdPreview, MdCatalog } from "md-editor-v3";
import "md-editor-v3/lib/preview.css";
const { id } = defineProps(["id"]);
const info = ref({});
onMounted(() => {
  // 根据路由参数（文章ID）获取文章内容
  getArticleText(id).then((res) => {
    info.value = res;
  });
});
const mid = ref('preview-only')
</script>
<template>
  <div class="article">
      <!-- 在这里显示你的文章内容 -->
      <MdPreview :editorId="mid" :modelValue="info.content"/>
      <!-- <MdCatalog :editorId="mid" /> -->
  </div>
</template>
<style lang="scss" scoped>
.article {
  margin-bottom: 20px;
}
</style>

