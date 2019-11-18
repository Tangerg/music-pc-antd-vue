<template>
  <div class="song-table">
    <a-table :rowKey="record => record.id"
             :columns="columns"
             :dataSource="dataSource"
             :pagination="false"
             :customRow="customRow"
             :loading="dataSource.length === 0"
    >
        <div class="table-cell" slot="songIndex" slot-scope="text, record, index">
          <div class="cell-common">
            {{ handleIndex(index) }}
          </div>
        </div>
        <div class="table-cell" slot="picUrl" slot-scope="picUrl" v-if="picUrl">
          <div class="cell-common song-pic" >
            <img v-lazy=picUrl alt="封面">
          </div>
        </div>
        <div class="table-cell" slot="name" slot-scope="name, record, index">
            <div class="cell-common song-name">
              <span class="content-text name-text">{{name}}</span>
              <a-icon class="mv-icon" v-if="record.mv !== 0" type="youtube" @click.stop="onClickMv(record.mv)"/>
            </div>
        </div>
        <div class="table-cell" slot="artist" slot-scope="artist">
          <div class="cell-common">
            <span v-for="(art,index) in artist" :key="index" class="content-text">
              <span @click.stop="onClickArtist(art)" class="artist-name">{{art.name}}</span>
              <span v-if="index+1<artist.length"> / </span>
            </span>
          </div>
        </div>
        <div class="table-cell" slot="album" slot-scope="album">
          <div class="cell-common">
            <span class="content-text">
              {{album.name}}
            </span>
          </div>
        </div>
        <div class="table-cell" slot="durationStr" slot-scope="durationStr">
          <div class="cell-common">
            {{durationStr}}
          </div>
        </div>
    </a-table>
  </div>
</template>
<script>
import { addZero } from 'utils/time'
const COLUMNS = [
  {
    align: 'right',
    scopedSlots: { customRender: 'songIndex' },
    width: '50px'
  },
  {
    align: 'center',
    dataIndex: 'picUrl',
    scopedSlots: { customRender: 'picUrl' },
    width: '100px'
  },
  {
    title: '音乐标题',
    dataIndex: 'name',
    scopedSlots: { customRender: 'name' },
    width: '25%'
  },
  {
    title: '歌手',
    dataIndex: 'artist',
    scopedSlots: { customRender: 'artist' },
    width: '25%'
  },
  {
    title: '专辑',
    dataIndex: 'album',
    scopedSlots: { customRender: 'album' },
    width: '30%'
  },
  {
    title: '时长',
    dataIndex: 'durationStr',
    scopedSlots: { customRender: 'durationStr' },
    width: '100px'
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
        },
        on: {
          click: (event) => this.onClickRow(record, index)
        }
      }
    }
  },
  components: {
  }
}
</script>

<style lang="less">
  @import "~styles/mixin.less";
  .ant-table-thead > tr > th{
    padding: 10px;
    background: var(--body-bg-color--) !important;
    color: var(--body-font-color-1--) !important;
  }
  .ant-table-tbody > tr > td {
    padding: 10px;
    border-bottom: 0 !important;
    vertical-align: middle !important;
  }
  .song-table{
    width: 100%;
    table{
      table-layout: fixed !important;
      background: var(--body-bg-color--) !important;
    }
    .table-cell{
      .no-wrap();
      .cell-common{
        .no-wrap();
        color: var(--body-font-color-2--);
        .content-text{
          .no-wrap();
        }
      }
      .song-pic{
        img{
          width: 60px;
          height: 60px;
        }
      }
      .song-name{
        display: flex;
        align-items: center;
        flex: 0 0 24px;
        .name-text{
          color: var(--body-font-color-1--);
        }
        .mv-icon{
          margin-left: 5px;
          cursor: pointer;
          color: red;
        }
      }
      .artist-name{
        cursor: pointer;
        &:hover{
          color: var(--body-font-color-1--);
        }
      }
    }
  }
</style>
