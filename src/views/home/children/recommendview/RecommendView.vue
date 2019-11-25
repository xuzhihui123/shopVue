<template>
  <div id="recommend">
      <div v-for="(item,index) in recommendviewList" :key="index" class="item">
          <img :src="item.image" alt="">
          <p>{{item.title}}</p>
      </div>
  </div>
</template>

<script>
export default {
  name: "RecommendView",
  components: {},
  data() {
    return {};
  },
  methods: {},
  props:{
      recommendviewList:{
          type:Array,
          default(){
              return []
          }
      }
  }
};
</script>
<style lang='less' scoped>
#recommend{
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    background-color: #fff;
    margin-bottom: 15px;
    .item{
        padding-top: 10px;
        padding-left: 10px;
        padding-right: 10px;
        padding-bottom: 25px;
        width: 25%;
        img{
            width: 100%;
        }
        p{
            margin-top: 5px;
            margin-bottom: 0px;
            text-align: center;
            font-size: 14px;
        }
    }
}
</style>