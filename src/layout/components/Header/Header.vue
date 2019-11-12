<template>
  <a-layout-header class="music-header">
    <div class="music-header-container">
      <div class="header-left">
        <Collapsed></Collapsed>
        <History></History>
        <!--<Search></Search>-->
      </div>
      <div class="header-right">
        <User></User>
        <Theme></Theme>
        <full-screen></full-screen>
      </div>
    </div>
  </a-layout-header>
</template>

<script>
import Collapsed from './components/Collapsed'
import History from './components/History'
import Search from './components/Search'
import User from './components/User'
import FullScreen from './components/FullScreen'
import Theme from './components/Theme'
export default {
  name: 'Header',
  data () {
    return {

    }
  },
  methods: {
  },
  components: {
    Collapsed,
    History,
    Search,
    User,
    FullScreen,
    Theme
  }
}
</script>

<style lang="less" src="./header.less">
</style>
