Array.prototype.map();

/**
 * 1、作用： `遍历数组和映射`
 * 2、参数： `需要参数`
 * 3、返回值： `映射之后的数组`
 * 4、是否改变原数组： `原有数组不发生改变`
 */

/**
 *  原型上的封装
 *
 * map遍历数组，传参有两个，第一个是回调函数，第二个参数可以改变回调函数中的this，
 * 当第二个参数不传的时候，回调函数中的this非严格模式下指向undefined
 * 回调函数中的第一个参数是当前项，第二个参数是当前项的索引，
 * 有多少项回调函数就执行多少次，回调函数有返回值, 并存在一个数组中，当成map返回值返回
 */
Array.prototype.myMap = function (fn, c) {
  var newAry = [];
  if (Object.prototype.toString.call(fn) === "[object Function]") {
    //如果是一个函数，执行下面的的循环语句
    for (var i = 0; i < this.length; i++) {
      newAry[i] = fn.call(c, this[i], i);
    }
  } else {
    //如果不是函数，手动抛出异常
    throw new Error(fn + " is not a function");
  }
  return newAry;
};

let arr = [1, 3, 4, 6];
let a = arr.map((item, index) => {
  return 100;
});

console.log(arr); // [1,3,4,6]
console.log(a); // [100,100,100,100]

// map返回值 返回值是一个新数组
Array.prototype.map = function (fn) {
  let arr = [];
  for (let i = 0; i < this.length; i++) {
    arr.push(fn(this[i], i));
  }
  return arr;
};
let arr1 = [1, 2, 3].map((item) => {
  return item * 2;
});
console.log(arr1);
