<template>
<div>
  <artist-filter @onStateChange="onStateChange"></artist-filter>
  <artist-cover :coverList="artistList" @onClickCover="onClickCover"></artist-cover>
</div>
</template>

<script>
/*
*   引用顺序 1官方 2配置 3组件 4类方法 5工具函数 6api
* */
import config from '@/config/config'

import { ArtistCover } from '@c/CoverList'

import { createCoverByArtist } from '@/class/cover'

import ArtistFilter from '@c/ArtistFilter'
import { getArtist } from 'api/artist'
export default {
  name: 'singer',
  data () {
    return {
      artistList: []
    }
  },
  mounted () {
    this.getArtistByState(1001, '#')
  },
  methods: {
    onClickCover (cover) {
      this.$router.push(`/artist/${cover.artist.id}`)
    },
    async onStateChange (code, initial) {
      await this.getArtistByState(code, initial)
    },
    async getArtistByState (stateCode, stateInitial) {
      const { code, artists } = await getArtist(stateCode, stateInitial)
      if (code === config.ERR_OK) {
        this.artistList = artists.map((artist) => {
          return createCoverByArtist(artist)
        })
      }
    }
  },
  components: {
    ArtistFilter,
    ArtistCover
  }
}
</script>

<style lang="less">

</style>
