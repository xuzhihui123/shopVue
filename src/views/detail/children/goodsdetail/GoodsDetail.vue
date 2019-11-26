<template>
  <div id="goodsdetail">
    <div class="title">{{goodsDetailData.title}}</div>
    <div class="price">
      <span class="new">{{goodsDetailData.newPrice}}</span>
      <span class="old">
        <del>{{goodsDetailData.oldPrice || goodsDetailData.nowPrice}}</del>
      </span>
      <span class="yhj">{{goodsDetailData.discount=='' ? '敬请抢购' : goodsDetailData.discount}}</span>
    </div>
    <div class="columns">
      <div v-for="(item,i) in goodsDetailData.columns" :key="i">{{item}}</div>
    </div>
    <div class="services">
      <div v-for="(item,i) in goodsDetailData.services" :key="i">
        <img :src="'http:'+item.icon" alt />
        <span>{{item.name}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsDetail",
  components: {},
  data() {
    return {};
  },
  methods: {},
  props: {
    goodsDetailData: {
      type: Object,
      default() {
        return null;
      }
    }
  }
};
</script>
<style lang='less' scoped>
  #goodsdetail{
    background-color: #fff;
  }
.title {
  padding-top: 10px;
  padding-left: 7px;
  padding-right: 7px;
  font-size: 16px;
  font-weight: 500;
  color: #111;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
  line-height: 20px;
}
.price {
  margin-top: 10px;
  padding-left: 7px;
  padding-right: 7px;
  display: inline-block;
  position: relative;
  .new {
    color: #ff699c;
    font-size: 18px;
  }
  .old del {
    font-size: 12px;
    color: #444;
    margin-left: 5px;
  }
  .yhj {
    display: inline-block;
    padding: 3px;
    background-color: #ff699c;
    color: #fff;
    border-radius: 10px;
    font-size: 10px;
    position: relative;
    right: -5px;
    top: -5px;
  }
}
.columns {
  padding-left: 7px;
  padding-right: 7px;
  margin-top: 20px;
  margin-bottom: 7px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  div {
    // flex: 1;
    font-size: 12px;
    color: #666;
    text-align: center;
  }
}
.services {
  padding: 25px 7px;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  div {
      img{
          width: 10px;
          height: 10px;
      }
      span{
          font-size: 12px;
          color: #666;
      }
  }
}
</style>