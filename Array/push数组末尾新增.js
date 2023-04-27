Array.prototype.push();
/*
    push()

    1、作用： `向数组末尾新增一项`
    2、参数： `参数是新增的那一项;可以传多个`
    3、返回值： `新数组的数组成员的个数`
    4、是否改变原数组： `原有数组发生改变`
    */

var ary = [12, 89, 89, 36, 0, "dsh", true, 99];
ary.push(100);
ary[ary.length] = 100;
console.log(ary);

//原型上封装
Array.prototype.myPush = function () {
  for (let i = 0; i < arguments.length; i++) {
    this[this.length] = arguments[i];
  }
  return this;
};
console.log(ary.myPush(1, 2));
