<script setup lang="ts">
import MainTabBar from "@/components/main_tab_bar/MainTabBar.vue"
import SecondaryTabBar from "@/components/main_tab_bar/SecondaryTabBar.vue"
</script>
<template>
  <suspense>
    <template #default>
      <div class="content">
        <main-tab-bar></main-tab-bar>
        <router-view name="SecondaryTabBar" #default="{Component}">
          <component :is="Component??SecondaryTabBar"></component>
        </router-view>
        <div class="m_view">
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
.main_container {
  min-width: 980px;
  min-height: 100%;

  .content {
    min-height: calc(100% - 60px);

    .m_view {
      display: flex;
      justify-content: center;
      background-color: #F5D7BE;

      .s_view {

      }
    }
  }

  .push {
    height: 60px;
  }

  .footer {
    position: fixed;
    height: 60px;
    margin-top: 60px;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 999999999;

    .player {

    }
  }
}
</style>
