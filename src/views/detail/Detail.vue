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
        >{{item}}
        </div>
      </div>
      <div slot="left" class="navbar-left" @click="onClickLeft">
        <img src="~assets/back.svg" alt/>
      </div>
    </nav-bar>
    <b-scroll class="wrapper" ref="bscroll" :myprobe-type="3" @changeTabControlState="offsetTop">
      <!-- Swiper -->
      <swiper :view-list="swiperImages" class="swiper"/>
      <!-- goodsDetail模块 -->
      <goods-detail :goods-detail-data="goodsDetail"/>
      <!-- goodsShopInfo 模块 -->
      <goods-shop-info :goods-detail-shop="goodsShop"/>
      <!-- singlegoodsdetail -->
      <single-goods-detail :single-goods-detail="singleGoodsDetail" @getTop="getT"/>
      <!--            goodsparams-->
      <goods-params :goods-params-detail="goodsParams" ref="goodsParams"/>
      <!--      评论-->
      <detail-comment :comment-detail="detailCommentInfo" ref="detailComment"/>
      <!--      商品推荐-->
      <goods-list :goods-data="recommendDetail" ref="goodsList"/>
    </b-scroll>
  </div>
</template>

<script>

  // 网络请求模块

  import {getDetail, Goods, Shop, GoodsParam, getRecommend} from "network/detail";

  /***/
  // *
  // 导入模块
  // * /
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
  //导入goodsparams  商品参数信息
  import GoodsParams from 'views/detail/children/goodsparams/GoodsParams';
  // 导入商品评论信息
  import DetailComment from 'views/detail/children/detailcomment/DetailComment'
  // 导入商品推荐
  import GoodsList from 'views/home/children/goodslist/GoodsList'
  /**
   * utils
   */
  import {getCount, debounce} from "commonjs/utils";
  import {imgRefreshMixin} from "commonjs/mixin";

  export default {
    name: "Detail",
    components: {
      NavBar,
      Swiper,
      GoodsDetail,
      BScroll,
      GoodsShopInfo,
      SingleGoodsDetail,
      GoodsParams,
      DetailComment,
      GoodsList
    },
    mixins: [imgRefreshMixin],
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
        //轮播图下方再下方详细数据
        goodsShop: {},
        //图片详情
        singleGoodsDetail: {},
        //goods参数信息数据
        goodsParams: {},
        // 评论信息数据   里面user赋值 为了 undefined
        detailCommentInfo: {
          user: {}
        },
        //商品推荐数据
        recommendDetail: [],
        //clickOffsetTop
        clickOffsetTop: [0, 0, 0, 0],
        debounceT: null
      };
    },
    methods: {
      //获取传过来的iid
      getId() {
        this.iid = this.$route.params.iid;
      },

      // 获取详情页数据
      getDetail(iid) {
        getDetail(iid).then(d => {
          console.log(d);
          //获取轮播图的数据
          d.result.itemInfo.topImages.forEach(element => {
            this.swiperImages.push({image: "http:" + element});
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

          //获取参数详情数据
          this.goodsParams = new GoodsParam(d.result.itemParams.info, d.result.itemParams.rule)

          //获取评论信息
          if (d.result.rate.cRate !== 0) {
            this.detailCommentInfo = d.result.rate.list[0]
          }
        });
      },

      //获取推荐数据
      getRec() {
        getRecommend().then(d => {
          this.recommendDetail = d.data.list
        })
      },

      // tabbar left点击
      onClickLeft() {
        this.$router.back();
        this.$store.commit("changeTabBarShow", true);
      },

      //tabbar 更改active
      changeActive(index) {
        this.activeIndex = index;
        this.$refs.bscroll.scrollTo(0, -this.clickOffsetTop[index], 300)
      },

      //获取参数组件 距离顶部的高度
      getT() {
      this.debounceT()
    },

    //滚动改变  navbar  索引
      offsetTop(pos) {
        // console.log(-pos.y);
        for (let i = 0; i < this.clickOffsetTop.length; i++) {
          if ((i <= this.clickOffsetTop.length - 2) && (this.clickOffsetTop[i] <= -pos.y && -pos.y < this.clickOffsetTop[i + 1])) {
            this.activeIndex = i
          } else if ((i === this.clickOffsetTop.length - 1) && (-pos.y >= this.clickOffsetTop[this.clickOffsetTop.length - 1])) {
            this.activeIndex = i
          }
        }
      }
    },
    created() {
      //底部tababr消失
      this.$store.commit("changeTabBarShow", false);
      this.getId();
      this.getDetail(this.iid);
      this.getRec()
      this.debounceT = debounce(function () {
        this.clickOffsetTop[1] = this.$refs.goodsParams.$el.offsetTop
        this.clickOffsetTop[2] = this.$refs.detailComment.$el.offsetTop
        this.clickOffsetTop[3] = this.$refs.goodsList.$el.offsetTop
      })
    },
    mounted() {
      this.$nextTick(() => {
        this.$bus.$on('singleDetailLoadImage', this.imgScrollR)
      });
    },
    destroyed() {
      //组件销毁取消事件总线
      this.$bus.$off('imgScrollRefresh', this.imgScrollR)
    }
  };
</script>
<style lang='less' scoped>
  #detail {
    position: relative;
    height: 100vh;
    background-color: #eee;
  }

  .navbar-center {
    display: flex;

    div {
      flex: 1;
    }
  }

  /deep/ .van-nav-bar__title {
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