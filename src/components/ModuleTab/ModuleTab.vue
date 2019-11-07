<template>
  <div class="header-tab">
    <a-tabs
      animated
      :activeKey=activeKey
      @change="changeTab"
      size="large"
      :tabBarStyle="tabBarStyle">
      <a-tab-pane
        :tab="tabItem.tabName"
        :key="tabItem.route"
        v-for="(tabItem) in tabList">
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script>
export default {
  name: 'ModuleTab',
  props: {
    tabList: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      tabBarStyle: {
        textAlign: 'center'
      }
    }
  },
  computed: {
    activeKey () {
      return this.$route.path
    }
  },
  methods: {
    changeTab (activeKey) {
      this.$router.push(activeKey)
    }
  }
}
</script>

<style lang="less">
</style>
