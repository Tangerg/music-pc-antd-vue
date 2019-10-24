<template>
  <div class="find-music">
    <header-tab :tabList="tabList"></header-tab>
    <div class="find-music-container">
      <keep-alive>
        <router-view/>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import HeaderTab from '@c/HeaderTab'
const TAB_LIST = [
  {
    tabName: '个性推荐',
    url: '/find-music/recommend'
  },
  {
    tabName: '歌单',
    url: '/personal-fm'
  },
  {
    tabName: '主播电台',
    url: '/video-mv'
  },
  {
    tabName: '排行榜',
    url: '/friends-space'
  },
  {
    tabName: '歌手',
    url: '/find-music/song-list3'
  },
  {
    tabName: '最新音乐',
    url: '/find-music/song-list4'
  }
]
export default {
  name: 'find-music',
  data () {
    return {
      tabList: TAB_LIST
    }
  },
  components: {
    HeaderTab
  }
}
</script>

<style lang="less">
.find-music{
  height: 100%;
  padding: 0 20px;
  overflow-x: hidden;
  overflow-y: auto;
  .find-music-container{
    max-width: 1500px;
    margin: auto;
    padding: 20px 5% 0 5%;
  }
}
</style>
