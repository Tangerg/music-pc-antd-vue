<template>
  <a-layout-sider
    v-model="collapsed"
    width="256px"
    collapsible
    :style="siderStyle">
    <Logo :collapsed="collapsed"/>
    <menu-list/>
  </a-layout-sider>
</template>

<script>
import Logo from '@c/Logo'
import MenuList from '@c/MenuList'
export default {
  name: 'SiderMenu',
  data () {
    return {
      collapsed: false,
      siderStyle: {
      }
    }
  },
  components: {
    Logo,
    MenuList
  }
}
</script>

<style lang="less">
</style>
