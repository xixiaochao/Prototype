Array.prototype.toString();

/**
 * 1、作用： `转字符串`
 * 2、参数： `不需要参数`
 * 3、返回值： `返回一个去了中括号之后的字符串`
 * 4、是否改变原数组： `原有数组不发生改变`
 */

// 原型上的封装
Array.prototype.myToString = function () {
  //用一个空字符串去拼接数组,每一项（除了最后一项）拼上一个逗号，
  var str = "";
  for (var i = 0; i < this.length; i++) {
    var cur = this[i];
    if (i !== this.length - 1) {
      str += cur + ",";
    } else {
      str += cur;
    }
  }
  return str;
};
