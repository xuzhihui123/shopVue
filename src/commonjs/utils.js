export function debounce(fn, delay) {
   
    // 定时器，用来 setTimeout
    var timer
   
    // 返回一个函数，这个函数会在一个时间区间结束后的 delay 毫秒时执行 fn 函数
    return function () {
   
      // 保存函数调用时的上下文和参数，传递给 fn
      var context = this
      var args = arguments
   
      // 每次这个返回的函数被调用，就清除定时器，以保证不执行 fn
      clearTimeout(timer)
   
      // 当返回的函数被最后一次调用后（也就是用户停止了某个连续的操作），
      // 再过 delay 毫秒就执行 fn
      timer = setTimeout(function () {
        fn.apply(context, args)
      }, delay)
    }
}
   
//节流函数
export function throttle(fn,wait){
  var isExecute = false;
  return function(){
    var args = Array.prototype.slice.apply(arguments);
    if(isExecute) {
      return;
    }
    isExecute = true;
    setTimeout(function(){
      fn.apply(this,args);
      isExecute = false
    },wait)
  }
}

export function getCount(data){
    let count = parseInt(data)
    return (count/10000).toFixed(1)
}