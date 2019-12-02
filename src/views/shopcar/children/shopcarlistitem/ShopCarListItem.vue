<template>
      <div class="shopcar-list-item">
        <div class="check">
          123
        </div>
        <img :src="itemData.image" alt="">
        <div class="shopcar-list-item_right">
          <span class="title">{{itemData.desc}}</span>
          <span class="title_two">{{itemData.desc}}</span>
          <div class="price">
            <span class="price">￥{{itemData.price}}</span>
            <span class="count">x{{itemData.count}}</span>
          </div>
        </div>
      </div>
</template>

<script>
  export default {
    name: "ShopCarListItem",
    props:{
      itemData:{
        type:Object,
        default(){
          return {}
        }
      }
    }
  }
</script>

<style scoped lang="less">
  .shopcar-list-item{
    padding:10px 0;
    border-bottom: 1px solid #eee;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    width: 100%;
    .check{
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    img{
      width: 20%;
      height: 100px;
      border-radius: 10px;
    }
    .shopcar-list-item_right{
      width: 60%;
      padding: 0 10px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      span.title,span.title_two{
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      span.title_two{
        color: #333;
        font-size: 12px;
      }
      div.price{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        span.price{
          color: #ff5722;
        }
        span.count{
          color: #444;
        }
      }
    }
  }
</style>