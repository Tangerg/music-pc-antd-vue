import { BasicLayout } from 'layout'
import FindMusic from '@v/find-music'
import Ready from '@v/404'

export default [
  {
    path: '/',
    name: 'home',
    component: BasicLayout,
    redirect: '/find-music',
    children: [
      {
        path: '/find-music',
        name: 'find-music',
        meta: {
          title: '发现音乐'
        },
        component: FindMusic,
        redirect: '/find-music/personalized',
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
            path: '/find-music/playlist',
            name: 'playlist',
            keepAlive: true,
            meta: {
              title: '歌单'
            },
            component: () => import('@v/find-music/playlist/playlist')
          },
          {
            path: '/find-music/radio',
            name: 'radio',
            keepAlive: true,
            meta: {
              title: '主播电台'
            },
            component: () => import('@v/find-music/radio/radio')
          },
          {
            path: '/find-music/rank',
            name: 'rank',
            keepAlive: true,
            meta: {
              title: '排行榜'
            },
            component: () => import('@v/find-music/rank/rank')
          },
          {
            path: '/find-music/singer',
            name: 'singer',
            keepAlive: true,
            meta: {
              title: '歌手'
            },
            component: () => import('@v/find-music/singer/singer')
          },
          {
            path: '/find-music/song',
            name: 'songs',
            keepAlive: true,
            meta: {
              title: '最新音乐'
            },
            component: () => import('@v/find-music/song/song')
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
          title: '歌手详情'
        },
        component: () => import('@v/detail/artist/artist')
      },
      {
        path: '/search',
        name: 'search',
        meta: {
          title: '搜索'
        },
        component: () => import('@v/search/search')
      }
    ]
  },
  {
    path: '*',
    name: '404',
    meta: {
      title: '404'
    },
    component: Ready
  }
]
