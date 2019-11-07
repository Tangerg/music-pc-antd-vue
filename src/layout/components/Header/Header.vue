<template>
  <a-layout-header :style=headerStyle>
    <div class="header-container">
      <div class="header-left">
        <Collapsed></Collapsed>
        <History></History>
        <Search></Search>
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
      headerStyle: {
        padding: 0,
        color: 'white',
        fontSize: '24px',
        textAlign: 'center',
        backgroundColor: '#005792'
      }
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
    Theme,
  }
}
</script>

<style lang="less">
  .header-container{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .header-left{
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .header-right{
      display: flex;
      padding-right: 50px;
    }
  }
</style>
