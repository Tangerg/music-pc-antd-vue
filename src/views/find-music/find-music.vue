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
import { FIND_MUSIC_TAB_LIST } from '@/config/filler'
import HeaderTab from '@c/HeaderTab'
export default {
  name: 'find-music',
  data () {
    return {
      tabList: FIND_MUSIC_TAB_LIST
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
