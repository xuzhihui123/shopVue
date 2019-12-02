<template>
    <div id="my_toast" v-show="isShow">
        {{message}}
    </div>
</template>

<script>
  export default {
    name: "Toast",
    data(){
      return {
          message:'',
          isShow:false
      }
    },
    methods:{
        change(message='这是一个Toast',flag){
            this.message =message
            this.isShow = flag
        }
    }
  }
</script>

<style scoped lang="less">
#my_toast{
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  background-color: rgba(0,0,0,.7);
  color: #fff;
  padding: 5px 10px;
  z-index: 999;
}
</style>