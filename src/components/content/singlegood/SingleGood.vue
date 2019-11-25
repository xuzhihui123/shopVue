<template>
  <div id="singlegood" @click="goDetail(singleData.iid)">
    <img :src="singleData.show.img" alt @load="imgLoad" />
    <p>{{singleData.title}}</p>
    <p class="p2">
      <span class="price">{{singleData.price}}</span>
      <img src="~assets/collect.svg" alt />
      <span class="crav">{{singleData.cfav}}</span>
    </p>
  </div>
</template>

<script>
export default {
  name: "SingleGood",
  components: {},
  data() {
    return {};
  },
  methods: {
    //事件总线  判断图片加载完
    imgLoad() {
      this.$bus.$emit("imgScrollRefresh");
    },
    goDetail(d){
        this.$router.push('/detail/'+d)
    }
  },
  props: {
    singleData: {
      type: Object,
      default() {
        return {};
      }
    }
  }
};
</script>
<style lang='less' scoped>
#singlegood {
  width: 49%;
  margin-bottom: 10px;
  img {
    width: 100%;
    border-radius: 5px;
  }
  p {
    margin-top: 5px;
    margin-bottom: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 12px;
    padding: 0 5px;
    color: #444;
  }
  span {
    color: #ff699c;
  }
  .p2 {
    text-align: center;
    img {
      width: 12px;
      height: 12px;
      vertical-align: top;
    }
    span.price {
      margin-right: 10px;
    }
  }
}
</style>