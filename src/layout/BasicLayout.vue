<template>
  <a-layout :style="layout">
    <sider-menu></sider-menu>
    <a-layout :style="layout">
      <Header></Header>
      <a-layout-content>
        <render-view></render-view>
      </a-layout-content>
      <Player/>
    </a-layout>
  </a-layout>
</template>

<script>
import Header from './components/Header'
import SiderMenu from './components/SiderMenu'
import RenderView from './components/RenderView'
import Player from '@/player'
export default {
  name: 'BasicLayout',
  data () {
    return {
      layout: {
        height: '100%'
      }
    }
  },
  components: {
    Header,
    SiderMenu,
    RenderView,
    Player
  }
}
</script>

<style lang="less">
</style>
