<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view />
    </keep-alive>
    <tab-bar :img-list="imgList" v-show="$store.state.tabBarShow"/>
  </div>
</template>
<script>
import TabBar from "components/common/tabbar/TabBar.vue";
export default {
  data() {
    return {
      imgList: [
        {
          title: "首页",
          active: require("assets/nav_3_active.png"),
          inactive: require("assets/nav_3.png"),
          to: "/home"
        },
        {
          title: "分类",
          active: require("assets/nav_2_active.png"),
          inactive: require("assets/nav_2.png"),
          to: "/shopsort"
        },
        {
          title: "购物车",
          active: require("assets/nav_4_active.png"),
          inactive: require("assets/nav_4.png"),
          to: "/shopcar"
        },
        {
          title: "我的",
          active: require("assets/nav_5_active.png"),
          inactive: require("assets/nav_5.png"),
          to: "/profile"
        }
      ]
    };
  },
  components: {
    TabBar
  },
  created(){
        // this.$store.commit("changeTabBarShow", true);
  }
};
</script>

<style lang='less' scoped>
// @import 'normalize.css/normalize.css';
h3 {
  color: red;
}
#app {
  background-color: #fff;
}
</style>
