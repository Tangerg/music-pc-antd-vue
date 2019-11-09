<template>
<div class="user">
  <a-popover placement="bottom" trigger="click">
    <div style="max-width: 200px" slot="title">
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
    <div style="max-width: 200px" slot="content">
      <div>
        {{user.signature}}
      </div>
    </div>
    <div class="user-info">
      <a-avatar src="http://p1.music.126.net/vqPqXWJAPjwNXbwHojowoA==/109951163926149216.jpg?param=80y80" />
      <div class="user-name"><span >且听风吟_Monster</span></div>
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
  .ant-popover > .ant-popover-content > .tooltip > .user-operation{
    .user-detail{
      display: flex;
      flex-direction: column;
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
