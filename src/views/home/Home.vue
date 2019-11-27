<template>
  <div id="home">
    <van-nav-bar title="购物街" fixed :border="false" />
    <tab-control
      :control-list="controlList"
      ref="tabControl2"
      class="tabcontrol2"
      v-show="tabControlTopFlag"
      @tabClick="tabClickIndex"
    />
    <b-scroll
      class="wrapper"
      ref="bscroll"
      :myprobe-type="3"
      :mypull-up-load="true"
      @pullingUp="loadMoreData"
      @changeFlag="changeShowFlag"
      @changeTabControlState="changeTabState"
    >
      <div>
        <!-- 轮播图 -->
        <swiper :view-list="bannerViewList" ref="swiper" @loadImage="getLoadHeight" />
        <recommend-view :recommendview-list="recommendViewList" />
        <tab-control
          :control-list="controlList"
          ref="tabControl"
          :class="{tabcontrol:tabControlTopFlag}"
           @tabClick="tabClickIndex"
        />
        <goods-list :goods-data="goodsViewList[controlData].list" />
      </div>
    </b-scroll>
    <transition
      enter-active-class="bounceIn"
      leave-active-class="bounceOut"
      :duration="{
      enter:500,leave:500
    }"
    >
      <go-top v-if="showFlag" class="animated" @click.native="myGoTop" />
    </transition>
  </div>
</template>

<script>
//网络请求导入
import { getHomeViews, getHomeGoodsViews } from "network/home";

/**
 * 组件导入
 */
//导入轮播图
import Swiper from "common/swiper/Swiper";
//导入recommend 推荐模块
import RecommendView from "views/home/children/recommendview/RecommendView";
//导入tabcontrol模块
import TabControl from "content/tabcontrol/TabControl";
//导入goodsList 商品信息列表模块
import GoodsList from "views/home/children/goodslist/GoodsList";
//导入BScroll
import BScroll from "common/bscroll/BScroll";
//导入gotop模块
import GoTop from "views/home/children/gotop/GoTop";
//导入animate.css
import "animate.css";

/**
 * 外部JS导入
 */
import {imgRefreshMixin} from "commonjs/mixin";

export default {
  name: "Home",
  components: {
    Swiper,
    RecommendView,
    TabControl,
    GoodsList,
    BScroll,
    GoTop
  },
  mixins:[imgRefreshMixin],
  data() {
    return {
      bannerViewList: [],
      recommendViewList: [],
      goodsViewList: {
        pop: {
          page: 0,
          list: []
        },
        new: {
          page: 0,
          list: []
        },
        sell: {
          page: 0,
          list: []
        }
      },
      controlList: ["流行", "新款", "精选"],
      controlData: "pop",
      showFlag: false,
      tabControlTop: 0,
      tabControlTopFlag: false,
    };
  },
  methods: {
    /**
     * 网络请求相关
     */
    //获取轮播图和推荐
    getHomeData() {
      getHomeViews().then(d => {
        this.bannerViewList = d.data.banner.list;
        this.recommendViewList = d.data.recommend.list;
      });
    },
    //获取首页goods商品信息
    getHomeGoodsData(type) {
      let page = this.goodsViewList[type].page + 1;
      getHomeGoodsViews(type, page).then(d => {
        this.goodsViewList[type].list.push(...d.data.list);
        this.goodsViewList[type].page = this.goodsViewList[type].page + 1;
      });
    },

    /**
     * 事件相关
     */
    //tabcontrol点击
    tabClickIndex(d) {
      switch (d) {
        case 0:
          this.controlData = "pop";
          break;
        case 1:
          this.controlData = "new";
          break;
        case 2:
          this.controlData = "sell";
          break;
      }
      this.$refs.tabControl.activeIndex = d 
      this.$refs.tabControl2.activeIndex = d
    },
    //上拉加载更多
    loadMoreData() {
      this.getHomeGoodsData(this.controlData);
      // 请求完成完成上拉加载
      this.$refs.bscroll.finishPullUp();

      // 下面这句代码是activated钩子函数里的，但是报错就放这了
      //这边用到了两次事件总线
      this.$bus.$on('imgScrollRefresh',this.imgScrollR)
    },

    //更改gotop的隐藏显示
    changeShowFlag(d) {
      this.showFlag = d;
    },
    //gotop 页面回到顶部
    myGoTop() {
      // console.log('123');
      this.$refs.bscroll.scrollTo(0, 0, 300);
    },
    //获取轮播图图片加载完成后的事件 来计算tabcontrol组件的距离顶部位置的高度
    getLoadHeight() {
      this.tabControlTop = this.$refs.tabControl.$el.offsetTop;
    },
    //判断滚动传过来的数值来 控制tabcontrol
    changeTabState(pos) {
      if (-pos.y >= this.tabControlTop) {
        this.tabControlTopFlag = true;
      } else {
        this.tabControlTopFlag = false;
      }
    }
  },
  created() {
    this.getHomeData();
    this.getHomeGoodsData("pop");
    this.getHomeGoodsData("new");
    this.getHomeGoodsData("sell");
  },
  mounted() {

  },
  deactivated() {
    //离开时候 取消imgScrollRefresh 事件总线
    this.$bus.$off('imgScrollRefresh',this.imgScrollR)
  },
  activated() {

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
#home {
  // padding-top: 46px;
  height: 100vh;
  position: relative;
  .wrapper {
    position: absolute;
    top: 46px;
    bottom: 50px;
    left: 0;
    right: 0;
  }
}
.tabcontrol {
  position: fixed;
  top: 46px;
  right: 0;
  left: 0;
}
.tabcontrol2 {
  position: fixed;
  top: 44px;
  left: 0;
  right: 0;
  z-index: 9;
}
</style>