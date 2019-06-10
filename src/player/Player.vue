<template>
  <div class="music-player">
    <list-drawer :visible="drawerState" @closeDrawer="setDrawer"></list-drawer>
    <max-player @showMin="showMinPlayer" v-show="fullScreen"></max-player>
    <min-player
      v-show="!fullScreen"
      :playState="playState"
      :totalNum="sequenceList.length"
      @showDrawer="setDrawer"
      @showMax="showMaxPlayer"
      @changePlayState="changePlayState"
    >
    </min-player>
    <!--<audio></audio>-->
  </div>
</template>

<script>
import MinPlayer from './components/MinPlayer'
import MaxPlayer from './components/MaxPlayer'
import ListDrawer from './components/ListDrawer'
import { mapGetters, mapMutations } from 'vuex'
export default {
  name: 'Player',
  data () {
    return {
      value: 20,
      show: false,
      max: false
    }
  },
  computed: {
    ...mapGetters([
      'playState',
      'fullScreen',
      'drawerState',
      'sequenceList'
    ])
  },
  methods: {
    ...mapMutations({
      setFullScreen: 'SET_FULL_SCREEN',
      setDrawerState: 'SET_DRAWER_STATE',
      setPlayState: 'SET_PLAY_STATE'
    }),
    showMaxPlayer () {
      this.setFullScreen(true)
    },
    showMinPlayer () {
      this.setFullScreen(false)
    },
    setDrawer () {
      this.setDrawerState(!this.drawerState)
    },
    changePlayState () {
      this.setPlayState(!this.playState)
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
