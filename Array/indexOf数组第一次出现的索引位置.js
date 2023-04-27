Array.prototype.indexOf();

/**
 * 1、作用： `检测数组成员在数组中第一次出现的索引位置； 判断当前项是否在数组中存在；如果不存在，返回-1`
 * 2、参数： `需要参数`
 * 3、返回值： `返回在数组中第一次出现的索引`
 * 4、是否改变原数组： `原有数组不发生改变`
 */

/**
 * 原型上的封装
 *
 * 分析
 * 功能：查找当前项在数组中第一次出现的索引，查找成功返回当前索引，失败返回-1
 * 返回-1 的情况：
 * n是undefined。即不传参
 * n找不到
 *
 */
Array.prototype.myIndexOf = function (n) {
  if (n) {
    for (var i = 0; i < this.length; i++) {
      var cur = this[i];
      if (cur === n) {
        return i; // 直接返回当前索引值
      }
    }
    return -1; // 如果遍历完数组还是找不到，返回-1
  }
  return -1; // 如果n是undefined，返回-1
};
