<template>
  <a-menu
    mode="inline"
    :theme=appTheme
    class="music-menu-list"
    @click="clickMenu"
    :selectedKeys="[activeKey]"
  >
    <a-menu-item-group>
      <div slot="title"><span>推荐</span></div>
      <a-menu-item :key="menu.route" v-for="menu in RecommendMusicMenu">
        <a-icon :type="menu.icon" />
        <span>{{menu.title}}</span>
      </a-menu-item>
    </a-menu-item-group>
    <a-menu-item-group>
      <div slot="title"><span>我的音乐</span></div>
      <a-menu-item :key="menu.route" v-for="menu in MyMusicMenu">
        <a-icon :type="menu.icon" />
        <span>{{menu.title}}</span>
      </a-menu-item>
    </a-menu-item-group>
    <a-sub-menu key="sub1">
      <span slot="title"><a-icon type="folder" /><span>创建的歌单</span></span>
      <a-menu-item :key="index" v-for="(menu,index) in RecommendMusicMenu">
      <a-icon :type="menu.icon" />
      <span>{{menu.title}}</span>
    </a-menu-item>
    </a-sub-menu>
    <a-sub-menu key="sub2">
      <span slot="title"><a-icon type="folder" /><span>收藏的歌单</span></span>
      <a-menu-item :key="index" v-for="(menu,index) in RecommendMusicMenu">
        <a-icon :type="menu.icon" />
        <span>{{menu.title}}</span>
      </a-menu-item>
    </a-sub-menu>
  </a-menu>
</template>

<script>
import { mapGetters } from 'vuex'
import { MENU_LIST } from '@/config/filler'
export default {
  name: 'MenuList',
  computed: {
    ...mapGetters([
      'appTheme'
    ]),
    activeKey () {
      return this.$route.path
    }
  },
  data () {
    return {
      RecommendMusicMenu: MENU_LIST.RecommendMusic,
      MyMusicMenu: MENU_LIST.MyMusic
    }
  },
  methods: {
    clickMenu (item) {
      this.$router.push(item.key)
    }
  }
}
</script>

<style lang="less">
.music-menu-list{
  height: calc(100% - 64px);
  overflow-y: auto;
  overflow-x: hidden;
}
</style>
