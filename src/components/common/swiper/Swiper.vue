<template>
  <swiper :options="swiperOption" ref="mySwiper" >
    <!-- slides -->
    <swiper-slide v-for="(item,index) in viewList" :key="index">
      <img :src="item.image" alt @load="loadImage"/>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";

let vm = null;
export default {
  name:'Swiper',
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      index: null,
      swiperOption: {
        // loop: true,
        pagination: {
          el: ".swiper-pagination",
          type: "progressbar"
          //type: 'fraction',
          //type : 'progressbar',
          //type : 'custom',
        },
        //每张播放时长3秒，自动播放
        autoplay: {
          delay: 2000,
          disableOnInteraction:false
        },
        //滑动速度
        speed: 1000,
        // delay:1000
        on: {
          //切换到下一张的事件
          slideChange() {
            vm.index = this.activeIndex;
          }
        }
      },
      flag:false
    };
  },
  methods: {
    loadImage(){
        if(this.flag==false){
          this.$emit('loadImage')
          this.flag=true
        }
    }
  },
  props: {
    //传过来的轮播数据
    viewList: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  created() {
    vm = this;
  }
};
</script>
<style lang='less' scoped>
img {
  width: 100%;
}
</style>