Array.prototype.slice();

/**
 * 1、参数： `数组的截取`
 * 2、作用：
 *      `slice(m,n)：从数组索引m开始，截取到索引n，但是不包含n[前包后不包]`
 *      `slice(m)：从索引m开始，截取到末尾`
 *      `slice()：数组的克隆 slice(0)`
 *      `索引负数：让当前length+负数`
 * 3、返回值： `返回值是截取的数组`
 * 4、是否改变原数组： `原有数组不发生改变`
 */

Array.prototype.mySlice = function (start, end) {
  var newAry = []; // 创建一个变量用来接收返回值
  var len = this.length; //变量接收当前数组的长度

  /** 先对参数为undefined的情况进行处理 */
  start = start !== undefined ? start : 0;
  end = end !== undefined ? end : len;

  /** 对于参数的处理，采用三目运算符，由于在与0判断的时候自动转换为数字再进行判断，所以直接与0比较即可 */
  start = start >= 0 ? start : Math.max(0, len + start);
  end = end >= 0 ? Math.min(end, len) : len + end;

  var size = end - start; //用一个变量接收截取区间的长度
  if (size > 0) {
    // 当区间长度大于0时，实例化一个长度为size的数组，并赋值给newAry
    newAry = new Array(size);
    // 遍历数组，将当前数组[start,end]区间上的值一次赋值给newAry
    for (var i = 0; i < size; i++) {
      newAry[i] = this[i + start];
    }
  } else {
    return newAry; // 当区间长度小于等于0的情况下，直接返回空数组
  }
  return newAry;
};

/**
 * slice原理：
 *      首先：先分清楚slice有几种情况，slice的思想
 *          传的参数可以是其他类型的数据，只要能转成有效数字就可以(所以参数的类型要求比较灵活)
 *      其次：要注意的是只有第一个和第二个参数为有效参数，第三个及第三个以后的参数将对截取的结果不产生影响
 *
 *      对参数的处理：
 *          我们暂且把第一个参数给变量start,第二个参数给变量end
 *          1.当参数1、参数2同时为undefined或者其中一个为undefined的情况下
 *              情况1：参数1为undefined时，直接取start=0
 *              情况2：参数2为undefined时，直接取end=this.length
 *
 *          2.当参数1和参数2都不是undefined的情况下
 *              情况1：当第一个参数为负数的情况下：start取this.length与参数中的最大值;当第一个参数大于等于0的情况下,start直接取自己
 *              情况2：当第二个参数为负数的情况下，end取this.length与end的和;当参数大于0,end取this.length与end中的最小值
 *
 *      对区间长度的处理：设置size=end-start
 *          情况1：当区间长度小于等于0的情况下，直接返回空数组
 *          情况2：当区间长度大于0的情况下，不管对于字符串还是数组，创建一个长度为size的数组，依次从start到end，赋值给新的数组，将新数组返回
 *
 * @type {Array}
 */
