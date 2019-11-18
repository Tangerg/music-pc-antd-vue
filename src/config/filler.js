export const COLUMN_LIST = {
  recommendList: {
    title: '推荐歌单',
    route: 'recommendList',
    show: true
  },
  exclusiveDistribution: {
    title: '独家放送',
    route: 'exclusiveDistribution',
    show: true
  },
  latestMusic: {
    title: '最新音乐',
    route: 'latestMusic',
    show: true
  },
  recommendMV: {
    title: '推荐MV',
    route: 'recommendMV',
    show: false
  }
}
export const MENU_LIST = {
  RecommendMusic: [
    {
      title: '发现音乐',
      icon: 'customer-service',
      route: '/find-music/personalized'
    },
    {
      title: '私人FM',
      icon: 'user',
      route: '/personal-fm'
    },
    {
      title: '视频',
      icon: 'youtube',
      route: '/video-mv'
    },
    {
      title: '朋友',
      icon: 'team',
      route: '/friends-space'
    }
  ],
  MyMusic: [
    {
      title: '本地音乐',
      icon: 'smile',
      route: '/my-music'
    },
    {
      title: '下载管理',
      icon: 'download',
      route: '/download'
    },
    {
      title: '我的云盘',
      icon: 'cloud',
      route: '/my-cloud'
    },
    {
      title: '我的电台',
      icon: 'shake',
      route: '/my-fm'
    },
    {
      title: '我的收藏',
      icon: 'folder',
      route: '/my-collection'
    }
  ]
}
export const FIND_MUSIC_TAB_LIST = [
  {
    tabName: '个性推荐',
    route: '/find-music/personalized'
  },
  {
    tabName: '歌单',
    route: '/find-music/playlist'
  },
  {
    tabName: '主播电台',
    route: '/find-music/radio'
  },
  {
    tabName: '排行榜',
    route: '/find-music/rank'
  },
  {
    tabName: '歌手',
    route: '/find-music/singer'
  },
  {
    tabName: '最新音乐',
    route: '/find-music/song'
  }
]
export const COMMENT_COLUMN = {
  hotComments: {
    title: '精彩评论'
  },
  comments: {
    title: '最新评论'
  }
}
export const SIMILAR_COLUMN = {
  similarPlaylist: {
    title: '包含这首歌的歌单'
  },
  similarSong: {
    title: '相似歌曲'
  }
}
