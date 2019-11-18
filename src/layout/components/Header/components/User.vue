<template>
<div class="header-user">
  <a-modal
    title="登录"
    :visible="visible"
    @ok="handleOk"
    @cancel="handleChance"
    cancelText="取消"
    okText="登录"
    :closable="false"
  >
    <a-input
      placeholder="请输入您的网易云音乐uid"
             :value="userId"
      @change="onChange"
    />
    <div style="margin-top: 20px">1、请
    <a
      href="http://music.163.com"
      target="_blank"
    >点我(http://music.163.com)</a> 打开网易云音乐官网</div>
    <div>2、点击页面右上角的“登录”</div>
    <div>3、点击您的头像，进入我的主页</div>
    <div>4、复制浏览器地址栏 /user/home?id= 后面的数字（网易云 UID）</div>
  </a-modal>
  <div class="user-base" @click="login" v-if="!user.nickname">
    <a-avatar :src=user.avatarUrl />
    <span class="user-name">
      未登录
    </span>
  </div>
  <a-popover placement="bottom" trigger="click" v-if="user.nickname">
    <div slot="title">
      <user-top :user="user"></user-top>
    </div>
    <div slot="content">
      <user-bottom @onClickLoginOut="onClickLoginOut"></user-bottom>
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
import config from '@/config/config'
export default {
  name: 'User',
  data () {
    return {
      userId: '',
      user: {},
      visible: false
    }
  },
  methods: {
    onChange (e) {
      const { value } = e.target
      this.userId = value
    },
    async getUser (uid) {
      let user = {}
      try {
        user = await getUserDetail(uid.trim())
        if (user.code === config.ERR_OK) {
          this.user = createUser(user)
          this.visible = false
          this.userId = ''
        } else {
          this.$message.error('登录失败，请确认你的uid是否正确')
          this.userId = ''
        }
      } catch (e) {
        this.$message.error('登录失败，请确认你的uid是否正确')
        this.userId = ''
      }
    },
    handleChance () {
      this.userId = ''
      this.visible = false
    },
    login () {
      this.visible = true
    },
    onClickLoginOut () {
      this.user = {}
    },
    handleOk () {
      this.getUser(this.userId)
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
