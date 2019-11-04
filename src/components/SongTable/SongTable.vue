<template>
  <a-table :rowKey="record => record.id"
             :columns="columns"
             :dataSource="dataSource"
             :pagination="false"
             :customRow="customRow"
    >
      <div slot="songIndex" slot-scope="text, record, index">
        {{ handleIndex(index) }}
      </div>
      <div slot="picUrl" slot-scope="picUrl">
        <img :src=picUrl alt="" style="width: 60px;border-radius: 5px">
      </div>
      <div  slot="name" slot-scope="name, record, index">
      <span class="song-common">
      {{name}}
      </span>
        <a-icon v-if="record.mv !== 0" type="youtube" style="color: red" @click.stop="onClickMv(record.mv)"/>
      </div>
      <div slot="artist" slot-scope="artist" class="song-common">
      <span v-for="(art,index) in artist" :key="index">
        <span @click.stop="onClickArtist(art)" class="artist-name">{{art.name}}</span>
        <span v-if="index+1<artist.length"> / </span>
      </span>
      </div>
      <div slot="album" slot-scope="album"  class="song-common" @click.stop="onClickAlbum(album)" >{{album.name}}</div>
    </a-table>
</template>
<script>
import { addZero } from 'utils/time'
const COLUMNS = [
  {
    align: 'right',
    scopedSlots: { customRender: 'songIndex' }
  },
  {
    align: 'center',
    dataIndex: 'picUrl',
    scopedSlots: { customRender: 'picUrl' }
  },
  {
    title: '音乐标题',
    dataIndex: 'name',
    scopedSlots: { customRender: 'name' }
  },
  {
    title: '歌手',
    dataIndex: 'artist',
    scopedSlots: { customRender: 'artist' }
  },
  {
    title: '专辑',
    dataIndex: 'album',
    scopedSlots: { customRender: 'album' }
  },
  {
    title: '时长',
    dataIndex: 'duration'
  }
]
export default {
  name: 'SongTable',
  data () {
    return {
      loading: true,
      columns: COLUMNS
    }
  },
  props: {
    dataSource: {
      type: Array,
      default: () => []
    }
  },
  computed: {

  },
  methods: {
    handleIndex (index) {
      return addZero(index + 1)
    },
    onClickRow (record, index) {
      this.$emit('onClickSong', record, index)
    },
    onClickArtist (artist) {
      this.$emit('onClickArtist', artist)
    },
    onClickAlbum (album) {
      this.$emit('onClickAlbum', album)
    },
    onClickMv (mv) {
      console.log(mv)
    },
    customRow (record, index) {
      return {
        props: {
          padding: 0
        },
        on: {
          click: (event) => this.onClickRow(record, index)
        }
      }
    }
  }
}
</script>

<style lang="less">
  @import "../../styles/mixin.less";
  .ant-table-thead > tr > th, .ant-table-tbody > tr > td {
    padding: 10px;
    border-bottom: 0
  }
  .song-common{
    width: 100%;
    max-width: 400px;
    align-items: center;
    .one-line()
  }
  .artist-name{
    cursor: pointer;
    &:hover{
      color: #ff6921;
    }
  }
</style>
