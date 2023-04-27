Array.prototype.reverse();

/**
 * 1、作用： `将数组颠倒过来`
 * 2、参数： `不需要传参数`
 * 3、返回值： `数组成员顺序倒过来之后的数组`
 * 4、是否改变原数组： `原有数组发生改变`
 */

//原型上封装
Array.prototype.myReverse = function () {
  var len = this.length; // 实例一个长度为this.length的数组
  var newAry = new Array(len);
  for (var i = 0; i < len; i++) {
    newAry[i] = this[len - 1 - i]; // this数组依次从后来时赋值给新数组newAry
  }
  for (var j = 0; j < len; j++) {
    this[j] = newAry[j]; // 将newAry数组的值从前往后依次赋值给this
  }
  return newAry;
};
