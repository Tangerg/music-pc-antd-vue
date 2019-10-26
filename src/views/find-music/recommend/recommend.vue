<!--suppress ALL -->
<template>
  <div>
    <banner-carousel :banners="banners"></banner-carousel>
    <column-header :column=columnList.recommendList></column-header>
    <column-header :column=columnList.exclusiveDistribution></column-header>
    <column-header :column=columnList.latestMusic></column-header>
    <column-header :column=columnList.recommendMV></column-header>
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
const COLUMN_LIST = {
  recommendList: {
    title: '推荐歌单',
    route: 'recommendList',
    show: true
  },
  exclusiveDistribution: {
    title: '独家放送',
    route: 'exclusiveDistribution',
    show: true
  },
  latestMusic: {
    title: '最新音乐',
    route: 'latestMusic',
    show: true
  },
  recommendMV: {
    title: '推荐MV',
    route: 'recommendMV',
    show: false
  }
}
export default {
  name: 'recommend',
  data () {
    return {
      columnList: COLUMN_LIST,
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
          console.log(this.banners)
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
