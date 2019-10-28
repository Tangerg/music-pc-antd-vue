<template>
  <div class="info-header">
    <div class="info-main">
      <div class="info-main-left">
        <div class="info-cover" >
          <div class="info-cover-album"></div>
          <img src="https://p1.music.126.net/mEQ--Oa7OlUeygiD38T1ag==/109951164448035953.jpg" alt="封面">
        </div>
      </div>
      <div class="info-main-center">
        <div class="info-playlist" >
          <div class="title list-title">
            <span class="type info-type">歌单</span>
            <span>耳机里的避风港 | 如果累了，就来这里停泊</span>
          </div>
          <div class="list-create">
            <a-avatar src="http://p1.music.126.net/QWMV-Ru_6149AKe0mCBXKg==/1420569024374784.jpg" />
            <div class="create-creater">网易云音乐</div>
            <div class="create-time">2019-10-25创建</div>
          </div>
          <div class="list-operate">
            <a-button icon="play-circle" type="primary" class="btn" >播放全部</a-button>
            <a-button icon="folder-add" type="primary" class="btn" >收藏(254562)</a-button>
            <a-button icon="share-alt" type="primary" class="btn" >分享(236)</a-button>
          </div>
          <div class="list-tag">标签：日语</div>
          <div :class="introduceClass">简介：秋天该很好，若你有音乐相伴。 这里是来自樱花酱的日语一周新歌速递。 最新一周日语新歌大礼包准时送达，请查收^_^
            秋天该很好，若你有音乐相伴。 这里是来自樱花酱的日语一周新歌速递。 最新一周日语新歌大礼包准时送达，请查收^_^
            秋天该很好，若你有音乐相伴。 这里是来自樱花酱的日语一周新歌速递。 最新一周日语新歌大礼包准时送达，请查收^_^
            秋天该很好，若你有音乐相伴。 这里是来自樱花酱的日语一周新歌速递。 最新一周日语新歌大礼包准时送达，请查收^_^
            秋天该很好，若你有音乐相伴。 这里是来自樱花酱的日语一周新歌速递。 最新一周日语新歌大礼包准时送达，请查收^_^
          </div>
        </div>
        <div class="info-singer" >
          <div class="title singer-title">
            <span class="type info-type">歌手</span>
            <span>G.E.M.邓紫棋</span>
          </div>
          <div class="singer-nickname">G.E.M.</div>
          <div class="singer-count"><a-icon type="customer-service" /> 单曲数：323</div>
          <div class="singer-count"><a-icon type="table" /> 专辑数：43</div>
          <div class="singer-count"><a-icon type="youtube" /> MV数：65</div>
        </div>
        <div class="info-album">
          <div class="title singer-title">
            <span class="type info-type">专辑</span>
            <div>与火星的孩子对话</div>
          </div>
          <div class="list-operate">
            <a-button icon="play-circle" type="primary" class="btn" >播放全部</a-button>
            <a-button icon="folder-add" type="primary" class="btn" >收藏(254562)</a-button>
            <a-button icon="share-alt" type="primary" class="btn" >分享(236)</a-button>
          </div>
          <div class="list-tag">歌手：华晨宇</div>
          <div class="list-tag">时间：2019-10-28</div>
        </div>
      </div>
      <div class="info-main-right">
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
        <div class="info-singer-right">
          <div class="info-singer-collect">
            <a-button icon="folder-add" type="primary">收藏</a-button>
          </div>
        </div>
      </div>
    </div>
    <div class="info-column">下方操作</div>
  </div>
</template>

<script>
export default {
  name: 'InfoHeader',
  data () {
    return {
      overflow: true
    }
  },
  computed: {
    introduceClass () {
      return this.overflow ? 'list-introduce-fold' : 'list-introduce'
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
        .type{
          font-size: 13px;
          color: white;
          background-color: red;
          border-radius: 2px;
          padding: 2px 5px;
          margin-right: 5px;
        }
        .title{
          display: flex;
          font-size:23px;
          align-items: center;
        }
        .info-playlist{
          .list-create{
            display: flex;
            margin: 10px 0;
            align-items: center;
            .create-creater{
              margin: 0 20px 0 10px;
            }
            .create-time{
              color: dimgray;
              font-size: 12px;
            }
          }
          .list-operate{
            margin: 10px 0;
            .btn{
              margin-right: 15px;
            }
          }
          .list-tag{
            margin: 10px 0;
          }
          .list-introduce{
            width: 100%;
            line-height: 20px;
            text-align: left;
            &-fold{
              line-height: 20px;
              text-overflow:ellipsis;
              display: -webkit-box;
              -webkit-line-clamp: 2; //设置多行的行数
              -webkit-box-orient: vertical;
              overflow: hidden;
            }
          }
        }
        .info-singer{
          .singer-title{
            margin-bottom: 10px;
          }
          .singer-nickname{
            padding-left: 40px;
            font-size: 14px;
            margin: 10px 0;
          }
          .singer-count{
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
