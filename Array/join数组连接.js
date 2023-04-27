Array.prototype.join();

/**
 * 1、作用： `把数组成员按照特定的字符连接成一个字符串`
 * 2、参数：
 *      1).不传参数,会默认按照逗号分开
 *      2).传参数，(特定的字符)
 * 3、返回值： `拼接之后的字符串`
 * 4、是否改变原数组： `原有数组不发生改变`
 */

// 原型上的封装
Array.prototype.myJoin = function (n) {
  // 对形参n的处理，如果是undefined就默认的逗号拼接，如果传参了就按参数拼接
  n = n === undefined ? "," : n.toString();
  var str = ""; // 声明一个空字符串
  for (var i = 0; i < this.length; i++) {
    var cur = this[i]; // 存储当前项
    if (i !== this.length - 1) {
      // 如果不是最后一项就拼接上n，如果是最后一项就直接拼上当前项的值
      str += cur + n;
    } else {
      str += cur;
    }
  }
  return str;
};
