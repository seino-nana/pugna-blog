<script setup>
import { ref } from "vue";
// import NavBar from "@/components/NavBar/NavBar.vue";
// import Card from '@/components/card/card.vue'
const title = ref('Works')
const List = ref(["全部", "技术", "摘录"]);
const contentList = ref([
  {
    imgUrl: "https://www.3154movie.cn/changan.jpg",
    title: "长安三万里",
    desc: "讲述的是一个什么什么什么的故事",
    date: "23/11/13",
  },
  {
    imgUrl: "https://www.3154movie.cn/changan.jpg",
    title: "长安三万里",
    desc: "讲述的是一个什么什么什么的故事",
    date: "23/11/13",
  },
  {
    imgUrl: "https://www.3154movie.cn/changan.jpg",
    title: "长安三万里",
    desc: "讲述的是一个什么什么什么的故事",
    date: "23/11/13",
  }
]);
</script>

<template>
  <div class="works">
    
  </div>
</template>

<style lang="scss" scoped>
.works {
 
}
</style>
