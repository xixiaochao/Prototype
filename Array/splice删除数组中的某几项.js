Array.prototype.splice()

/**
     * 1、参数： `删除数组中的某几项`
     * 2、作用： 
     *      `splice(m,n)：从索引开始，删除n个`
     *      `splice(m)：从索引m开始删除到末尾`
     *      `splice(0)：从索引0开始，删除到数组的末尾`
     *      `splice(m,x,n)：替换从索引m开始，删除x个，用n替换`
     * 3、返回值： `删除哪几项，并且以数组返回`
     * 4、是否改变原数组： `原有数组发生改变`
    */

Array.prototype.mySplice = function (start,delNum) {
  start = (start === undefined) ? 0 : start; // 判断start是否为undefined，默认赋值为0，否则取本身的值
  start = (start < 0) ? (start + this.length) : start; // 判断start是否为负数，为负数则返回当前值与数组长度的和
  var len = this.length - start; // 变量接收剩余的长度
  delNum = (delNum > len || delNum === undefined) ? len : delNum; // 第二项没有传值的情况下，默认删除剩余的所有项，判断delNum要删除的项数是否大于剩余的项数，大于则取当前数组剩余的项，条件不成立取当前值
  // 判断有没有第三项及以后的项，即arguments的长度是否大于等于3
  var newAry = []; // 创建一个空地址，用于接收被删除的项
  if(delNum > 0){ // 当delNum>0时，删除delNum项，当delNum<=0时不删除
      for(var i = start; i < delNum + start; i++){
          newAry[i - start] = this[i];
      }
      for(var j = 0; j < delNum; j++){
          for(var k = start; k < this.length - 1; k++){
              this[k] = this[k + 1];
          }
          this.length--;
      }
  }else{
      newAry = []; // delNum<=0时，不删除，返回空数组
  }

  if(arguments.length > 2){ // 条件成立，即有第三个参数，全部插入当前数组中，在start索引的前一项开始插入
      var ary1 = []; // 目的是先把值存储起来，等arguments中的值全部插入之后，再将ary1依次插入
      for(var l = start ; l <this.length; l++){
          ary1[l - start] = this[start];
      }
      for(var m = 2; m < arguments.length; m++){
          this[start++] = arguments[m]; // 将arguments的剩余项从start开始依次添加进this中
      }
      for(var n = 0; n < ary1.length; n++){
          this[start++] = ary1[n];
      }
  } // else 否则 <=2 时，不需要添加数组，直接删除即可
  return newAry;
}

/**
* splice原理：
*      `参数的三个含义`：开始修改的位置、删除的项数、添加进来的项
*      `参数的情况`：暂且把第一个参数设置为start、删除的项数为delNum
*          情况1：如果第一个参数为undefined或者则默认start从零开始，如果第一个参数为负数，则start = 第一个参数加数组长度
*          情况2：如果删除的项数超过了剩余的项数，则只删除剩余的项数
*          情况3：第三个参数及以后，都是先删除了之后在把剩余的参数从start的位置开始添加进来
* 
* splice实现的三个功能：
*      1、添加 ； 2、删除 ； 3、替换；当删除0项的时候为替换
*      返回值：返回值是返回被删除的那几项，并以数组的形式返回
* 
* splice实现的方法:
*    参数1和参数2，实现了删除，并且将删除的项存储到一个数组中返回
*      1、先创建一个空数组将要删除的项存储起来
*      2、用两层循环（外层循环的次数是删除的项数），
*         内层循环是从start位置开始遍历this，
*         每次循环都将后面一项赋值给前一项，
*         内层循环结束之后，删除最后一项
*    参数3及后面的参数实现插入功能
*      1、同样创建一个空数组，从start位置开始先把this后面的项存储起来
*      2、将arguments第三项以后的值依次插入this中
*      3、插入完成之后，在把刚才空数组中的项依次插入this的末尾
*/
