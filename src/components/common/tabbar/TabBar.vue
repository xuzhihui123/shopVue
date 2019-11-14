<template>
  <div>
    <van-tabbar v-model="active">
      <van-tabbar-item v-for="item in imgList" :key="item" :to='item.to'>
        <span>{{item.title}}</span>
        <img slot="icon" slot-scope="props" :src="props.active ? item.active : item.active" />
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>

export default {
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