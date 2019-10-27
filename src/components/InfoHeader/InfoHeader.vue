<template>
  <div class="info-header">
    <div class="info-main">
      <div class="info-cover" >
        <img src="https://p1.music.126.net/mEQ--Oa7OlUeygiD38T1ag==/109951164448035953.jpg" alt="封面">
      </div>
      <div class="info-playlist">
        <div class="list-title">
          <span class="info-type">歌单</span>
          <span>耳机里的避风港 | 如果累了，就来这里停泊如果累了，就来这里停泊如果累了，就来这里停泊</span>
        </div>
        <div class="list-create">
          <a-avatar src="http://p1.music.126.net/QWMV-Ru_6149AKe0mCBXKg==/1420569024374784.jpg" />
          <div class="create-creater">网易云音乐</div>
          <div class="create-time">2019-10-25创建</div>
        </div>
        <div class="list-operate">
          <a-button icon="play-circle" class="btn" >播放全部</a-button>
          <a-button icon="folder-add" class="btn" >收藏(254562)</a-button>
          <a-button icon="share-alt" class="btn" >分享(236)</a-button>
        </div>
        <div class="list-tag">标签：日语</div>
        <div class="list-introduce" ref="introduce">简介：秋天该很好，若你有音乐相伴。 这里是来自樱花酱的日语一周新歌速递。 最新一周日语新歌大礼包准时送达，请查收^_^ 这个美妙的午后，邂逅最动听的音乐，
          给你最愉快的心情。   BALLISTIK BOYZ from EXILE TRIBE令人期待的新单曲《44RAIDERS》来啦~~超强的节奏感让人不由得在脑袋里蹦迪~
          给你最愉快的心情。   BALLISTIK BOYZ from EXILE TRIBE令人期待的新单曲《44RAIDERS》来啦~~超强的节奏感让人不由得在脑袋里蹦迪~
          给你最愉快的心情。   BALLISTIK BOYZ from EXILE TRIBE令人期待的新单曲《44RAIDERS》来啦~~超强的节奏感让人不由得在脑袋里蹦迪~
          给你最愉快的心情。   BALLISTIK BOYZ from EXILE TRIBE令人期待的新单曲《44RAIDERS》来啦~~超强的节奏感让人不由得在脑袋里蹦迪~
          给你最愉快的心情。   BALLISTIK BOYZ from EXILE TRIBE令人期待的新单曲《44RAIDERS》来啦~~超强的节奏感让人不由得在脑袋里蹦迪~
          新晋女歌手Teresa在日本作为歌手正式出道发行</div>
      </div>
      <div><a-button type="primary" @click="showMore">Primary</a-button></div>
    </div>
    <div class="info-column">下方操作</div>
  </div>
</template>

<script>
export default {
  name: 'InfoHeader',
  methods: {
    showMore () {
      if (this.$refs.introduce.style.overflow === 'hidden') {
        this.$refs.introduce.style.overflow = 'visible'
      } else {
        this.$refs.introduce.style.overflow = 'hidden'
      }
    }
  }
}
</script>

<style lang="less">
  .info-header{
    width: 100%;
    position: relative;
    height: 100%;
    .info-main{
      display: flex;
      padding: 30px;
      height: 100%;
      .info-type{
        font-size: 12px;
        color: red;
        border: 1px solid red;
        border-radius: 2px;
        padding: 1px 6px;
        margin-right: 5px;
      }
      .info-cover{
        width: 200px;
        margin-right: 30px;
        img{
          width: 200px;
        }
      }
      .info-playlist{
        max-width: 600px;
        height: 100%;
        display: flex;
        flex-direction: column;
        .list-title{
          font-size:23px;
        }
        .list-create{
          display: flex;
          margin: 10px 0;
          .create-creater{
            line-height: 32px;
            margin: 0 5px;
          }
          .create-time{
            line-height: 32px;
            margin: 0 5px;
          }
        }
        .list-operate{
          margin: 10px 0;
          .btn{
            margin-right: 10px;
          }
        }
        .list-tag{
          margin: 5px 0;
        }
        .list-introduce{
          width: 100%;
          height: 100%;
          line-height: 20px;
          text-align: left;
          text-overflow:ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 3; //设置多行的行数
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      }
    }
  }
</style>
