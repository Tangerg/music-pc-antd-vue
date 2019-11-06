<template>
  <div class="tab-warp">
    <div class="tab-container" >
      <a-tabs
        :defaultActiveKey=tabList[0].key
        size="large"
        :tabBarStyle="tabBarStyle"
        @change="onChangeTab" >
        <a-tab-pane :tab=tab.title :key=tab.key v-for="tab in tabList"></a-tab-pane>
      </a-tabs>
      <slot name="tab-slot"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InfoTab',
  data () {
    return {
      tabBarStyle: {
        margin: '0',
        border: '0'
      }
    }
  },
  props: {
    tabList: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    onChangeTab (key) {
      this.$emit('onChangeTab', key)
    }
  }
}
</script>

<style lang="less">
.tab-warp{
  margin: 0;
  border-bottom: 1px solid #1890ff;
  .tab-container{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 50px;
  }
}
</style>
