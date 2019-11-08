<template>
<div class="history">
  <a-button class="btn" type="link" @click="clickHistoryPrev" shape="circle">
    <a-icon type="left"/>
  </a-button>
  <a-button class="btn" type="link" @click="clickHistoryNext" shape="circle">
    <a-icon type="right"/>
  </a-button>
 </div>
</template>

<script>
export default {
  name: 'History',
  methods: {
    clickHistoryPrev () {
      console.log('123')
      this.$router.back()
    },
    clickHistoryNext () {
      this.$router.forward()
    }
  }
}
</script>

<style lang="less">
.history{
  font-size: 20px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color .3s;
  .btn{
    margin-right: 10px;
  }
}
</style>
