<template>
  <div id="home">
    <van-nav-bar title="购物街" fixed :border="false"/>
    <!-- 轮播图 -->
    <swiper :view-list='bannerViewList' ref='swiper' @getData='getData'/>
    {{data}}
  </div>
</template>

<script>
//网络请求导入
import { getHomeViews } from "network/home";

//组件导入
import Swiper from "common/swiper/Swiper";

export default {
  name: "Home",
  components: {
    Swiper
  },
  data() {
    return {
      data:0,
      bannerViewList: [],
      recommendViewList: [],
    };
  },
  methods: {
    /**
     * 网络请求相关
     */
    getHomeData() {
      getHomeViews().then(d => {
        this.bannerViewList = d.data.banner.list;
        this.recommendViewList = d.data.recommend.list;
      });
    },
    getData(d){
      this.data = d
    }
  },
  created() {
    this.getHomeData();
  }
};
</script>
<style lang='less' scoped>
.van-nav-bar {
  background-color: #ff699c;
}
.van-nav-bar__title {
  color: #fff;
}
#home{
    padding-top: 46px;
}
</style>