<template>
  <div>
    <artist-header :content="artistInfo" :mvSize="this.mvList.length"></artist-header>
    <info-tab :tabList="tabList"></info-tab>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import config from '@/config/config'

import InfoTab from '@c/InfoTab'
import { ArtistHeader } from '@c/InfoHeader'

import { getArtistMv } from 'api/artist'
export default {
  name: 'artist',
  data () {
    return {
      mvList: [],
      tabList: [
        {
          title: '热门50首',
          key: 'playlist'
        },
        {
          title: '专辑',
          key: 'comment'
        },
        {
          title: 'MV',
          key: 'subscribed'
        },
        {
          title: '歌手详情',
          key: 'subscribed1'
        },
        {
          title: '相似歌手',
          key: 'subscribed2'
        }
      ]
    }
  },
  mounted () {
    this.initArtistMv()
  },
  computed: {
    ...mapGetters([
      'artistInfo'
    ])
  },
  methods: {
    initArtistMv () {
      getArtistMv(this.$route.params.id).then((res) => {
        if (res.code === config.ERR_OK) {
          this.mvList = res.mvs
        }
      })
    }
  },
  components: {
    ArtistHeader,
    InfoTab
  }
}
</script>

<style lang="less">

</style>
