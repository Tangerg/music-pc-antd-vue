<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'musicApp',
  mounted () {
    this.info()
  },
  methods: {
    info () {
      const h = this.$createElement
      const content = h('div', {}, [
        h('h1', { style: { fontSize: '16px', marginTop: '5px' } }, '注意事项'),
        h('div', '1.本网站是一个面向用户的C端网站，不是XXX管理系统'),
        h('div', '2.本网站使用大量h5新特性，ie暂不兼容，后期优化，请使用chrome或者firefox等现代浏览器访问'),
        h('div', '3.由于时间有限，只有一名开发，本网站当前只完成部分核心功能,完成度还很低，如果遇到按钮点击无反应或者其他问题属于正常现象，请见谅'),
        h('div', '4.目前暂未实现数据持久化（cookie，storage..）,后续更新'),
        h('div', '5.如果遇到音乐无法播放，表明此首歌是vip或者无版权，请切换其他歌，推荐林俊杰，邓紫棋等拥有版权的歌手的歌'),
        h('div', '7.底部的小播放器左边封面图片在存在播放队列的时候可以点击切换为大播放器！！！！'),
        h('div', '8.部分图标较丑或不适合当前使用场景，是因为还没有来得及换，请见谅'),
        h('h1', { style: { fontSize: '16px', marginTop: '5px' } }, '技术亮点'),
        h('div', '1.歌词的解析'),
        h('div', '2.精准歌词的实现'),
        h('div', '3.歌手过滤器及歌单过滤器的实现'),
        h('div', '4.播放进度的控制'),
        h('h1', { style: { fontSize: '16px', marginTop: '5px' } }, '目前已部分完成'),
        h('div', '1.核心的音乐播放'),
        h('div', '2.发现音乐（个性化推荐，歌单，歌手）'),
        h('div', '3.搜索'),
        h('div', '4.登录（当前登录只是根据uid拉取用户数据，并不是真正的登录，后续实现真正的账号密码的登录）'),
        h('h1', { style: { fontSize: '16px', marginTop: '5px' } }, '后续维护更新的主要功能（本网站为一个长期项目）'),
        h('div', '1.完善已有功能，实现真正的登录，而不是拉取用户信息 ！！！'),
        h('div', '2.优化大量数据时的卡顿现象'),
        h('div', '3.音量调节，主题换肤等设置的功能'),
        h('div', '4.播放历史，用户信息，用户主题等数据的持久化 ！！！'),
        h('div', '5.收藏，喜欢音乐，评论等交互'),
        h('div', '6.主播电台，排行榜，最新音乐，私人FM，朋友动态等功能模块'),
        h('h1', '特别说明'),
        h('div', '本网站全部数据均来自网易云音乐，仅供学习使用')
      ])
      this.$info({
        width: '1000px',
        title: '一定要看！！！！！！！',
        content: content,
        onOk () {}
      })
    }
  }
}
</script>
<style lang="less">
@import "styles/index.less";
#app {
  height: 100%;
  background: var(--body-bg-color--);
}
</style>
