<template>
  <a-layout :style="layout">
    <side-bar></side-bar>
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
import SideBar from './components/SideBar'
import RenderView from './components/RenderView'
import Player from '@/player'
export default {
  name: 'BasicLayout',
  data () {
    return {
      layout: {
        height: '100%',
        overflow: 'hidden'
      }
    }
  },
  components: {
    Header,
    SideBar,
    RenderView,
    Player
  }
}
</script>

<style lang="less">
</style>
