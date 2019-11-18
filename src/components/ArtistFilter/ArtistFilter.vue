<template>
  <div class="artist-filter">
    <div class="filter-common">
      <div class="filter-label">语种：</div>
      <div class="filter-content">
        <span
          class="filter-content-item"
          :class="addClass(lanCode,lan.key)"
          v-for="(lan,index) in filter.language"
          :key="index"
          @click="clickLan(lan)"
        >
          {{lan.value}}
        </span>
      </div>
    </div>
    <div class="filter-common">
      <div class="filter-label">分类：</div>
      <div class="filter-content">
        <span
          class="filter-content-item"
          :class="addClass(catCode,cat.key)"
          v-for="(cat,index) in filter.category"
          :key="index"
          @click="clickCat(cat)"
        >
          {{cat.value}}
        </span>
      </div>
    </div>
    <div class="filter-common">
      <div class="filter-label">筛选：</div>
      <div class="filter-content">
        <span
          class="filter-content-item"
          :class="addClass(initial,scr.key)"
          v-for="(scr,index) in filter.screen"
          :key="index"
          @click="clickScr(scr)"
        >
          {{scr.value}}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
const FILTER = {
  language: [
    {
      key: 1000,
      value: '华语'
    },
    {
      key: 2000,
      value: '欧美'
    },
    {
      key: 6000,
      value: '日本'
    },
    {
      key: 7000,
      value: '韩国'
    },
    {
      key: 4000,
      value: '其他'
    }
  ],
  category: [
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
  ],
  screen: [
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
  ]
}
export default {
  name: 'ArtistFilter',
  data () {
    return {
      filter: FILTER,
      lanCode: 1000,
      catCode: 1,
      initial: '#'
    }
  },
  methods: {
    addClass (code, key) {
      if (code === key) {
        return 'active'
      }
    },
    clickLan (lan) {
      if (this.lanCode === lan.key) {
        return
      }
      this.lanCode = lan.key
      this.onStateChange(this.computeCode(), this.initial)
    },
    clickCat (cat) {
      if (this.catCode === cat.key) {
        return
      }
      this.catCode = cat.key
      this.onStateChange(this.computeCode(), this.initial)
    },
    clickScr (scr) {
      if (this.initial === scr.key) {
        return
      }
      this.initial = scr.key
      this.onStateChange(this.computeCode(), this.initial)
    },
    computeCode () {
      return this.lanCode + this.catCode
    },
    onStateChange (code, initial) {
      this.$emit('onStateChange', code, initial)
    }
  }
}
</script>

<style lang="less">
  @import "~styles/var";
  .artist-filter{
    width: 100%;
    font-size: 20px;
    display: flex;
    flex-direction: column;
    border-bottom: @base--border;
    padding-bottom: 20px;
    color: var(--body-font-color-1--);
    .filter-common{
      display: flex;
      margin-bottom: 10px;
      .filter-label{
        white-space: nowrap;
        font-size: 17px;
        margin: 5px;
      }
      .filter-content{
        .filter-content-item{
          display: inline-block;
          font-size: 17px;
          padding: 5px 10px;
          cursor: pointer;
        }
        .active{
          background: var(--header-bg-color--);
          color: var(--header-font-color-1--);
        }
      }
    }
  }
</style>
