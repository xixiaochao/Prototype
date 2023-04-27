Array.prototype.concat();
/*
  concat() 方法用于合并两个或多个数组。此方法不会更改现有数组，而是返回一个新数组。

    1、作用： `数组的拼接`
    2、参数：
        1)、不传参数：数组的克隆
        2)、传参数：（数组、每一项）；把传入的实参拼接新的数组中
    3、返回值： `拼接之后的新数组`
    4、是否改变原数组： `原有数组不发生改变`

    分为传参和不传参两种情况
    传参又分为传入的是数字，还是数组
    不传参直接返回当前实例this
  */

const array1 = ["a", "b", "c"];
const array2 = ["d", "e", "f"];
const array3 = array1.concat(array2);

console.log(array3);
// Expected output: Array ["a", "b", "c", "d", "e", "f"]

// 使用 Symbol.isConcatSpreadable 合并类数组对象
// concat 默认情况下不会将类数组对象视作数组——仅在 Symbol.isConcatSpreadable 被设置为真值（例如，true）时才会将类数组对象视作数组。

const obj1 = { 0: 1, 1: 2, 2: 3, length: 3 };
const obj2 = {
  0: 1,
  1: 2,
  2: 3,
  length: 3,
  [Symbol.isConcatSpreadable]: false,
};
console.log([0].concat(obj1, obj2));
// [ 0, { '0': 1, '1': 2, '2': 3, length: 3 }, 1, 2, 3 ] true
// [ 0,
//   { '0': 1, '1': 2, '2': 3, length: 3 },
//   { '0': 1,
//     '1': 2,
//     '2': 3,
//     length: 3,
//     [Symbol(Symbol.isConcatSpreadable)]: false } ] false

// 手动实现concat 原型上的封装

Array.prototype.myConcat = function(){
  var newAry = []; //创建一个数组，接收this的值和传进来的参数
  //先遍历this，把this中的值赋值给newAry
  for(var i = 0; i < this.length; i++){
      newAry[i] = this[i];
  }
  //遍历实参判断实参是否是数组，如果是数组则遍历添加进去，如果不是数组，直接添加
  for(var j = 0; j <arg.length; i++){
      var cur = arg[j]; // 存储当前值
      if(Object.prototype.toString.call(cur) === '[object Array]'){
          // 如果是数组，遍历该数组，添加进去
          for(var k = 0; k < cur.length; k++){
              newAry[newAry.length] = cur[k];
          }
      }else{
          newAry[newAry.length] = cur; // 如果不是数组，则直接添加
      }
  }
  return newAry; // 返回拼接之后的数组
}

Array.prototype.myConcatParam = function () {
  var ary = [];
  for (var i = 0; i < this.length; i++) {
    ary[i] = this[i];
  }
  if (typeof cur !== "object") {
    for (var j = 0; j < arguments.length; j++) {
      ary[this.length + j] = arguments[j];
    }
  } else if (typeof cur === "object" && cur !== null) {
    for (var j = 0; j < cur.length; j++) {
      ary[this.length + j] = cur[j];
    }
  }
  return ary;
};

var ary = [0, 1, 2];
var newAry = [3, 4, 5];
console.log(ary.myConcat(newAry));
console.log(ary.myConcat(3, 4));
console.log(ary.myConcat());
console.log(ary);
