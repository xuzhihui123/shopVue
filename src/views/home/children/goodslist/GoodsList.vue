<template>
  <div id="goodslist">
    <single-good v-for="(item,index) in goodsData" :key="index" :single-data='item'></single-good>
  </div>
</template>

<script>
// 导入单个商品信息模块
import SingleGood from "content/singlegood/SingleGood";
export default {
  name: "GoodsList",
  components: {
    SingleGood
  },
  data() {
    return {};
  },
  methods: {},
  props: {
    goodsData: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>
<style lang='less' scoped>
#goodslist {
  background-color: #fff;
  padding-top: 5px;
  padding-left: 5px;
  padding-right: 5px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>