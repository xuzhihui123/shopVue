<template>
  <div id="shopCar">
    <nav-bar class="navbar">
      <div slot="title" class="title">购物车({{getAllCarCounts}})</div>
    </nav-bar>
    <b-scroll class="wrapper" ref="bscroll">
      <shop-car-list-item v-for="(item,i) in shopCarList" :key="i+'shop'" :item-data="item"/>
    </b-scroll>
  </div>
</template>

<script>
  import ShopCarListItem from 'views/shopcar/children/shopcarlistitem/ShopCarListItem'
  import NavBar from 'common/navbar/NavBar'
  import BScroll from 'common/bscroll/BScroll'

  import {mapGetters,mapState} from 'vuex'

  export default {
    components: {
      ShopCarListItem,
      BScroll,
      NavBar
    },
    data() {
      return {};
    },
    methods: {},
    computed: {
      ...mapGetters(['getAllCarCounts']),
      ...mapState(['shopCarList'])

    },

    activated() {
      this.$refs.bscroll.refresh()
    }
  }
</script>
<style scoped lang="less">
  #shopCar {
    height: 100vh;
    position: relative;

    .wrapper {
      position: absolute;
      left: 0;
      right: 0;
      top: 46px;
      bottom: 50px;
    }
  }

  .navbar .title {
    color: #fff;
  }

  /deep/ .van-nav-bar {
    background-color: #ff699c;
  }

</style>