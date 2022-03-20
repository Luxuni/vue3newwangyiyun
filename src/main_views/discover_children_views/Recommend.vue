<script setup lang="ts">
import Banner from "@/components/banner/Banner.vue";
import Download from "@/components/banner/Download.vue";
import ComponentsTabBar from "@/components/components_tabbar/ComponentsTabBar.vue";
import {useStore} from '@/store'
import {computed, onMounted} from "vue";
import SongWindowItem from "@/components/show_item/SongWindowItem.vue";

const store = useStore()
const titles = [
  {url: "SingList", name: "华语"},
  {url: "SingList", name: "流行"},
  {url: "SingList", name: "摇滚"},
  {url: "SingList", name: "民谣"},
  {url: "SingList", name: "电子"}
];

if (store.state.recommend.IncompletePersonalized === undefined) {
  store.dispatch('recommend/getIncompletePersonalized', {limit: 8})
}
const IncompletePersonalized = computed(() => store.state.recommend.IncompletePersonalized)
</script>
<template>
  <div class="recommend_main_container">
    <!--   左部分-->
    <div style="border-left: 1px solid #95a5a6;border-right: 1px solid #95a5a6">
      <banner></banner>
      <div class="main_right_content_container">
        <!--        热门推荐的表头-->
        <components-tab-bar
          m-url="SingList"
          :point-show=true
          m-title-class="m_title"
          m-title-content="热门推荐"
          :s-title="titles"
        ></components-tab-bar>
        <!--        热门推荐的内容-->
        <song-window-item :items="IncompletePersonalized"></song-window-item>
      </div>
    </div>
    <!--    右部分-->
    <div style="border-right: 1px solid #95a5a6">
      <download></download>
    </div>
  </div>
</template>
<style scoped lang="scss">
.recommend_main_container {
  display: grid;
  grid-template-columns: repeat(2, 730px 250px);

  .main_right_content_container {
    padding: 20px 20px 40px;
  }
}
</style>
