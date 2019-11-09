import { BasicLayout } from 'layout'
import FindMusic from '@v/find-music'
import Ready from '@v/404'

export default [
  {
    path: '/',
    name: 'home',
    component: BasicLayout,
    redirect: '/find-music/personalized',
    children: [
      {
        path: '/find-music',
        name: 'find-music',
        meta: {
          title: '发现音乐'
        },
        component: FindMusic,
        children: [
          {
            path: '/find-music/personalized',
            name: 'personalized',
            meta: {
              title: '个人推荐'
            },
            component: () => import('@v/find-music/personalized/personalized')
          },
          {
            path: '/find-music/singer',
            name: 'singer',
            keepAlive: true,
            meta: {
              title: '歌单'
            },
            component: () => import('@v/find-music/singer/singer')
          }
        ]
      },
      {
        path: '/personal-fm',
        name: 'personal-fm',
        meta: {
          title: '私人FM'
        },
        component: () => import('@v/personal-fm/personal-fm')
      },
      {
        path: '/video-mv',
        name: 'video-mv',
        meta: {
          title: '视频'
        },
        component: () => import('@v/video-mv/video-mv')
      },
      {
        path: '/friends-space',
        name: 'friends-space',
        meta: {
          title: '朋友圈'
        },
        component: () => import('@v/friends-space/friends-space')
      },
      {
        path: '/song-list/:id',
        name: 'song-list-detail',
        meta: {
          title: '歌单详情'
        },
        component: () => import('@v/detail/playlist/playlist')
      },
      {
        path: '/artist/:id',
        name: 'artist-detail',
        meta: {
          title: '歌单详情'
        },
        component: () => import('@v/detail/artist/artist')
      }
    ]
  },
  {
    path: '*',
    name: '404',
    component: Ready
  }

]
