<template>
  <div class="find-music">
    <header-tabs :tabList="tabList"></header-tabs>
    <div>
      <keep-alive>
        <router-view/>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import HeaderTabs from '@c/HeaderTabs'
export default {
  name: 'find-music',
  data () {
    return {
      tabList: [
        {
          tabName: '个性推荐',
          url: '/find-music/recommend'
        },
        {
          tabName: '歌单',
          url: '/find-music/song-list'
        }
      ]
    }
  },
  components: {
    HeaderTabs
  }
}
</script>

<style lang="less">
.find-music{
  height: 100%;
  padding: 20px;
  overflow-y: auto;
}
</style>
