<script setup lang="ts">

</script>
<template>
<h1>推荐</h1>
</template>
<style scoped lang="scss">
.m_recommend {
  display: flex;

  .recommend_left {
    width: 730px;
    background-color: #fff;

    .recommend_left_container {
      padding-left: 20px;
      padding-right: 20px;


      .recommend_nav_bar {
        padding-top: 35px;

        .s_more {
          font-size: 12px;
        }
      }

      .recommend-list-item {
        padding-top: 20px;
      }

      .list_container {
        display: grid;
        width: 100%;
        grid-template-columns: repeat(3, 1fr);
      }
    }
  }

  .recommend_right {
    width: 250px;
    background-color: #fff;

    .recommend_right_container {
      .resident_singer {
        margin-top: 15px;
      }
    }
  }
}
</style>
