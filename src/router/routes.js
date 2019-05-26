import { BasicLayout } from 'layout'
// import FindMusic from 'views/find-music'

export default [
  {
    path: '/',
    name: 'home',
    component: BasicLayout
    // redirect: '/find-music/recommend'
    /* children: [
      {
        path: '/find-music',
        name: 'find-music',
        meta: {
          title: '发现音乐'
        },
        component: FindMusic
        /!* children: [
          {
            path: '/find-music/recommend',
            name: 'recommend',
            meta: {
              title: '个人推荐'
            },
            component: () => import('views/find-music/personal-recommend/personal-recommend')
          },
          {
            path: '/find-music/song-list',
            name: 'song-list',
            keepAlive: true,
            meta: {
              title: '歌单'
            },
            component: () => import('views/find-music/song-list/song-list')
          }
        ] *!/
      },
      {
        path: '/personal-fm',
        name: 'personal-fm',
        meta: {
          title: '私人FM'
        },
        component: () => import('views/personal-fm/personal-fm')
      },
      {
        path: '/video-mv',
        name: 'video-mv',
        meta: {
          title: '视频'
        },
        component: () => import('views/video-mv/video-mv')
      },
      {
        path: '/friends-space',
        name: 'friends-space',
        meta: {
          title: '朋友圈'
        },
        component: () => import('views/friends-space/friends-space')
      },

      {
        path: '/song-list/:id',
        name: 'song-list-detail',
        meta: {
          title: '歌单详情'
        },
        component: () => import('views/song-list-detail/song-list-detail')
      }
    ] */
  }
]