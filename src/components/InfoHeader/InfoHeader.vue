<template>
  <div class="info-header">
    <!--信息上半部分-->
    <div class="info-main">

      <!--左侧封面图-->
      <div class="info-main-left">
        <div class="info-cover" >
          <!--<div class="info-cover-album" ></div>-->
          <!--<img src="https://p2.music.126.net/16YjofanqyKk3GTQz4LhQw==/109951163463413693.jpg?param=300y300" alt="封面">-->
          <img :src=Info.content.coverImg alt="封面">
        </div>
      </div>
      <!--左侧封面图-->

      <!--中部三选一-->
      <div class="info-main-center">
        <!--由歌单界面进入显示-->
        <div class="info-center info-playlist">
          <div class="info-title playlist-title">
            <span class="info-type">歌单</span>
            <span>耳机里的避风港 | 如果累了，就来这里停泊</span>
          </div>
          <div class="playlist-create">
            <a-avatar src="http://p1.music.126.net/QWMV-Ru_6149AKe0mCBXKg==/1420569024374784.jpg" />
            <div class="create-creater">网易云音乐</div>
            <div class="create-time">2019-10-25创建</div>
          </div>
          <div class="btn-group playlist-operate">
            <a-button icon="play-circle" type="primary" class="operate-btn" >播放全部</a-button>
            <a-button icon="folder-add" type="primary" class="operate-btn" >收藏(254562)</a-button>
            <a-button icon="share-alt" type="primary" class="operate-btn" >分享(236)</a-button>
          </div>
          <div class="info-text-group">
            <div class="text-item playlist-tag">标签：日语</div>
            <div class="text-item" :class="introduceClass">简介：秋天该很好，若你有音乐相伴。 这里是来自樱花酱的日语一周新歌速递。 最新一周日语新歌大礼包准时送达，请查收^_^
              秋天该很好，若你有音乐相伴。 这里是来自樱花酱的日语一周新歌速递。 最新一周日语新歌大礼包准时送达，请查收^_^
              秋天该很好，若你有音乐相伴。 这里是来自樱花酱的日语一周新歌速递。 最新一周日语新歌大礼包准时送达，请查收^_^
              秋天该很好，若你有音乐相伴。 这里是来自樱花酱的日语一周新歌速递。 最新一周日语新歌大礼包准时送达，请查收^_^
              秋天该很好，若你有音乐相伴。 这里是来自樱花酱的日语一周新歌速递。 最新一周日语新歌大礼包准时送达，请查收^_^
            </div>
          </div>
        </div>
        <!--由歌单界面进入显示-->

        <!--由歌手界面进入显示-->
        <div class="info-center info-singer" >
          <div class="info-title singer-title">
            <span class="info-type">歌手</span>
            <span>G.E.M.邓紫棋</span>
          </div>
          <div class="singer-nickname">G.E.M.</div>
          <div class="info-text-group">
            <div class="text-item singer-count-item"><a-icon type="customer-service" /> 单曲数：323</div>
            <div class="text-item singer-count-item"><a-icon type="table" /> 专辑数：43</div>
            <div class="text-item singer-count-item"><a-icon type="youtube" /> MV数：65</div>
          </div>
        </div>
        <!--由歌手界面进入显示-->

        <!--由专辑界面进入显示-->
        <div class="info-center info-album" >
          <div class="info-title album-title">
            <span class="info-type">专辑</span>
            <span>与火星的孩子对话</span>
          </div>
          <div class="btn-group album-operate">
            <a-button icon="play-circle" type="primary" class="operate-btn" >播放全部</a-button>
            <a-button icon="folder-add" type="primary" class="operate-btn" >收藏(254562)</a-button>
            <a-button icon="share-alt" type="primary" class="operate-btn" >分享(236)</a-button>
          </div>
          <div class="info-text-group">
            <div class="text-item album-artist">歌手：华晨宇</div>
            <div class="text-item album-time">时间：2019-10-28</div>
          </div>
        </div>
        <!--由专辑界面进入显示-->
      </div>
      <!--中部三选一-->

      <div class="info-main-right">

        <!--由专辑界面进入显示-->
        <div class="info-playlist-right">
          <div class="info-playlist-count">
            <div class="songs-count">
              <div>歌曲数</div>
              <div>56</div>
            </div>
            <div class="play-count">
              <div>播放数</div>
              <div>2亿2000万</div>
            </div>
          </div>
          <div class="list-introduce-more">
            <a-icon type="up" />
          </div>
        </div>
        <!--由专辑界面进入显示-->
        <!--由专辑界面进入显示-->
        <div class="info-singer-right">
          <div class="info-singer-collect">
            <a-button icon="folder-add" type="primary" @click="showMore">收藏</a-button>
          </div>
        </div>
        <!--由专辑界面进入显示-->
      </div>
    </div>
    <!--信息上半部分-->

    <div class="info-column">下方操作</div>
  </div>
