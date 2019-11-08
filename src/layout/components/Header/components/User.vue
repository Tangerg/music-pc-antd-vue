<template>
<div class="user">
  <a-popover placement="bottom" trigger="click">
    <div style="max-width: 200px" slot="title">
      <div class="user-operation">
        <div class="user-detail">
          <div><a-avatar src="http://p1.music.126.net/vqPqXWJAPjwNXbwHojowoA==/109951163926149216.jpg?param=80y80" /></div>
          <div><span >且听风吟_Monster</span></div>
          <div><a-button>已签到</a-button></div>
        </div>
        <div class="user-detail">
          <div><div>26</div><div>动态</div></div>
          <div><div>27</div><div>关注</div></div>
          <div><div>13</div><div>粉丝</div></div>
        </div>
      </div>
    </div>
    <div style="max-width: 200px" slot="content">
      <div>冬天的好东西 很沉的棉被。烤白薯的皮。糖炒栗子。<br/>
        雪下的土。热水袋。糖葫芦和滚烫的茶。擦靴子的旧丝袜。窗帘后的阴云。<br/>
        夜间大商场里怀抱羽绒服的年轻情侣。厚手套。<br/>
        还有直截了当的极冷的晴天，他从那方走来，走进，干干净净地，笑眯眯地，成为心上人。 —— 摘自叶三《九万字》 封面来自网络
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
export default {
  name: 'User'
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
