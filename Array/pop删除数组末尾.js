Array.prototype.pop()
/*
  pop()

  1、作用： `删除数组的最后一项`
  2、参数： `不需要传参数`
  3、返回值： `被删除的那一项`
  4、是否改变原数组： `原有数组发生改变`
  */


var ary = [0,1,2,4,5,6];

//原型上封装
Array.prototype.myPop = function(){
    var value = this[this.length - 1];
    this.length--;
    return value;
}
console.log(ary.myPop()); // 被删除的那一项
console.log(ary);