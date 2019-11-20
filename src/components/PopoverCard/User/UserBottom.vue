<template>
  <div class="user-bottom">
    <a-list itemLayout="horizontal">
      <a-list-item @click="clickLoginOut">
        <div class="power-off"><a-icon type="poweroff" /><span class="text">退出登录</span></div>
      </a-list-item>
    </a-list>
  </div>
</template>

<script>
export default {
  name: 'UserBottom',
  data () {
    return {
    }
  },
  methods: {
    clickLoginOut () {
      this.$emit('onClickLoginOut')
    }
  }
}
</script>

<style lang="less">
.user-bottom{
  width: 280px;
  .power-off{
    padding-left: 20px;
    font-size: 17px;
    cursor: pointer;
    .text{
      margin-left: 10px;
    }
  }
}
</style>
