<template>
  <div>
<!--
    <banner-carousel :banners="banners"></banner-carousel>
-->
    <column-header title="歌单"></column-header>
    <cover-list :coverList="songList"></cover-list>
  </div>
</template>

<script>
import BannerCarousel from '@c/BannerCarousel'
import ColumnHeader from '@c/ColumnHeader'
import CoverList from '@c/CoverList'
import { createBanner } from '@/class/banner'
import { createSongListCover } from '@/class/cover'
import { getBanner } from 'api/banner'
import { getPersonalized } from 'api/songList'
import config from '@/config/config'
export default {
  name: 'personal-recommend',
  data () {
    return {
      banners: [],
      songList: []
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      this.createBanner()
      this.getPlayList()
    },
    createBanner () {
      getBanner().then((res) => {
        if (res.code === config.ERR_OK) {
          this.banners = res.banners.map((banner) => {
            return createBanner(banner)
          })
        }
      })
    },
    getPlayList () {
      getPersonalized().then((res) => {
        if (res.code === config.ERR_OK) {
          this.songList = res.result.map((songList) => {
            return createSongListCover(songList)
          }).slice(0, 20)
        }
      })
    }
  },
  components: {
    BannerCarousel,
    ColumnHeader,
    CoverList
  }
}
</script>

<style lang="less">

</style>
