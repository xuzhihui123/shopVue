/*
 * @Author: Lancer
 * @Date:2019/11/27
 * @Last Modified by:   Lancer
 * @Last Modified time: 2019/11/27
 */
import {debounce} from "./utils";

export const imgRefreshMixin ={
  mounted() {
    this.$nextTick(() => {
      // 防抖函数
      const refresh = debounce(this.$refs.bscroll.refresh, 50);

      this.imgScrollR =  () => {
        //图片加载一次就refresh 一次 调用BScroll的refresh的方法
        refresh();
      }
      this.$bus.$on("imgScrollRefresh",this.imgScrollR);
    });
  },
  data(){
    return {
      imgScrollR:null
    }
  }
}