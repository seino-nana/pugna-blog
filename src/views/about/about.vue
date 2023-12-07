<script setup>
import { onMounted, ref } from "vue";
import aboutCircle from './aboutCircle.vue'
</script>
<template>
  <div class="about">
    <div class="circle">
      <aboutCircle/>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.about {
  
  .circle {
    position: absolute;
    left: 50%;
    top: 40%;
    transform: translate(-50%, -50%);
  }
}
</style>
