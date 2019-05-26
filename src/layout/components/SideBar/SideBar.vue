<template>
  <a-layout-sider
    v-model="collapsed"
    width="256px"
    class="sider"
    theme="light">
    <Logo :collapsed="collapsed"/>
    <Menu/>
  </a-layout-sider>
</template>

<script>
import Logo from '@c/Logo'
import Menu from '@c/Menu'
export default {
  name: 'SideBar',
  data () {
    return {
      collapsed: false
    }
  },
  components: {
    Logo,
    Menu
  }
}
</script>

<style lang="less">
  .sider{
  }
</style>
