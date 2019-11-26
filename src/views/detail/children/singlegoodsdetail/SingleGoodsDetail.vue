<template>
  <div id="sing-goods-detail">
    <div class="title">
      {{singleGoodsDetail.desc}}
      <div class="top_flag"></div>
      <div class="bottom_flag"></div>
      <div class="square_top"></div>
      <div class="square_bottom"></div>
    </div>
    <div class="show_images" v-for="(item,i) in singleGoodsDetail.detailImage" :key="i">
      <div class="title">
          {{item.key}}
      </div>
      <img :src="'http:'+item" alt="" v-for="(item,i) in item.list" :key="i" @load="loadImage">
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
  data() {
    return {};
  },
  methods: {
      loadImage(){
          this.$bus.$emit('singleDetailLoadImage')
      }
  },
  props: {
    singleGoodsDetail: {
      type: Object,
      default() {
        return {};
      }
    }
  }
};
</script>
<style lang='less' scoped>
#sing-goods-detail {
  background-color: #fff;
  .title {
    // width: 100%;
    font-size: 14px;
    line-height: 20px;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 15px;
    padding-bottom: 15px;
    position: relative;
    .top_flag {
      position: absolute;
      width: 100px;
      height: 1px;
      background-color: #ccc;
      top: 0px;
      left: 20px;
    }
    .bottom_flag {
      position: absolute;
      width: 100px;
      height: 1px;
      background-color: #ccc;
      bottom: 0px;
      right: 20px;
    }
    .square_top {
      position: absolute;
      width: 5px;
      height: 5px;
      background-color: #333;
      top: -5px;
      left: 20px;
    }
    .square_bottom {
      position: absolute;
      width: 5px;
      height: 5px;
      background-color: #333;
      bottom: 0;
      right: 20px;
    }
  }
  .show_images{
      .title{

      }
      img{
          width: 100%;
      }
  }
}
</style>