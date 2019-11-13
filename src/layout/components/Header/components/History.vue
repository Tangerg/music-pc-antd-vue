<template>
<div class="header-history">
  <a-button class="history-btn" ghost shape="circle" icon="left" @click="clickHistoryPrev"/>
  <a-button class="history-btn" ghost shape="circle" icon="right" @click="clickHistoryNext"/>
</div>
</template>

<script>
export default {
  name: 'History',
  methods: {
    clickHistoryPrev () {
      this.$router.back()
    },
    clickHistoryNext () {
      this.$router.forward()
    }
  }
}
</script>

<style lang="less">
.header-history{
  .history-btn{
    margin-right: 10px;
    border: 0;
  }
}
</style>
