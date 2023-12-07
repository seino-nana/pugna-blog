<script setup>
import { ref } from "vue";
const emitEvents = defineEmits(['tabClick']);
const props = defineProps(["list","title"]);
const currentIndex = ref(0);
const currentBtn = (index) => {
  currentIndex.value = index;
  emitEvents("tabClick", props.list[index].nm);
  // 处理点击事件的逻辑
};
</script>

<template>
  <div class="navbar">
    <div class="title">{{title}}</div>
    <div class="tab-control">
      <div
        v-for="(item, index) in list"
        :key="item.title"
        class="tab-control-item"
        :class="currentIndex == index ? 'active' : ''"
        @click="currentBtn(index)"
      >
        {{ item.nm }}
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.navbar {
  .title {
    color: var(--theme-color);
    font-size: 36px;
    font-weight: 700;
    text-align: center;
    padding-top: 20px;
  }
  .tab-control {
    display: flex;
    justify-content: center;
    margin-top: 20px;
    .tab-control-item {
      //  letter-spacing: 4px;
      text-transform: uppercase;
      padding-bottom: 5px;
      margin: 0 16px;
      cursor: pointer;
    }
    .active {
      color: var(--theme-color);
      border-bottom: 2px solid var(--theme-color);
    }
  }
}
</style>
