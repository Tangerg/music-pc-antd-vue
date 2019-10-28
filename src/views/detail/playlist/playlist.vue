<template>
  <div>
    <info-header :Info="info"></info-header>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import InfoHeader from '@c/InfoHeader'
export default {
  name: 'playlist',
  data () {
    return {
      info: {
        type: 1,
        content: this.listInfo
      }
    }
  },
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
