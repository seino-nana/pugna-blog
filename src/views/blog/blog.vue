<script setup>
import { ref, onMounted } from "vue";
import { getArticle } from "@/api/blog.js";
// 导入路由
import { useRouter } from "vue-router";
const router = useRouter();

const list = ref([]);
onMounted(() => {
  getArticle().then((res) => {
    list.value = res;
  });
});
const goArticle = (id) => {
  router.push({ name: "article", params: { id: id } });
};
</script>

<template>
  <div class="blog">
    <div v-for="item in list" :key="item.id" class="article-item">
      <div class="info">
        <span class="title">{{ item.title }}</span>
        <span class="desc">{{ item.desc }}</span>
        <div class="tag">
          <div
            class="tag-item"
            v-for="item2 in JSON.parse(item.category)"
            :key="item2"
          >
            <el-tooltip :content="item2" placement="top">
              <el-tag type="success">{{ item2 }}</el-tag>
            </el-tooltip>
          </div>
        </div>
      </div>
      <div class="cover" @click="goArticle(item.id)">
        <img :src="item.imgUrl" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.article-item {
  display: flex;
  height: 120px;
  justify-content: space-between;
  color: #010101;
  background: #fff;
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 5px;
  box-shadow: 5px 5px 8px #1b1b1b, -5px -5px 8px #272727;
  border: 2px solid var(--theme-color-1);
  .cover {
    overflow: hidden;
    img {
      transition: transform 0.5s ease;
      cursor: pointer;
    }
  }
  .cover:hover img {
    transform: scale(1.1);
  }
  .cover:not(:hover) img {
    transform: scale(1);
  }
  .info {
    position: relative;
    .title {
      font-size: 24px;
      font-weight: 700;
      cursor: pointer;
    }
    .desc {
      width: 800px;
      font-size: 14px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2; /* number of lines to show */
      -webkit-box-orient: vertical;
    }
    .tag {
      display: flex;
      position: absolute;
      bottom: 0;
      left: 0;
      .tag-item {
        margin-right: 10px;
        .el-tag {
          cursor: pointer;
        }
      }
    }
  }
}
</style>
