/*
 * @Author: Lancer
 * @Date:2019/12/1
 * @Last Modified by:   Lancer
 * @Last Modified time: 2019/12/1
 */

export default {
  //添加单个商品到购物车
  addSingleGood(ctx,payInfo){
    let flag = true
    ctx.state.shopCarList.some((item,i)=>{
      if(item.iid === payInfo.iid){
        ctx.commit('singleGoodAddCount',i)
        flag=false
        return true
      }
    })
    if(flag==true){
      ctx.commit('singleGoodPush',payInfo)
    }
  }



}