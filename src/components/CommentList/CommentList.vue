<template>
  <div class="comment-list">
    <a-list itemLayout="horizontal" :dataSource="commentList" :loading="!commentList.length">
      <a-list-item slot="renderItem" slot-scope="item">
        <div class="list-item">
          <div class="list-item-avatar">
            <a-avatar size="large" :src=item.user.avatarUrl />
          </div>
          <div class="list-item-content">
            <div class="comment-content comment-user">
              <span class="user-name">{{item.user.nickname}}:</span><span>{{item.content}}</span>
            </div>
            <div v-if="item.beReplied.user" class="comment-content comment-reply">
              <span class="user-name">@{{item.beReplied.user.nickname}}:</span><span>{{item.beReplied.content}}</span>
            </div>
            <div class="comment-action">
              <div class="time">{{item.time}}</div>
              <div><a-icon type="like" /> {{item.likedCount}}</div>
            </div>
          </div>
        </div>
      </a-list-item>
    </a-list>
  </div>
</template>

<script>
export default {
  name: 'CommentList',
  props: {
    commentList: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="less">
.comment-list >.ant-list > .ant-spin-nested-loading > .ant-spin-container >.ant-list-item{
  &:hover{
    background-color: none;
  }
}
.comment-list{
  color: var(--body-font-color-1--);
  width: 100%;
  .list-item{
    width: 100%;
    display: flex;
    flex-direction: row;
    .list-item-avatar{
    }
    .list-item-content{
      margin-left: 15px;
      width: 100%;
      .comment-content{
        font-size: 13px;
        .user-name{
          color: #1089ff;
          margin-right: 5px;
          &:hover{
            cursor: pointer;
          }
        }
      }
      .comment-user{

      }
      .comment-reply{
        padding: 5px;
        background: rgba(0,0,0,0.2);
        border-radius: 3px;
      }
      .comment-action{
        margin-top: 5px;
        display: flex;
        justify-content: space-between;
        color: var(--body-font-color-2--);
        font-size: 12px;
      }
    }
  }
}
</style>
