<template>
  <div id="detail-comment">
    <div class="head">
      <div>用户评价</div>
      <div>更多</div>
    </div>
    <div class="content">
      <div class="content-top">
        <img :src="commentDetail.user.avatar" alt="">
        <span>{{commentDetail.user.uname}}</span>
      </div>
      <div class="content-text">
        {{commentDetail.content}}
      </div>
      <div class="content-detail">
        {{parseInt(commentDetail.created*1000) | dataFormat}}&nbsp;&nbsp;{{commentDetail.style}}
      </div>
      <div class="img" v-show="commentDetail.images">
        <img :src="'http:'+item" alt="" v-for="item in commentDetail.images" :key="item">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailComment",
    props: {
      commentDetail: {
        type: Object,
        default() {
          return {
            user:{
            }
          }
        }
      }
    },
  }
</script>

<style scoped lang="less">
  #detail-comment {
    background-color: #fff;
    margin-top: 10px;
    padding: 20px 10px;
    .head {
      padding-bottom: 20px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      border-bottom: 2px solid #eee;
    }

    .content {
      margin-top: 10px;

      .content-top {
        display: flex;

        img {
          width: 50px;
          height: 50px;
          border-radius: 50%;
        }

        span {
          line-height: 50px;
          margin-left: 10px;
        }
      }

      .content-text {
        margin-top: 10px;
        color: #333;
        line-height: 25px;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
      }
      .content-detail{
        font-size: 12px;
        color: #666;
        margin-top: 10px;
        margin-bottom: 10px;
      }
      .img{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        img{
          width: 70px;
          height: 70px;
          margin-right: 15px;
        }
      }
    }
  }
</style>