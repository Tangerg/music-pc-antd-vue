<template>
  <div class="user-top">
    <div class="user-info">
      <div class="user-common user-avatar">
        <a-avatar size="large" :src=user.avatarUrl />
      </div>
      <div class="user-common user-name">
        <span >{{user.nickname}}{{user.nickname}}</span>
      </div>
      <div class="user-common user-sign">
        <a-button size="small" disabled>已签到</a-button>
      </div>
    </div>
    <div class="user-info">
      <div class="user-count">
        <div class="count-num">{{user.eventCount}}</div>
        <div class="count-text">动态</div>
      </div>
      <div class="user-count">
        <div class="count-num">{{user.follows}}</div>
        <div class="count-text">关注</div>
      </div>
      <div class="user-count">
        <div class="count-num">{{user.followeds}}</div>
        <div class="count-text">粉丝</div></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserTop',
  props: {
    user: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style lang="less">
@import "~styles/mixin";
.user-top{
  padding: 10px 0;
  width: 280px;
  font-size: 13px;
  display: flex;
  flex-direction: column;
  .user-info{
    margin: 5px 0;
    display: flex;
    align-items: center;
    text-align: center;
    flex-wrap: wrap;
    justify-content: space-between;
    .user-common{
      flex: 0.25;
    }
    .user-name{
      flex: 0.5;
      .no-wrap()
    }
    .user-count{
      flex: 1;
      border-right: 1px solid #e8e8e8;
      .count-num{
        font-size: 20px;
        font-weight: 500;
      }
      .count-text{
        color: var(--header-font-color-2--);
      }
      &:last-child{
        border: 0;
      }
    }
  }
}
</style>
