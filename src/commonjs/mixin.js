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
//导入gotop模块
import GoTop from "views/home/children/gotop/GoTop";
export const gotopMixin ={
  methods:{
    //更改gotop的隐藏显示
    changeShowFlag(d) {
      this.showFlag = d;
    },
    //gotop 页面回到顶部
    myGoTop() {
      // console.log('123');
      this.$refs.bscroll.scrollTo(0, 0, 300);
    },
  },
  data(){
    return {
      showFlag:false
    }
  },
  components:{
    GoTop
  }
}
