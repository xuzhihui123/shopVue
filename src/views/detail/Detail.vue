<template>
  <div id="detail">
    <!-- tabbar -->
    <nav-bar>
      <div slot="title" class="navbar-center">
        <div
          v-for="(item,index) in topBarTitle"
          :key="index"
          @click="changeActive(index)"
          :class="{active:activeIndex===index}"
        >{{item}}</div>
      </div>
      <div slot="left" class="navbar-left" @click="onClickLeft">
        <img src="~assets/back.svg" alt />
      </div>
    </nav-bar>
    <b-scroll class="wrapper" ref="bscroll">
      <!-- Swiper -->
      <swiper :view-list="swiperImages" class="swiper" />
      <!-- goodsDetail模块 -->
      <goods-detail :goods-detail-data="goodsDetail" />
      <!-- goodsShopInfo 模块 -->
      <goods-shop-info :goods-detail-shop="goodsShop" />
      <!-- singlegoodsdetail -->
      <single-goods-detail :single-goods-detail="singleGoodsDetail" />
    </b-scroll>
  </div>
</template>

<script>
/**
 * 网络请求模块
 */
import { getDetail, Goods, Shop } from "network/detail";

/**
 * 导入模块
 */
//头部navbar
import NavBar from "common/navbar/NavBar";
//导入swiper
import Swiper from "common/swiper/Swiper";
//导入goodsdetail
import GoodsDetail from "views/detail/children/goodsdetail/GoodsDetail";
//导入goodsshopinfo
import GoodsShopInfo from "views/detail/children/goodsshopinfo/GoodsShopInfo";
//导入bscroll
import BScroll from "common/bscroll/BScroll";
//导入SingGoodsShop  单个商品详情
import SingleGoodsDetail from "views/detail/children/singlegoodsdetail/SingleGoodsDetail";
/**
 * utils
 */
import { getCount,debounce } from "commonjs/utils";
export default {
  name: "Detail",
  components: {
    NavBar,
    Swiper,
    GoodsDetail,
    BScroll,
    GoodsShopInfo,
    SingleGoodsDetail
  },
  data() {
    return {
      iid: null,
      //顶部数据
      topBarTitle: ["商品", "参数", "评价", "推荐"],
      //顶部tabbar索引
      activeIndex: 0,
      //轮播图数据
      swiperImages: [],
      //轮播图下方详细数据
      goodsDetail: {},
      //shop 数据
      goodsShop: {},
      singleGoodsDetail: {}
    };
  },
  methods: {
    //获取传过来的iid
    getId() {
      this.iid = this.$route.params.iid;
    },
    //获取轮播图页面数据
    getDetail(iid) {
      getDetail(iid).then(d => {
        console.log(d);
        //获取轮播图的数据
        d.result.itemInfo.topImages.forEach(element => {
          this.swiperImages.push({ image: "http:" + element });
        });

        //获取轮播图下方组件的数据
        this.goodsDetail = new Goods(
          d.result.itemInfo,
          d.result.columns,
          d.result.shopInfo.services
        );

        //获取shop数据
        this.goodsShop = new Shop(d.result.shopInfo);
        this.goodsShop.sells = getCount(this.goodsShop.sells);

        //获取单个商品详情数据
        this.singleGoodsDetail = d.result.detailInfo;
      });
    },
    // tabbar left点击
    onClickLeft() {
      this.$router.back();
      this.$store.commit("changeTabBarShow", true);
    },
    //tabbar 更改active
    changeActive(index) {
      this.activeIndex = index;
    }
  },
  created() {
    //底部tababr消失
    this.$store.commit("changeTabBarShow", false);
    this.getId();
    this.getDetail(this.iid);
  },
  mounted() {
    this.$nextTick(() => {
      // 防抖函数
      const refresh = debounce(this.$refs.bscroll.refresh, 50);
      this.$bus.$on("singleDetailLoadImage", () => {
        //图片加载一次就refresh 一次 调用BScroll的refresh的方法
        refresh();
      });
    });
  }
};
</script>
<style lang='less' scoped>
#detail {
  position: relative;
  height: 100vh;
}
.navbar-center {
  display: flex;
  div {
    flex: 1;
  }
}
/deep/.van-nav-bar__title {
  font-size: 14px;
}
.navbar-left img {
  vertical-align: middle;
}
.active {
  color: #ff699c;
}
.swiper {
  height: 300px;
}
.wrapper {
  position: absolute;
  top: 46px;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>