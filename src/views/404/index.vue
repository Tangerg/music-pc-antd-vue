<template>
  <div class="exception">
    <div class="imgBlock">
      <div class="imgEle">
      </div>
    </div>
    <div class="content">
      <h1>敬请期待</h1>
      <div class="desc">抱歉，你访问的页面仍在开发中</div>
      <div class="actions">
        <a-button type="primary" @click="handleToHome">返回首页</a-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Exception',
  props: {
    type: {
      type: String,
      default: '404'
    }
  },
  methods: {
    handleToHome () {
      this.$router.push('/')
    }
  }
}
</script>
<style lang="less">
  .exception {
    display: flex;
    align-items: center;
    height: 80%;
    min-height: 500px;

    .imgBlock {
      flex: 0 0 62.5%;
      width: 62.5%;
      padding-right: 152px;
      zoom: 1;
      &::before,
      &::after {
        content: ' ';
        display: table;
      }
      &::after {
        clear: both;
        height: 0;
        font-size: 0;
        visibility: hidden;
      }
    }

    .imgEle {
      float: right;
      width: 100%;
      max-width: 430px;
      height: 360px;
      background-repeat: no-repeat;
      background-position: 50% 50%;
      background-size: contain;
      background-image: url("https://gw.alipayobjects.com/zos/rmsportal/KpnpchXsobRgLElEozzI.svg");
    }

    .content {
      flex: auto;

      h1 {
        margin-bottom: 24px;
        color: #434e59;
        font-weight: 600;
        font-size: 72px;
        line-height: 72px;
      }

      .desc {
        margin-bottom: 16px;
        color: gray;
        font-size: 20px;
        line-height: 28px;
      }

      .actions {
        button:not(:last-child) {
          margin-right: 8px;
        }
      }
    }
  }

</style>
