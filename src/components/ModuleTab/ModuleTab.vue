<template>
  <div class="header-tab">
    <a-tabs
      animated
      :defaultActiveKey=defaultActiveKey
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
      defaultActiveKey: this.tabList[0].route,
      tabBarStyle: {
        textAlign: 'center'
      }
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
