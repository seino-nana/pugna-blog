<script setup>
import { ref } from "vue";
import Content from "@/views/layout/content.vue";
// 导入路由
import { useRouter } from "vue-router";
const router = useRouter();

const headList = ref(['关于','文章','资源'])
const headItemBtn = (index) => {
  // 分别跳转至about/works/blog页面中
  if(index == 0) {
    router.push('/about')
  } else if(index == 1) {
    router.push('/blog')
  } else if(index == 2) {
    router.push('/tool')
  }
}
const logoBtn = () => {
  router.push('/index')
}
</script>

<template>
  <div class="layout">
    <!-- navbar -->
    <div class="head">
      <img src="@/assets/image/index/logo.png" @click="logoBtn"/>
      <div class="head_list">
        <button 
          class="head_item" 
          v-for="(item,index) in headList" 
          :key="item" 
          @click="headItemBtn(index)">{{item}}</button>
      </div>
    </div>
    <!-- 内容 -->
    <content />
  </div>
</template>

<style lang="scss" scoped>
.layout {
  height: 100%;
  color:#fff;
  min-width: 1000px;
  max-width: 1000px;
  margin: 0 auto;

  .head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 120px;
    line-height: 120px;
    color: #fff;

    img {
      width: 80px;
      height: 80px;
      // margin-left: 50px;
    }

    .head_list {
      display: flex;
      // margin-right: 50px;

      .head_item {
        flex: 1;
        color: #fff;
        font-size: 16px;
        letter-spacing: 4px;
        padding-right: 12px;
        padding-bottom: 7px;
        margin: 0 20px;
        border: none;
        background: none;
        text-transform: uppercase;

        &:hover {
          color: var(--theme-color);
          border-bottom: 2px solid var(--theme-color);
        }
      }
    }
  }
}
</style>