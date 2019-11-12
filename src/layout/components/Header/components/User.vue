<template>
<div class="user">
  <a-popover placement="bottom" trigger="click">
    <div style="max-width: 250px" slot="title">
      <div class="user-operation">
        <div class="user-detail">
          <div><a-avatar :src=user.avatarUrl /></div>
          <div><span >{{user.nickname}}</span></div>
          <div><a-button>已签到</a-button></div>
        </div>
        <div class="user-detail">
          <div><div>{{user.eventCount}}</div><div>动态</div></div>
          <div><div>{{user.follows}}</div><div>关注</div></div>
          <div><div>{{user.followeds}}</div><div>粉丝</div></div>
        </div>
      </div>
    </div>
    <div style="max-width: 250px" slot="content">
      <div>
        {{user.signature}}
      </div>
    </div>
    <div class="user-info">
      <a-avatar :src=user.avatarUrl />
      <div class="user-name"><span >{{user.nickname}}</span></div>
    </div>
  </a-popover>
</div>
</template>

<script>
import { getUserDetail } from 'api/user'
import { createUser } from '@/class/user'
export default {
  name: 'User',
  data () {
    return {
      user: {}
    }
  },
  mounted () {
    this.initUser()
  },
  methods: {
    initUser () {
      getUserDetail(329508409).then((res) => {
        this.user = createUser(res)
        console.log(this.user)
      })
    }
  }
}
</script>

<style lang="less">
.user{
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color .3s;
  .user-operation{
    display: flex;
    background-color: #2eabff !important;
    .user-detail{
      display: flex !important;
      flex-direction: column !important;
    }
  }
  .user-info{
    display: flex;
    justify-content: center;
    align-items: center;
    .user-name{
      width: 100px;
      font-size: 15px;
      margin-left: 5px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
}
</style>
