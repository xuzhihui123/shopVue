/*
 * @Author: Lancer
 * @Date:2019/12/1
 * @Last Modified by:   Lancer
 * @Last Modified time: 2019/12/1
 */

export default {

  // 更改导航栏显示隐藏
  changeTabBarShow(state, flag) {
    state.tabBarShow = flag
  },
  singleGoodAddCount(state, index) {
    state.shopCarList[index].count += 1
  },
  singleGoodPush(state, payInfo) {
    state.shopCarList.push(payInfo)
  }
}


