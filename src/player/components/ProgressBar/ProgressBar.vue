<template>
  <vue-slider v-model="value" dotSize="10" :silent="true"  :lazy="true" tooltip="none"></vue-slider>
</template>

<script>
export default {
  name: 'ProgressBar',
  data () {
    return {
      value: 20
    }
  }
}
</script>

<style lang="less">

</style>
