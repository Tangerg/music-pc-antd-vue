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
import { mapMutations } from 'vuex'
import config from '@/config/config'

import { ArtistCover } from '@c/CoverList'

import { createArtistCover } from '@/class/cover'

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
    ...mapMutations({
      setArtistInfo: 'SET_ARTIST_INFO'
    }),
    onClickCover (cover) {
      this.$router.push(`/artist/${cover.artist.id}`)
      this.setArtistInfo(cover.artist)
    },
    onStateChange (code, initial) {
      this.getArtistByState(code, initial)
    },
    getArtistByState (code, initial) {
      getArtist(code, initial).then((res) => {
        if (res.code === config.ERR_OK) {
          this.artistList = res.artists.map((artist) => {
            return createArtistCover(artist)
          })
        }
      })
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