</template>

<script>
export default {
  name: 'InfoHeader',
  props: {
    Info: {
      type: Object,
      default: () => {
      }
    }
  },
  data () {
    return {
      overflow: true
    }
  },
  computed: {
    introduceClass () {
      return this.overflow ? 'playlist-introduce-fold' : 'playlist-introduce'
    }
  },
  methods: {
    showMore () {
      this.overflow = !this.overflow
    }
  }
}
</script>

<style lang="less">
  .info-header{
    width: 100%;
    position: relative;
    .info-main{
      display: flex;
      padding: 30px;
      .info-main-left{
        margin-right: 30px;
        .info-cover{
          width: 200px;
          position: relative;
          .info-cover-album{
            width: 200px;
            height: 100%;
            position: absolute;
            left: 23px;
            background-image: url("../../assets/album.png");
          }
          img{
            width: 200px;
          }
        }
      }
      .info-main-center{
        max-width: 600px;
        /*公共样式*/
        .info-center{
          display: flex;
          flex-direction: column;
          .info-title{
            display: flex;
            font-size:23px;
            align-items: center;
          }
          .info-type{
            font-size: 12px;
            color: white;
            background-color: red;
            border-radius: 2px;
            padding: 2px 5px;
            margin-right: 5px;
          }
          .btn-group{
            margin: 10px 0 0 0;
            .operate-btn{
              margin-right: 15px;
            }
          }
          .info-text-group{
            margin: 10px 0 0 0;
            .text-item{
              margin: 5px 0;
            }
          }
        }
        /*公共样式*/
        .info-playlist{
          .playlist-create{
            display: flex;
            margin: 5px 0;
            align-items: center;
            .create-creater{
              margin: 0 20px 0 10px;
              cursor: pointer;
              font-size: 16px;
            }
            .create-time{
              color: #585858;
              font-size: 14px;
              font-weight: lighter;
            }
          }
          .playlist-introduce{
            width: 100%;
            line-height: 20px;
            text-align: left;
            &-fold{
              line-height: 20px;
              text-overflow:ellipsis;
              display: -webkit-box;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;
              overflow: hidden;
            }
          }
        }
        .info-singer{
          .singer-nickname{
            padding-left: 40px;
            font-size: 14px;
            margin: 5px 0;
          }
        }
      }
      .info-main-right{
        margin-left: auto;
        position: relative;
        .info-playlist-count{
          min-width: 150px;
          display: flex;
          font-size: 12px;
          text-align: right;
          .songs-count{
            padding-right: 20px;
            margin-right: 20px;
            border-right: 1px solid dimgray;
          }
          .play-count{
            //text-align: left;
          }
        }
        .list-introduce-more{
          position: absolute;
          bottom: 10px;
          right: 10px;
          &:hover{
            cursor: pointer;
          }
        }
        .info-singer-collect{
          min-width: 100px;
        }

      }
    }
  }
</style>
