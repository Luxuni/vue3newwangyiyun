<script setup lang="ts">
import MainTabBar from "@/components/main_tab_bar/MainTabBar.vue"
import SecondaryTabBar from "@/components/main_tab_bar/SecondaryTabBar.vue"
</script>
<template>
  <suspense>
    <template #default>
      <div>
        <main-tab-bar></main-tab-bar>
        <router-view name="SecondaryTabBar" #default="{Component}">
          <component :is="Component??SecondaryTabBar"></component>
        </router-view>
        <div class="main_view">
          <div class="s_view">
            <router-view #default="{Component}">
              <component :is="Component"></component>
            </router-view>
          </div>
        </div>
      </div>
    </template>
  </suspense>
</template>
<style scoped lang="scss">
.main_view {
  display: flex;
  justify-content: center;
  background-color: #ecf0f1;

  .s_view {
    width: 980px;
    background-color: #fff;
  }
}
</style>
