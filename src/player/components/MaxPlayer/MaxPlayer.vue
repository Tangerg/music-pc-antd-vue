<template>
<div class="player-max">
  123
  <a-button @click="onChangePlayerDisplay(false)">最小化</a-button>
</div>
</template>

<script>
export default {
  name: 'MaxPlayer',
  methods: {
    onChangePlayerDisplay (flag) {
      this.$emit('onChangePlayerDisplay', flag)
    }
  }
}
</script>

<style lang="less">
.player-max{
  z-index: 200;
  position: absolute;
  top:0;
  right: 0;
  left: 0;
  bottom: 0;
  min-width: 1110px;
  max-width: 1920px;
  min-height: 650px;
  max-height: 1080px;
  margin: auto;
  background-color: #fff;
}
</style>
