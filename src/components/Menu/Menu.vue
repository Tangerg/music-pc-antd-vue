<template>
  <a-menu
    mode="inline"
    theme="light"
    class="menu-list"
    @click="handleSelect"
  >
    <a-menu-item-group>
      <div slot="title"><span>推荐</span></div>
      <a-menu-item :key="index" v-for="(menu,index) in menuList">
        <a-icon :type="menu.icon" />
        <span>
          {{menu.title}}
        </span>
      </a-menu-item>
    </a-menu-item-group>
    <!--<a-sub-menu key="sub1" class="sub-menu">
      <span slot="title"><a-icon type="folder" /><span>创建的歌单</span></span>
      <a-menu-item :key="index" v-for="(menu,index) in menuList">
        <a-icon :type="menu.icon" />
        <span>{{menu.title}}</span>
      </a-menu-item>
      <a-menu-item :key="index" v-for="(menu,index) in menuList">
        <a-icon :type="menu.icon" />
        <span>{{menu.title}}</span>
      </a-menu-item>
      <a-menu-item :key="index" v-for="(menu,index) in menuList">
        <a-icon :type="menu.icon" />
        <span>{{menu.title}}</span>
      </a-menu-item>
      <a-menu-item :key="index" v-for="(menu,index) in menuList">
        <a-icon :type="menu.icon" />
        <span>{{menu.title}}</span>
      </a-menu-item>
      <a-menu-item :key="index" v-for="(menu,index) in menuList">
        <a-icon :type="menu.icon" />
        <span>{{menu.title}}</span>
      </a-menu-item>
    </a-sub-menu>
    <a-sub-menu key="sub2">
      <span slot="title"><a-icon type="folder" /><span>收藏的歌单</span></span>
      <a-menu-item :key="index" v-for="(menu,index) in menuList">
        <a-icon :type="menu.icon" />
        <span>{{menu.title}}</span>
      </a-menu-item>
    </a-sub-menu>
    <a-sub-menu key="sub3">
      <span slot="title"><a-icon type="folder" /><span>收藏的歌单</span></span>
      <a-menu-item :key="index" v-for="(menu,index) in menuList">
        <a-icon :type="menu.icon" />
        <span>{{menu.title}}</span>
      </a-menu-item>
    </a-sub-menu>-->
  </a-menu>
</template>

<script>
const MENU_LIST = [
  {
    title: '发现音乐',
    icon: 'customer-service',
    route: '/find-music/recommend'
  },
  {
    title: '私人FM',
    icon: 'user',
    route: '/personal-fm'
  },
  {
    title: '视频',
    icon: 'youtube',
    route: '/video-mv'
  },
  {
    title: '朋友',
    icon: 'team',
    route: '/friends-space'
  }
]
export default {
  name: 'Menu',
  data () {
    return {
      menuList: MENU_LIST
    }
  },
  methods: {
    handleSelect (obj) {
      this.$router.push(this.menuList[obj.key].route)
    }
  }
}
</script>

<style lang="less">
.menu-list{
  height: calc(100% - 64px);
  overflow-y: auto;
  overflow-x: hidden;
  background-color: transparent;
}
</style>
