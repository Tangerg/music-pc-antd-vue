<template>
  <div class="header-tabs">
    <a-tabs v-model="activeKey" @change="tabChange()" >
      <a-tab-pane :tab="tabItem.tabName" :key="tabItem.url" v-for="(tabItem) in tabList">
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script>
export default {
  name: 'HeaderTabs',
  props: {
    tabList: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      activeKey: this.tabList[0].url
    }
  },
  methods: {
    tabChange () {
      this.$router.push(this.activeKey)
    }
  }
}
</script>

<style lang="less">
  .header-tabs {
    .ant-tabs-bar {
      margin: 0;
      .ant-tabs-nav-scroll {
        text-align: center;
      }
    }
  }
</style>
