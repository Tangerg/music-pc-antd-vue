<template>
  <div>
    <banner-carousel :banners="bannerList"></banner-carousel>
    <column-header :column=columnList.recommendList></column-header>
    <playlist-cover :coverList="playList" @onClickCover="clickPlaylist"  @onClickPlay="clickPlay"></playlist-cover>
    <column-header :column=columnList.exclusiveDistribution></column-header>
    <column-header :column=columnList.latestMusic></column-header>
    <song-card-list :songListArr="songListArr"></song-card-list>
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
import { SongCardList } from '@c/HorizontalCardList'
import { PlaylistCover } from '@c/CoverList'

import { createBannerByRecommend } from '@/class/banner'
import { createCoverByPlaylist } from '@/class/cover'
import { createSong } from '@/class/song'

import { getBanner } from 'api/banner'
import { getRecommendPlaylist } from 'api/playlist'
import { getRecommendSong } from 'api/song'

export default {
  name: 'personalized',
  data () {
    return {
      columnList: COLUMN_LIST,
      bannerList: [],
      playList: [],
      songListArr: []
    }
  },
  mounted () {
    this.initPersonalized()
  },
  methods: {
    async initPersonalized () {
      await this.createBannerList()
      await this.createPlayList()
      await this.createNewSong()
    },
    async createBannerList () {
      const { code, banners } = await getBanner()
      if (code === config.ERR_OK) {
        this.bannerList = banners.map((banner) => {
          return createBannerByRecommend(banner)
        })
      }
    },
    async createPlayList () {
      const { code, result } = await getRecommendPlaylist()
      if (code === config.ERR_OK) {
        this.playList = result.map((playList) => {
          return createCoverByPlaylist(playList)
        }).slice(0, 30)
      }
    },
    async createNewSong () {
      const { code, result } = await getRecommendSong()
      if (code === config.ERR_OK) {
        const songArr = result.map((item) => {
          return createSong(item.song)
        })
        this.songListArr = this.splitSongArr(songArr)
        console.log(this.songListArr)
      }
    },
    splitSongArr (songArr) {
      const limit = Math.ceil(songArr.length / 2)
      return [
        songArr.slice(0, limit),
        songArr.slice(limit, songArr.length)
      ]
    },
    clickPlaylist (cover) {
      this.$router.push(`/song-list/${cover.playlist.id}`)
    },
    clickPlay (cover) {
    }
  },
  components: {
    BannerCarousel,
    ColumnHeader,
    PlaylistCover,
    SongCardList
  }
}
</script>

<style lang="less">
</style>
