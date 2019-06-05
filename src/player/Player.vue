<template>
  <div class="music-player">
    <list-drawer :show="show"></list-drawer>
<!--
    <div class="player-max">1212</div>
-->
    <max-player v-show="max === true"></max-player>
    <min-player v-show="max === false" @showDrawer="show = true" @open="max = true"></min-player>
  </div>
</template>

<script>
import MinPlayer from './components/MinPlayer'
import MaxPlayer from './components/MaxPlayer'
import ListDrawer from './components/ListDrawer'
export default {
  name: 'Player',
  data () {
    return {
      value: 20,
      show: false,
      max: false
    }
  },
  components: {
    MinPlayer,
    MaxPlayer,
    ListDrawer
  }
}
</script>

<style lang="less">
</style>
