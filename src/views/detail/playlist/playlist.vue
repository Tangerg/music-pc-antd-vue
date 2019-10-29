<template>
  <div>
    <info-header :Info="info" v-if="this.listInfo"></info-header>
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
        content: ''
      }
    }
  },
  mounted () {
    this.addContent()
  },
  computed: {
    ...mapGetters([
      'listInfo'
    ])
  },
  methods: {
    addContent () {
      this.info.content = this.listInfo
    }
  },
  components: {
    InfoHeader
  }
}
</script>

<style lang="less">
</style>
