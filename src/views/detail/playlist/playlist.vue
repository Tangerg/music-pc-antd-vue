<template>
  <div class="playlist-detail">
    <playlist-header :Content="playlist" v-if="playlist.creator"></playlist-header>
    <info-tab :tabList="tabList" @changeTab="handleChangeTab">
      <a-input-search slot="tab-slot" placeholder="搜索歌单音乐" style="width: 150px"  />
      <a-radio-group defaultValue="a" buttonStyle="solid">
        <a-radio-button value="a"><a-icon type="border-bottom" /></a-radio-button>
        <a-radio-button value="b"><a-icon type="border-horizontal" /></a-radio-button>
        <a-radio-button value="c"><a-icon type="border-left" /></a-radio-button>
      </a-radio-group>
    </info-tab>
    <div v-if="activeKey === tabList[0].key">歌曲界面</div>
    <div v-if="activeKey === tabList[1].key">评论界面</div>
    <div v-if="activeKey === tabList[2].key">收藏界面</div>
  </div>
</template>

<script>
import { getPlayList } from 'api/songList'

import { createPlaylist } from '@/class/playlist'

import config from '@/config/config'

import { PlaylistHeader } from '@c/InfoHeader'
import InfoTab from '@c/InfoTab'
const INDEX_KEY = 'playlist'
export default {
  name: 'playlist',
  data () {
    return {
      playlist: {},
      tabList: [
        {
          title: '歌曲列表',
          key: 'playlist'
        },
        {
          title: '评论',
          key: 'comment'
        },
        {
          title: '收藏者',
          key: 'subscribed'
        }
      ],
      activeKey: INDEX_KEY
    }
  },
  mounted () {
    this.initPlayList()
  },
  computed: {
  },
  methods: {
    initPlayList () {
      getPlayList(this.$route.params.id).then((res) => {
        if (res.code === config.ERR_OK) {
          this.playlist = createPlaylist(res.playlist)
          this.tabList[1].title = `评论(${this.playlist.commentCount})`
        }
      })
    },
    handleChangeTab (key) {
      this.activeKey = key
    }
  },
  components: {
    PlaylistHeader,
    InfoTab
  }
}
</script>

<style lang="less">
  .playlist-detail{
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
  }
</style>
