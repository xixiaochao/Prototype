Array.prototype.sort()

/**
     * 1、作用： `数组排序`
     * 2、参数： 
     *      1)、sort():只能数组成员是相同位数的数组
     *      2)、sort(function(a,b){return a-b}) 从小到大排序
     *      3)、sort(function(a,b){return b-a}) 从大到小排序
     * 3、返回值： `排序之后的数组`
     * 4、是否改变原数组： `原有数组发生改变`
    */

    //原型上封装
    Array.prototype.mySort = function(fn){
      if(Object.prototype.toString.call(fn) === '[object Function]'){  // 如果传进来参数的是函数
          for (var i = 0; i < this.length - 1; i++) { // 遍历数组,将前后两项作为实参传给fn
              if (fn.call(this, this[i], this[i + 1]) > 0) { // //如果fn执行之后的返回值大于0.就调用swap方法交换位置
                  var a = this[i];
                  b = this[i + 1];
                  this[i] = swap(a,b).a;
                  this[i + 1] = swap(a,b).b;
                  //交换之后，如果当前项不是第一项，则当前项(索引为i的项)继续跟前面的项进行比较
                  if(i > 0){
                      for (var j = i - 1; j >= 0; j--) {
                          if (fn.call(this, this[j], this[j + 1]) > 0) {
                              var a = this[j],
                              b = this[j + 1];
                              this[j] = swap(a, b).a;
                              this[j + 1] = swap(a, b).b;
                          }
                      }
                  }
              }
          }
      }else{
          //如果不是函数，则按正常排序
          //遍历数组，将前后两项进行比较
          for (var i = 0; i < this.length - 1; i++) {
              var cur = this[i]; //当前项
              var next = this[i + 1]; //下一项
              if (comASCII(cur, next)) {
                  //当返回true的时候交换，并且交换完成之后，当前项继续往前比较
                  this[i] = swap(cur, next).a;
                  this[i + 1] = swap(cur, next).b;
                  //当前项继续向前比较
                  if (i > 0) {
                      for (var k = i - 1; k >= 0; k--) {
                          var cur = this[k];
                          var next = this[k + 1];
                          if (comASCII(cur, next)) {
                              this[k] = swap(cur, next).a;
                              this[k + 1] = swap(cur, next).b;
                          }
                      }
                  }
              }
          }
      }
  
      //封装一个交换位置的函数
      function swap(a, b) {
          return {
          a: b,
          b: a
          }
      }

      //如果不传参的情况下比较ASCII码
      function comASCII(cur, next) {
          //全部转换为字符串、逐项比较ASCII码
          cur = cur.toString();
          next = next.toString();
          //取长度最大值
          var len = cur.length > next.length ? next.length : cur.length;
          //当前后两项都不是不是{}类型的数据时，进行比较
          if (cur !== '[object Object]' && next !== '[object Object]') {
              for (var j = 0; j < len; j++) {
                  if (!isNaN(cur.charCodeAt(j)) && !isNaN(next.charCodeAt(j))) {
                  //如果二者的ASCII码都是有效数字
                  if (cur.charCodeAt(j) > next.charCodeAt(j)) {
                  //如果前一项比后一项当前的ASCII码大，则返回true，交换位置
                      return true;
                  } else if (cur.charCodeAt(j) == next.charCodeAt(j)) {
                      continue;
                  } else {
                      return false;
                  }
              }
          }
          if (!isNaN(cur.charCodeAt(len)) && isNaN(next.charCodeAt(len)) && (cur.charCodeAt(len - 1) == next
              .charCodeAt(len - 1))) {
              //比较完之后，如果前一项ASCII还是有效数字，说明前项比后项大，交换
                  return true;
              }
          }
          //如果上述条件不满足，则不交换
          return false;
      }
      return this;//返回当前数组
  }
  /**
   * sort方法实现过程比较复杂：功能如下
   *      情况1：无参实现对字符串数组的排序
   *      情况2：无参实现对number类型的数组进行排序
   *      情况3：无参实现对字符串、number等混合类型的数组的排序
   *      情况4：带参实现对number类型的数值数据排序
   *      情况5：带参sort()对简单对象List的自定义属性排序
   *      情况6：带参实现对字符串、number混合类型的数组的排序
   *
   * 核心原理：
   *      不带参（以及带的参数不是函数）的情况下:默认升序排列
   *      不带参的情况下，直接转字符串，逐个比较ASCII码的值
   *      只要有一个是对象{}就不交换
   *
   * 带参数为函数的情况下：
   *      根据函数的返回值进行比较；如果函数返回值大于0；则交换位置
   *
   * 参数的情况
   *      情况1：如果参数不是函数，则不影响原来排序过程
   *      情况2：如果参数是函数，则根据回调函数中的返回值进行排序。如果返回值大于0，则交换位置；如果返回值小于0，则不交换位置
   *      如果返回值不是一个数字，则不交换位置
   */