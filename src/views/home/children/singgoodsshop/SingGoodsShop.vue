<template>
  <div>123</div>
</template>

<script>
import { type } from 'os';
export default {
  name: "SingGoodsShop",
  components: {},
  data() {
    return {};
  },
  methods: {},
  props:{
      singleDetail:{
          type:Object,
          default(){
              return {}
          }
      }

  },
  created(){
      console.log('123');
      console.log(this.singleDetail);
  }
};
</script>
<style lang='less' scoped>
</style>