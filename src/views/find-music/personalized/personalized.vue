<template>
  <div>
    <banner-carousel :banners="bannerList"></banner-carousel>
    <column-header :column=columnList.recommendList></column-header>
    <playlist-cover :coverList="playList" @onClickCover="handleClickCover"  @onClickPlay="handleClickPlay"></playlist-cover>
    <column-header :column=columnList.exclusiveDistribution></column-header>
    <column-header :column=columnList.latestMusic></column-header>
    <column-header :column=columnList.recommendMV></column-header>
  </div>
</template>

<script>
/*
*   引用顺序 1官方 2配置 3组件 4类方法 5工具函数 6api
* */
import config from '@/config/config'
import { COLUMN_LIST } from '@/config/filler'

import BannerCarousel from '@c/BannerCarousel'
import ColumnHeader from '@c/ColumnHeader'
import { PlaylistCover } from '@c/CoverList'

import { createBannerByRecommend } from '@/class/banner'
import { createPlaylistCover } from '@/class/cover'

import { getBanner } from 'api/banner'
import { getPersonalized } from 'api/playlist'

export default {
  name: 'personalized',
  data () {
    return {
      columnList: COLUMN_LIST,
      bannerList: [],
      playList: []
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      this.createBannerList()
      this.createPlayList()
    },
    createBannerList () {
      getBanner().then((res) => {
        if (res.code === config.ERR_OK) {
          this.bannerList = res.banners.map((banner) => {
            return createBannerByRecommend(banner)
          })
        }
      })
    },
    createPlayList () {
      getPersonalized().then((res) => {
        if (res.code === config.ERR_OK) {
          this.playList = res.result.map((playList) => {
            return createPlaylistCover(playList)
          }).slice(0, 30)
          console.log(this.playList)
        }
      })
    },
    handleClickCover (cover) {
      this.$router.push(`/song-list/${cover.playlist.id}`)
    },
    handleClickPlay (cover) {
      console.log(cover)
    }
  },
  components: {
    BannerCarousel,
    ColumnHeader,
    PlaylistCover
  }
}
</script>

<style lang="less">
</style>
