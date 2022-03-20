<script setup lang="ts">
import {useStore} from '@/store'
import {computed, onMounted, ref} from "vue";

const store = useStore()
if (store.state.recommend.banners === undefined) {
  store.dispatch('recommend/getBanner', 2)
}
const banners = computed(() => (store.state.recommend.banners) ?? 11)
const loading = ref(true)
</script>
<template>
  <el-carousel :interval="3000" arrow="hover">
    <el-carousel-item v-for="banner in banners" :key="banner.id">
      <img v-lazy="{ src: banner.pic}">
    </el-carousel-item>
  </el-carousel>
</template>
<style scoped lang="scss">
.el-carousel__item {

  img {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    height: 300px;
    width: 730px;
    line-height: 300px;
    margin: 0;
    text-align: center;
  }
}
</style>
