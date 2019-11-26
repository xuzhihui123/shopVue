<template>
  <div id="goodsShopInfo">
    <div class="topTitle">
      <img :src="'http:'+goodsDetailShop.logo" alt />
      <span>{{goodsDetailShop.name}}</span>
    </div>
    <div class="centerDetail">
      <div class="one">
        <div class="count">{{goodsDetailShop.sells}}万</div>
        <div class="sells-count-title">总销量</div>
      </div>
      <div class="one two">
        <div class="count">{{goodsDetailShop.goodsCount}}</div>
        <div class="sells-count-title">全部宝贝</div>
      </div>
      <div class="three">
        <div v-for="(item,i) in goodsDetailShop.score" :key="i">
          <span class="name">{{item.name}}</span>
          <span :class="['score',item.isBetter?'better':'nobetter']">{{item.score}}</span>
          <span :class="[item.isBetter?'bg-better':'bg-nobetter','pf']">{{item.isBetter?'高':'低'}}</span>
        </div>
      </div>
    </div>
    <div class="goShop">
        进店逛逛
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsShopInfo",
  components: {},
  data() {
    return {};
  },
  methods: {},
  props: {
    goodsDetailShop: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  created() {}
};
</script>
<style lang='less' scoped>
  #goodsShopInfo{
    background-color: #fff;
    padding-bottom: 20px;
  }
.topTitle {
  padding-top: 40px;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 20px;
  img {
    border-radius: 50%;
    width: 40px;
    height: 40px;
    vertical-align: middle;
  }
  span {
    font-size: 16px;
    color: #333;
    margin-left: 15px;
  }
}
.centerDetail {
  display: flex;
  padding-left: 20px;
  padding-right: 20px;
  .one {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .sells-count-title {
      margin-top: 5px;
      font-size: 12px;
    }
  }
  .two {
    margin-left: 20px;
    padding-right: 30px;
    border-right: 1px solid #ccc;
  }
  .three {
    padding-left: 30px;
    display: flex;
    flex-direction: column;
    div {
      line-height: 25px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      height: 25px;
      .score {
        margin-left: 10px;
        font-size: 14px;
      }
      .name {
        color: #333;
      }
      .pf{
          margin-left: 10px;
          font-size: 14px;
          height: 14px;
          line-height: 14px;
      }
      .better {
        color: red;
      }
      .nobetter {
        color: green;
      }
      .bg-better {
        background-color: #ff699c;
      }
      .bg-nobetter {
        background-color: green;
      }
    }
  }
}
.goShop{
    margin: 0 auto;
    width: 150px;
    height: 30px;
    background-color: #eee;
    font-size: 14px;
    text-align: center;
    line-height: 30px;
    border-radius: 10px;
    color: #333;
    margin-top: 20px;
}
</style>