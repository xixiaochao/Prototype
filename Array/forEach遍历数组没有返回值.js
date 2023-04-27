Array.prototype.forEach();

/**
 * 1、作用： `遍历数组;没有返回值`
 * 2、参数： `需要参数`
 * 3、返回值： `返回值是undefined`
 * 4、是否改变原数组： `原有数组不发生改变`
 */

/**
 * 原型上的封装
 *
 * forEach遍历数组，传参有两个，第一个是回调函数，第二个参数可以改变回调函数中的this，
 * 当第二个参数不传的时候，回调函数中的this非严格模式下指向undefined
 * 回调函数中的第一个参数是当前项，第二个参数是当前项的索引，
 * 有多少项回调函数就执行多少次，
 * forEach没有返回值，返回值默认是undefined
 */
Array.prototype.myForEach = function (fn, c) {
  //如果fn不是一个函数，则抛出异常
  if (Object.prototype.toString.call(fn) === "[object Function]") {
    for (var i = 0; i < this.length; i++) {
      fn.call(c, this[i], i);
    }
  } else {
    //如果不是函数，手动抛出异常
    throw new Error(fn + " is not a function");
  }
};

/**
 * forEach 是没有return的，所以返回值永远是undefined
 */

let arr = [100, 80, 56, 101];
// 1. forEach  :  循环遍历数组；forEach 这个函数没有return，所以返回值永远是undefined；
let newArr = arr.forEach((item, index, ww) => {
  // 回调函数执行次数和数组成员的个数有关；
  // item -->数组成员  index-->索引  ww--->当前数组；
  // this ---> window
  console.log(item);
  console.log(ww);
  console.log(this);
  return 100;
});
console.log(newArr);

Array.prototype.forEach = function (fn) {
  for (let i = 0; i < this.length; i++) {
    fn(this[i], i);
  }
};
[1, 2, 3].forEach((item, index) => {
  console.log(item, index);
});
