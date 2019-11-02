<template>
  <div class="artist-category">
    <div class="category-common languages" v-for="items in filter">
      <div class="category-label">{{items.label}}</div>
      <ul class="category-content">
        <li
          class="category-content-item"
          v-for="(item,index) in items.content"
          :key="index"
          @click="clickLi(item)"
        >
          {{item.value}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
const CATEGORY =
  [
    { label: '语种：',
      content: [
        {
          key: 1,
          value: '华语'
        },
        {
          key: 2,
          value: '欧美'
        },
        {
          key: 6,
          value: '日本'
        },
        {
          key: 7,
          value: '韩国'
        },
        {
          key: 4,
          value: '其他'
        }
      ] },
    { label: '分类：',
      content: [
        {
          key: 1,
          value: '男歌手'
        },
        {
          key: 2,
          value: '女歌手'
        },
        {
          key: 3,
          value: '乐队组合'
        }
      ] },
    { label: '筛选：',
      content: [
        {
          key: '#',
          value: '热门'
        },
        {
          key: 'A',
          value: 'A'
        },
        {
          key: 'B',
          value: 'B'
        },
        {
          key: 'C',
          value: 'C'
        },
        {
          key: 'D',
          value: 'D'
        },
        {
          key: 'E',
          value: 'E'
        },
        {
          key: 'F',
          value: 'F'
        },
        {
          key: 'G',
          value: 'G'
        },
        {
          key: 'H',
          value: 'H'
        },
        {
          key: 'I',
          value: 'I'
        },
        {
          key: 'J',
          value: 'J'
        },
        {
          key: 'K',
          value: 'K'
        },
        {
          key: 'L',
          value: 'L'
        },
        {
          key: 'M',
          value: 'M'
        },
        {
          key: 'N',
          value: 'N'
        },
        {
          key: 'O',
          value: 'O'
        },
        {
          key: 'P',
          value: 'P'
        },
        {
          key: 'Q',
          value: 'Q'
        },
        {
          key: 'R',
          value: 'R'
        },
        {
          key: 'S',
          value: 'S'
        },
        {
          key: 'T',
          value: 'T'
        },
        {
          key: 'U',
          value: 'U'
        },
        {
          key: 'V',
          value: 'V'
        },
        {
          key: 'W',
          value: 'W'
        },
        {
          key: 'X',
          value: 'X'
        },
        {
          key: 'Y',
          value: 'Y'
        },
        {
          key: 'Z',
          value: 'Z'
        }
      ] }
  ]
export default {
  name: 'ArtistCategory',
  data () {
    return {
      filter: CATEGORY,
      code: 1001,
      initial: '#'
    }
  },
  methods: {
    clickLi (item) {
      console.log(item.key)
    }
  }
}
</script>

<style lang="less">
  .artist-category{
     width: 100%;
    .category-common{
      display: flex;
      .category-content{
        display: inline-block;
        float: left;
        .category-label{
        }
        .category-content-item{
          margin: 0 10px;
        }
      }
    }
  }
</style>
