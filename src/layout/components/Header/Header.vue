<template>
  <a-layout-header class="music-header">
    <div class="music-header-container">
      <div class="header-left">
        <Collapsed class="header-item"></Collapsed>
        <History class="header-item"></History>
        <!--<Search></Search>-->
      </div>
      <div class="header-right">
        <User class="header-item"></User>
        <Theme class="header-item"></Theme>
        <full-screen class="header-item"></full-screen>
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

<style lang="less">
  .music-header{
    color: var(--header-font-color-2--);
    font-size: 18px;
    padding: 0 !important;
    background-color: var(--header-bg-color--) !important;
    .music-header-container{
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      .header-item{
        padding: 0 10px 0 30px;
        cursor: pointer;
        &:hover{
          color: var(--header-font-color-1--);
        }
      }
      .header-left{
        display: flex;
        align-items: center;
      }
      .header-right{
        display: flex;
        align-items: center;
        padding-right: 50px;
      }
    }
  }
</style>
