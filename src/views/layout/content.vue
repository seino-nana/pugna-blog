<script setup>

</script>

<template>
  <div class="main"> 
    <router-view></router-view>
  </div>
</template>

<style lang="scss" scoped>
.main {
  min-height: calc(100vh - 120px);
  // min-height: calc(100% - 120px);
  position: relative;
  overflow: hidden;
}
</style>