/*
 * @Author: Lancer
 * @Date:2019/12/1
 * @Last Modified by:   Lancer
 * @Last Modified time: 2019/12/1
 */

export default {
  //获取购物车所有数量
  getAllCarCounts(state) {
    let all = 0;
    state.shopCarList.forEach(item => {
      all += item.count
    })
    return all
  }
}