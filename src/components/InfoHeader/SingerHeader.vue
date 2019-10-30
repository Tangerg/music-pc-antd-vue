<template>
  <div class="info-header">
    <div class="info-main">
      <div class="info-main-left">
        <div class="info-cover" >
          <img :src=Info.content.coverImg alt="封面">
        </div>
      </div>
      <div class="info-main-center">
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
      </div>
      <div class="info-main-right">
        <div class="info-singer-right">
          <div class="info-singer-collect">
            <a-button icon="folder-add" type="primary" @click="showMore">收藏</a-button>
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
  @import "./common";
  .info-singer{
    .singer-nickname{
      padding-left: 40px;
      font-size: 14px;
      margin: 5px 0;
    }
  }
  .info-singer-collect{
    min-width: 100px;
  }
</style>
