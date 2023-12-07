<script setup>
import { ref } from "vue";
import { formatDate } from "@/utils/filter.js";
const props = defineProps(["list"]);
</script>

<template>
  <div class="content">
    <div class="card-list">
      <a :href="item.link" target="_blank" v-for="item in list" :key="item">
        <div class="card">
          <div class="card-image"><img :src="item.imgUrl" alt="" /></div>
          <p class="card-title">{{ item.title }}</p>
          <p class="card-body">{{ item.desc }}</p>
          <p class="footer">
            Written by
            <span class="date">{{ formatDate(item.created_at) }}</span>
          </p>
        </div>
      </a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.content {
  margin-top: 40px;
  .card-list {
    // display: flex;
    // flex-wrap: wrap;
    // align-items: center;
    width: 100%;
    .card {
      float: left;
      width: 190px;
      min-height: 200px;
      border-radius: 20px;
      background: #212121;
      box-shadow: 5px 5px 8px #1b1b1b, -5px -5px 8px #272727;
      transition: 0.4s;
      padding: 20px;
      margin: 0 20px 20px 0;
      cursor: pointer;
    }
    .card:nth-of-type(3n + 1) {
      margin-right: 0;
    }
    .card:first-child {
      margin-right: 20px;
    }

    .card:hover {
      translate: 0 -10px;
    }

    .card-title {
      font-size: 16px;
      font-weight: 600;
      color: var(--theme-color);
      margin: 15px 0 0 10px;
      white-space: nowrap; /* 不换行 */
      overflow: hidden; /* 隐藏溢出部分 */
      text-overflow: ellipsis; /* 显示省略号 */
    }

    .card-image {
      // 图片大小比例是1：1.56
      width: 100%;
      // min-height: 100px;
      height: 125px;
      background-color: #313131;
      border-radius: 15px;
      background: #313131;
      box-shadow: inset 5px 5px 3px #2f2f2f, inset -5px -5px 3px #333333;
    }

    .card-body {
      color: rgb(184, 184, 184);
      font-size: 12px;
      height: 72px;
      margin: 10px 0 0 10px;
      //   text-indent: 2em; // 两个字首行缩进
      display: -webkit-box;
      -webkit-line-clamp: 4; // 显示的最大行数
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    .footer {
      float: right;
      color: var(--theme-color-1);
      font-size: 12px;
      margin: 20px 0 0 18px;
    }
  }
}
</style>
