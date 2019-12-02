/*
 * @Author: Lancer
 * @Date:2019/11/27
 * @Last Modified by:   Lancer
 * @Last Modified time: 2019/11/27
 */

import  Toast from './Toast'

const obj = {}

obj.install = function (Vue) {
   //创建组件构造器
  const toastcontrustor = Vue.extend(Toast)
  //
  //   //创建出来一个组件对象
  const toast = new toastcontrustor()

  //创建出来需要挂载在某一个元素上
  toast.$mount(document.createElement('div'))

  document.body.appendChild(toast.$el)

  Vue.prototype.$toast = toast
}


export default  obj