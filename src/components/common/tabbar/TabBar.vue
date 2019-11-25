<template>
  <div>
    <van-tabbar v-model="active" active-color="#FF699C">
      <van-tabbar-item v-for="(item,index) in imgList" :key="index" :to='item.to'>
        <span>{{item.title}}</span>
        <img slot="icon" slot-scope="props" :src="props.active ? item.active : item.active" />
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>

export default {
  name:'TabBar',
  components: {},
  data() {
    return {
      active: 0,
    };
  },
  methods: {},
  props:{
      imgList:{
          type:Array,
          default(){
              return []
          }
      }
  }
};
</script>
<style lang='less' scoped>
</style>