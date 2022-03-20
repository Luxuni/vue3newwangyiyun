<script setup lang="ts">
defineProps({
  //点击标题跳转的路径
  mUrl: {
    type: String
  },
  //是否显示主标题前的远点
  pointShow: {
    type: Boolean,
    require: true
  },
  //主标题的css类
  mTitleClass: {
    type: String,
    require: true
  },
  //主标题内容
  mTitleContent: {
    type: String,
    require: true
  },
  //主标题后面的副标题
  sTitle: {
    type: Array,
  },
  // 右侧显示的更多信息
  moreMessage: {
    type: String,
    default: '更多'
  }
});
</script>
<template>
  <div class="recommend_navbar_container">
  <span class="right">
    <span class="m_point" v-show="pointShow">
    <span class="s_point"></span>
  </span>
    <router-link :class="mTitleClass" :to="{name:mUrl}">
      {{ mTitleContent }}
    </router-link>
    <span class="s_title_container">
      <router-link
        :to="{name:title.url}"
        v-for="(title,index) of sTitle"
        :class="{'s_title':index<sTitle.length-1,'s_title_last':index===sTitle.length-1}">
        {{ title.name }}
      </router-link>
      <span>
<!--        做歌单表头时可填入歌单总歌曲数的插槽-->
      <slot name="songs_count"></slot>
      </span>
    </span>
  </span>
    <router-link :to="{name:mUrl}">
      {{moreMessage}}
    </router-link>
  </div>
</template>
<style scoped lang="scss">
.recommend_navbar_container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 10px;
  border-bottom: 3px solid #B2281E;

  .right {
    display: flex;
    align-items: center;

    .m_point {
      position: relative;
      height: 20px;
      width: 20px;
      border-radius: 20px;
      background-color: #B2281E;

      .s_point {
        display: inline-block;
        position: absolute;
        top: 50%;
        right: 50%;
        transform: translate(50%, -50%);
        height: 10px;
        width: 10px;
        border-radius: 10px;
        background-color: #fff;
      }
    }

    .m_title {
      font-size: 20px;
      font-weight: bold;
      padding: 0 20px 0 5px;
    }

    .generally {
      font-size: 12px;
      padding: 0 20px 0 5px;
    }

    .s_title_container {
      span {
        font-size: 12px;
      }

      .s_title, .s_title_last {
        padding: 0 15px;
        font-size: 12px;
      }

      .s_title {
        border-right: 1px solid #C1C1C1;
      }

      .s_title_last {
        border-right: 0;
      }
    }
  }
}
</style>
