<template>
  <a-layout-sider
    v-model="collapsedState"
    width="256px"
    collapsible
    :style="siderStyle"
    :trigger="null"
  >
    <Logo :collapsed="collapsedState"/>
    <menu-list/>
  </a-layout-sider>
</template>

<script>
import { mapGetters } from 'vuex'
import Logo from './components/Logo'
import MenuList from './components/MenuList'
export default {
  name: 'SiderMenu',
  data () {
    return {
      siderStyle: {
      }
    }
  },
  computed: {
    ...mapGetters([
      'collapsedState'
    ])
  },
  components: {
    Logo,
    MenuList
  }
}
</script>

<style lang="less">
</style>
