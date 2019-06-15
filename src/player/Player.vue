<template>
  <div class="music-player">
    <list-drawer
      :totalNum="totalNum"
      :songListData="this.sequenceList"
      :visible="drawerState"
      @closeDrawer="changeDrawerState"
      @cleanPlayList="cleanPlayList"
      @playItem="playItem"
    >
    </list-drawer>
    <max-player
      @changePlayerState="changePlayerState"
      v-show="fullScreen">
    </max-player>
    <min-player
      v-show="!fullScreen"
      :playState="playState"
      :totalNum="totalNum"
      @showDrawer="changeDrawerState"
      @changePlayerState="changePlayerState"
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
    ]),
    totalNum () {
      return this.sequenceList.length
    }
  },
  methods: {
    ...mapMutations({
      setFullScreen: 'SET_FULL_SCREEN',
      setDrawerState: 'SET_DRAWER_STATE',
      setPlayState: 'SET_PLAY_STATE',
      setSequenceList: 'SET_SEQUENCE_LIST'
    }),
    changePlayerState (flag) {
      this.setFullScreen(flag)
    },
    changeDrawerState (flag) {
      this.setDrawerState(flag)
    },
    changePlayState () {
      this.setPlayState(!this.playState)
    },
    cleanPlayList () {
      this.setSequenceList([])
    },
    playItem (item) {
      console.log('123')
      console.log(item)
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
