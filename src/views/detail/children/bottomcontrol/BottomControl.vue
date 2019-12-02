<template>
  <div class="bottom-control">
    <div class="left">
      <div class="customer-service">
        <div class="customer-service_bg" :style="[iconBg]"></div>
        <span>客服</span>
      </div>
      <div class="shop-service">
        <div class="shop-service_bg" :style="[iconBg]"></div>
        <span>店铺</span>
      </div>
      <div class="shop-collections">
        <div class="shop-collections_bg" :style="[iconBg]"></div>
        <span>收藏</span>
      </div>
    </div>
    <div class="right">
      <div class="add-car" @click="addCar">
        加入购物车
      </div>
      <div class="buy">
        购买
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "BottomControl",
    data() {
      return {
        iconBg: {
          backgroundImage: 'url(' + require('assets/detail_bottom.png') + ')',
        },
      }
    },
    methods:{
      addCar(){
          this.$emit('addCar')
      }
    }
  }
</script>

<style scoped lang="less">
  .bottom-control {
    width: 100%;
    height: 60px;
    background-color: #fff;
    position: fixed;
    bottom: 0;
    display: flex;

    .left {
      display: flex;
      flex-direction: row;
      width: 50%;
      height: 100%;
      justify-content: space-around;
      span{
        color: #333;
      }
      .customer-service, .shop-service, .shop-collections {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .customer-service_bg {
          width: 44px;
          height: 40px;
          background-repeat: no-repeat;
          background-position: 0 -107px;
          transform: scale(0.7);
        }

        .shop-service_bg {
          width: 44px;
          height: 40px;
          background-repeat: no-repeat;
          background-position: 0 -200px;
          transform: scale(0.7);
        }

        .shop-collections_bg {
          width: 44px;
          height: 40px;
          background-repeat: no-repeat;
          background-position: 0 -2px;
          transform: scale(0.7);
        }
      }
    }

    .right {
      flex: 1;
      display: flex;
      div{
        flex:1;
        text-align: center;
        line-height: 60px;
      }
      .add-car{
        background-color: #f8dd67;
        color: #000;
      }
      .buy{
        background-color: #ff699c;
        color: #fff;
      }
    }
  }
</style>