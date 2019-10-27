<template>
  <div>
    <info-header></info-header>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import InfoHeader from '@c/InfoHeader'
export default {
  name: 'playlist',
  computed: {
    ...mapGetters([
      'listInfo'
    ])
  },
  components: {
    InfoHeader
  }
}
</script>

<style lang="less">
</style>
