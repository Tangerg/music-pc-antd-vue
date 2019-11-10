<template>
  <vue-slider
    v-model="value"
    :max=max
    :min=min
    :interval=interval
    dotSize="10"
    :lazy="true"
    :contained="true"
    :dragOnClick="true"
    tooltip="none"
    @change="changeValue"
  ></vue-slider>
</template>

<script>
export default {
  name: 'ProgressBar',
  props: {
    percent: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      value: 0,
      max: 1,
      min: 0,
      interval: 0.001
    }
  },
  watch: {
    percent () {
      this.value = this.percent
    }
  },
  methods: {
    changeValue (value) {
      this.$emit('onValueChange', value)
    }
  },
  components: {
  }
}
</script>

<style lang="less">

</style>
