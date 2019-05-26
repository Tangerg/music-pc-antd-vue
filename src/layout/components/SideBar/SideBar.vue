<template>
  <a-layout-sider width="256">
    <Logo/>
    <Menu/>
  </a-layout-sider>
</template>

<script>
import Logo from '@c/Logo'
import Menu from '@c/Menu'
export default {
  name: 'SideBar',
  components: {
    Logo,
    Menu
  }
}
</script>

<style lang="stylus">

</style>
