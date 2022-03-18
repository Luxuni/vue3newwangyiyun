<script setup lang="ts">
import MainTabBarItem from "@/components/main_tab_bar/MainTabBarItem.vue"
import {reactive, watch} from "vue";
import {useRoute} from "vue-router";
import Logo from "@/components/main_tab_bar/Logo.vue";

const messages = reactive([
  {url: "/discover", mainContent: "发现音乐", arrow: false},
  {url: "/my", mainContent: "我的音乐", arrow: false},
  {url: "/attention", mainContent: "关注", arrow: false},
  {url: "/mall", mainContent: "商城", arrow: false},
  {url: "/musician", mainContent: "音乐人", arrow: false},
  {url: "/app", mainContent: "下载客户端", arrow: false}
]);
const route = useRoute();
//通过监控route的path变化，查看newValue包不包括item.url，从而改变item.arrow的值，从而决定气泡箭头出现位置
watch(route, (newValue) => {
  messages.forEach(item => {
    item.arrow = newValue.path.includes(item.url);
  });
});
</script>
<template>
  <div class="m_top">
    <div class="m_top_items">
      <logo></logo>
      <main-tab-bar-item v-for="message of messages"
                         :url="message.url"
                         :mainContent="message.mainContent"
                         :arrow="message.arrow">
        <template v-slot:remind>
          <div class="item_hot" v-show="message.url==='/app'"></div>
        </template>
      </main-tab-bar-item>
    </div>
  </div>
</template>
<style scoped lang="scss">
.m_top {
  background-color: #1B1B1B;

  .m_top_items {
    display: flex;
    width: 100vw;
    min-width: 980px;
    justify-content: center;

    .item_hot {
      height: 19px;
      width: 28px;
      background-image: url('../../assets/images/one.png');
      background-position: -190px 0;
    }

    .search_container {
      display: flex;
      align-items: center;
      padding: 0 20px 0 100px;
    }

    .creator {
      display: flex;
      align-items: center;

      div {
        height: 32px;
        width: 90px;
        text-align: center;
        line-height: 32px;
        font-size: 12px;
        color: #b2bec3;
        border-radius: 16px;
        border: 1px solid #636e72;
        transition: all .2s linear;
        cursor: pointer;

        &:hover {
          border: 1px solid #ffffff;
        }
      }
    }

    .btn_login {
      display: flex;
      align-items: center;
      padding: 0 20px;
      font-size: 12px;
      color: #b2bec3;
      cursor: pointer;
      transition: all .2s linear;

      &:hover {
        color: #ffffff;
      }
    }

    .user_avatar {
      position: relative;
      display: flex;
      align-items: center;
      padding: 0 20px;

      &:hover {
        .user_menu {
          display: block;
        }
      }

      img {
        height: 30px;
        width: 30px;
        border-radius: 15px;
      }

      .user_menu {
        position: absolute;
        top: 49px;
        left: 50%;
        transform: translateX(-50%);
        z-index: 999999999;
        display: none;
      }
    }
  }
}
</style>
