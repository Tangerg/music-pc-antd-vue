<template>
  <div class="playlist-detail" v-if="playlist.id">
    <playlist-header :content="playlist" v-if="playlist.creator" @onClickPlayAll="playAll"></playlist-header>
    <info-tab :tabList="tabList" @onChangeTab="handleChangeTab">
      <a-input-search v-show="activeKey === tabList[0].key" slot="tab-slot" placeholder="搜索歌单音乐" style="width: 150px"  />
    </info-tab>
    <div v-show="activeKey === tabList[0].key" class="playlist-song-table">
      <SongTable v-once :dataSource="songList" @onClickSong="clickSong" @onClickArtist="clickArtist" @onClickAlbum="clickAlbum"></SongTable>
    </div>
    <div v-show="activeKey === tabList[1].key" class="playlist-comment">
      <div class="playlist-comment-item">
        <div>精彩评论</div>
        <comment-list :commentList="hotComments"></comment-list>
      </div>
      <div class="playlist-comment-item">
        <div>最新评论</div>
        <comment-list :commentList="comments"></comment-list>
      </div>
    </div>
    <div v-show="activeKey === tabList[2].key">收藏界面</div>
  </div>
</template>

<script>
/*
*   引用顺序 1官方 2配置 3组件 4类方法 5工具函数 6api
* */
import { mapActions } from 'vuex'

import config from '@/config/config'

import InfoTab from '@c/InfoTab'
import SongTable from '@c/SongTable'
import CommentList from '@c/CommentList'
import { PlaylistHeader } from '@c/InfoHeader'

import { createPlaylistDesc } from '@/class/playlist'
import { createSong } from '@/class/song'
import { createComment } from '@/class/comment'

import { getPlaylistDetail } from 'api/playlist'
import { getPlaylistComment } from 'api/comment'

const INDEX_KEY = 'playlist'
export default {
  name: 'playlist',
  data () {
    return {
      playlist: {},
      songList: [],
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
      activeKey: INDEX_KEY,
      hotComments: [],
      comments: []
    }
  },
  mounted () {
    this.initPlayList()
  },
  computed: {
  },
  methods: {
    ...mapActions([
      'sequencePlay',
      'selectPlay'
    ]),
    async initPlayList () {
      getPlaylistDetail(this.$route.params.id).then((res) => {
        if (res.code === config.ERR_OK) {
          this.playlist = createPlaylistDesc(res.playlist)
          this.tabList[1].title = `评论(${this.playlist.commentCount})`
          this.songList = res.playlist.tracks.map((track) => {
            return createSong(track)
          })
          this.initPlaylistComment()
          console.log(this.songList)
        }
      })
    },
    initPlaylistComment () {
      getPlaylistComment(this.$route.params.id).then((res) => {
        if (res.code === config.ERR_OK) {
          this.hotComments = res.hotComments.map((comment) => {
            return createComment(comment)
          })
          this.comments = res.comments.map((comment) => {
            return createComment(comment)
          })
        }
      })
    },
    clickSong (record, index) {
      this.selectPlay({
        list: this.songList,
        index: index
      })
    },
    clickArtist (artist) {
      console.log(artist)
    },
    clickAlbum (album) {
      console.log(album)
    },
    handleChangeTab (key) {
      this.activeKey = key
    },
    playAll () {
      this.sequencePlay({
        list: this.songList
      })
    }
  },
  components: {
    PlaylistHeader,
    InfoTab,
    SongTable,
    CommentList
  }
}
</script>

<style lang="less">
  .playlist-detail{
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    background-color: white;
    .playlist-song-table{
      width: 100%;
    }
    .playlist-comment{
      padding: 20px 30px;
    }
  }
</style>
