<template>
  <a-layout-header :style=headerStyle>
  </a-layout-header>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      headerStyle: {
        padding: 0,
        color: 'white',
        fontSize: '24px',
        textAlign: 'center',
        backgroundColor: '#001529'
      }
    }
  },
  methods: {
  }
}
</script>

<style lang="less">
</style>
