<template>
<div class="header-user">
  <a-popover placement="bottom" trigger="click">
    <div slot="title">
      <user-top :user="user"></user-top>
    </div>
    <div slot="content">
      <user-bottom></user-bottom>
    </div>
    <div class="user-base">
      <a-avatar :src=user.avatarUrl />
      <span class="user-name">
        {{user.nickname}}
      </span>
      <a-icon type="down" />
    </div>
  </a-popover>
</div>
</template>

<script>
import { getUserDetail } from 'api/user'
import { createUser } from '@/class/user'
import { UserTop, UserBottom } from '@c/PopoverCard'
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
  },
  components: {
    UserTop,
    UserBottom
  }
}
</script>

<style lang="less">
@import "~styles/mixin";
.ant-popover-title, .ant-popover-inner-content{
  padding: 0 !important;
}
.header-user{
  .user-base{
    display: flex;
    align-items: center;
    font-size: 14px;
    .user-name{
      max-width: 100px;
      margin: 0 2px 0 10px;
      .no-wrap()
    }
  }
}
</style>
